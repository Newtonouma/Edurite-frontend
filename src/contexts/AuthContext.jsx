import React, { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/apiService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setLoading(false);
        return;
      }

      // Verify token and get user profile
      const userData = await ApiService.getProfile();
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Auth check failed:', error);
      // Token might be invalid, clear it
      clearAuthData();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await ApiService.login(credentials);
      
      // Store tokens
      localStorage.setItem('authToken', response.accessToken);
      if (response.refreshToken) {
        localStorage.setItem('refreshToken', response.refreshToken);
      }

      // Set user data
      setUser(response.user);
      setIsAuthenticated(true);

      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (userData) => {
    try {
      console.log('🚀 Sending signup request with data:', userData);
      const response = await ApiService.signup(userData);
      console.log('✅ Signup response received:', response);
      
      // Handle your backend's response structure
      if (response.status_code === 201) {
        console.log('✅ Account created successfully:', response.data);
        // Account created successfully, but no verification mentioned in response
        // Check if your backend requires verification or logs user in immediately
        
        // For now, assume verification is required since no tokens are provided
        return { 
          success: true, 
          data: { 
            userId: response.data.id,
            user: response.data,
            message: response.message 
          }, 
          requiresVerification: true 
        };
      }

      // If verification is not required and tokens are provided
      if (response.accessToken) {
        console.log('🔑 Tokens received, logging user in immediately');
        localStorage.setItem('authToken', response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem('refreshToken', response.refreshToken);
        }
        
        // Map your backend user structure to frontend structure
        const user = {
          id: response.data.id,
          email: response.data.email,
          firstName: response.data.first_name,
          secondName: response.data.second_name,
          lastName: response.data.last_name,
          phone: response.data.phone_number
        };
        
        setUser(user);
        setIsAuthenticated(true);
      }

      return { success: true, data: response };
    } catch (error) {
      console.error('❌ Signup failed:', error);
      console.error('❌ Error details:', error.message);
      return { success: false, error: error.message };
    }
  };

  const verifyOtp = async (otpData) => {
    try {
      const response = await ApiService.verifyOtp(otpData);
      
      // After successful OTP verification, log user in
      localStorage.setItem('authToken', response.accessToken);
      if (response.refreshToken) {
        localStorage.setItem('refreshToken', response.refreshToken);
      }

      setUser(response.user);
      setIsAuthenticated(true);

      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const resendOtp = async (userId) => {
    try {
      const response = await ApiService.resendOtp(userId);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await ApiService.logout();
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      clearAuthData();
    }
  };

  const clearAuthData = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('pendingUserId');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await ApiService.updateProfile(profileData);
      setUser(response.user);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await ApiService.forgotPassword(email);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const resetPassword = async (resetData) => {
    try {
      const response = await ApiService.resetPassword(resetData);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Token refresh functionality
  const refreshToken = async () => {
    try {
      const response = await ApiService.refreshToken();
      localStorage.setItem('authToken', response.accessToken);
      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      clearAuthData();
      return false;
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    verifyOtp,
    resendOtp,
    logout,
    updateProfile,
    forgotPassword,
    resetPassword,
    refreshToken,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
