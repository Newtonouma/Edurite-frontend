// Mock backend for testing authentication integration
// This simulates backend responses for development/testing

class MockBackend {
  constructor() {
    this.users = [
      {
        id: 'user-1',
        email: 'demo@example.com',
        password: 'password123', // In real backend, this would be hashed
        firstName: 'Demo',
        lastName: 'User',
        phone: '+1234567890',
        verified: true
      }
    ];
    this.otpCodes = {};
  }

  // Simulate network delay
  delay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Generate mock JWT token
  generateToken(user) {
    return btoa(JSON.stringify({
      userId: user.id,
      email: user.email,
      exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    }));
  }

  // Mock login endpoint
  async login(credentials) {
    await this.delay(800);

    const user = this.users.find(u => 
      u.email === credentials.email && 
      u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    if (!user.verified) {
      throw new Error('Please verify your email before logging in');
    }

    const token = this.generateToken(user);
    
    return {
      accessToken: token,
      refreshToken: `refresh_${token}`,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone
      }
    };
  }

  // Mock signup endpoint
  async signup(userData) {
    await this.delay(1000);

    // Check if user already exists
    const existingUser = this.users.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      secondName: userData.secondName,
      lastName: userData.lastName,
      phone: userData.phone,
      verified: false
    };

    this.users.push(newUser);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otpCodes[newUser.id] = {
      code: otp,
      expires: Date.now() + 10 * 60 * 1000 // 10 minutes
    };

    console.log(`Mock OTP for ${userData.email}: ${otp}`); // For testing

    return {
      userId: newUser.id,
      requiresVerification: true,
      message: 'Verification code sent to your email'
    };
  }

  // Mock OTP verification endpoint
  async verifyOtp(otpData) {
    await this.delay(500);

    const otpInfo = this.otpCodes[otpData.userId];
    
    if (!otpInfo) {
      throw new Error('No OTP found for this user');
    }

    if (Date.now() > otpInfo.expires) {
      delete this.otpCodes[otpData.userId];
      throw new Error('OTP has expired');
    }

    if (otpInfo.code !== otpData.otp) {
      throw new Error('Invalid OTP code');
    }

    // Mark user as verified
    const user = this.users.find(u => u.id === otpData.userId);
    if (user) {
      user.verified = true;
    }

    // Clean up OTP
    delete this.otpCodes[otpData.userId];

    const token = this.generateToken(user);

    return {
      accessToken: token,
      refreshToken: `refresh_${token}`,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone
      }
    };
  }

  // Mock resend OTP endpoint
  async resendOtp(userId) {
    await this.delay(300);

    const user = this.users.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otpCodes[userId] = {
      code: otp,
      expires: Date.now() + 10 * 60 * 1000 // 10 minutes
    };

    console.log(`Mock OTP for ${user.email}: ${otp}`); // For testing

    return {
      message: 'OTP resent successfully'
    };
  }

  // Mock get profile endpoint
  async getProfile(token) {
    await this.delay(200);

    try {
      const decoded = JSON.parse(atob(token));
      const user = this.users.find(u => u.id === decoded.userId);
      
      if (!user) {
        throw new Error('User not found');
      }

      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone
      };
    } catch {
      throw new Error('Invalid token');
    }
  }

  // Mock refresh token endpoint
  async refreshToken(refreshToken) {
    await this.delay(200);

    // Simple validation - in real backend, verify refresh token
    if (!refreshToken.startsWith('refresh_')) {
      throw new Error('Invalid refresh token');
    }

    const originalToken = refreshToken.replace('refresh_', '');
    try {
      const decoded = JSON.parse(atob(originalToken));
      const user = this.users.find(u => u.id === decoded.userId);
      
      if (!user) {
        throw new Error('User not found');
      }

      const newToken = this.generateToken(user);
      
      return {
        accessToken: newToken,
        refreshToken: `refresh_${newToken}`
      };
    } catch {
      throw new Error('Invalid refresh token');
    }
  }
}

export default new MockBackend();
