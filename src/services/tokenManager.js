// Token refresh interceptor for API calls
import ApiService from './apiService';

class TokenManager {
  constructor() {
    this.isRefreshing = false;
    this.failedQueue = [];
  }

  // Add request interceptor to include auth token
  addRequestInterceptor() {
    // This would be used if you're using axios
    // For fetch, the token is already handled in apiService
  }

  // Process failed requests after token refresh
  processQueue(error, token = null) {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
    
    this.failedQueue = [];
  }

  // Handle token refresh
  async handleTokenRefresh() {
    if (this.isRefreshing) {
      // If already refreshing, queue this request
      return new Promise((resolve, reject) => {
        this.failedQueue.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      await ApiService.refreshToken();
      this.processQueue(null, true);
      return true;
    } catch (error) {
      this.processQueue(error, null);
      // Clear auth data if refresh fails
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
      return false;
    } finally {
      this.isRefreshing = false;
    }
  }

  // Check if token needs refresh (call this before API calls)
  async ensureValidToken() {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    // You can add token expiry check here
    // For now, we'll assume the backend will handle expired tokens
    return true;
  }
}

export default new TokenManager();
