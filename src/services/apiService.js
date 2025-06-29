// API configuration and base service
import MockBackend from './mockBackend';

// Directly set the API base URL
const API_BASE_URL = 'https://50ce-102-210-40-226.ngrok-free.app';
// Use mock backend by default in development
const USE_MOCK_BACKEND = false; // Set to true to use mock backend

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.useMock = USE_MOCK_BACKEND;
  }

  // Helper method to get auth headers
  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options
    };

    console.log('🌐 Making API call:', {
      url,
      method: config.method || 'GET',
      headers: config.headers
    });

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      console.log('📥 API Response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        data: data
      });

      if (!response.ok) {
        // Handle your backend's error structure
        let errorMessage;
        
        if (Array.isArray(data)) {
          // If data is an array, take the first error message
          errorMessage = data[0] || `HTTP error! status: ${response.status}`;
        } else {
          // If data is an object, try different error message fields
          errorMessage = data.message || data.detail || data.error || `HTTP error! status: ${response.status}`;
        }
        
        console.error('❌ API Error:', errorMessage);
        throw new Error(errorMessage);
      }

      return data;
    } catch (error) {
      console.error('❌ API call failed:', error);
      throw error;
    }
  }

  // Authentication endpoints
  async login(credentials) {
    if (this.useMock) {
      return MockBackend.login(credentials);
    }
    return this.apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  }

  async signup(userData) {
    if (this.useMock) {
      return MockBackend.signup(userData);
    }
    
    const requestBody = {
      first_name: userData.firstName,
      second_name: userData.secondName || '',
      last_name: userData.lastName,
      email: userData.email,
      phone_number: userData.phone || '',
      password: userData.password
    };
    
    console.log('📤 Signup API Request:');
    console.log('URL:', `${this.baseURL}/auth/v1/signup/`);
    console.log('Body:', requestBody);
    
    return this.apiCall('/auth/v1/signup/', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    });
  }

  async verifyOtp(otpData) {
    if (this.useMock) {
      return MockBackend.verifyOtp(otpData);
    }
    return this.apiCall('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify(otpData)
    });
  }

  async resendOtp(userId) {
    if (this.useMock) {
      return MockBackend.resendOtp(userId);
    }
    return this.apiCall('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({ userId })
    });
  }

  async refreshToken() {
    if (this.useMock) {
      const refreshToken = localStorage.getItem('refreshToken');
      return MockBackend.refreshToken(refreshToken);
    }
    const refreshToken = localStorage.getItem('refreshToken');
    return this.apiCall('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken })
    });
  }

  async logout() {
    return this.apiCall('/auth/logout', {
      method: 'POST'
    });
  }

  async forgotPassword(email) {
    return this.apiCall('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  }

  async resetPassword(resetData) {
    return this.apiCall('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify(resetData)
    });
  }

  // User profile endpoints
  async getProfile() {
    if (this.useMock) {
      const token = localStorage.getItem('authToken');
      return MockBackend.getProfile(token);
    }
    return this.apiCall('/user/profile');
  }

  async updateProfile(profileData) {
    return this.apiCall('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });
  }

  // Protected routes test
  async getDashboardData() {
    return this.apiCall('/user/dashboard');
  }
}

export default new ApiService();
