// Authentication utility for frontend
// Checks if user is authenticated and has proper role access

function getToken() {
    return localStorage.getItem('authToken');
}

function getUser() {
    const user = localStorage.getItem('authUser');
    return user ? JSON.parse(user) : null;
}

function setAuth(token, user) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', JSON.stringify(user));
}

function clearAuth() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
}

function isAuthenticated() {
    return !!getToken();
}

function getAuthHeader() {
    const token = getToken();
    return token ? { 'Authorization': `Bearer ${token}` } : {};
}

// Redirect to login if not authenticated
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Redirect to login if user doesn't have required role
function requireRole(allowedRoles) {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }
    
    const user = getUser();
    if (!allowedRoles.includes(user.role)) {
        alert('You do not have permission to access this page');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Logout function
function logout() {
    clearAuth();
    window.location.href = 'login.html';
}
