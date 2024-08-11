const authService = {
  login(email, password) {
    // In a real application, you would call an API here to verify the user's credentials.
    // Since this is a dummy service, we'll just return true if email and password are provided.
    if (email && password) {
      // You can also save the user information to localStorage or sessionStorage if needed
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  },

  logout() {
    // Remove authentication data from localStorage or sessionStorage
    localStorage.removeItem('isAuthenticated');
  },

  isAuthenticated() {
    // Check if the user is authenticated
    return localStorage.getItem('isAuthenticated') === 'true';
  },
};

export default authService;
