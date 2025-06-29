# Authentication Integration Guide

This guide explains how to set up and use the integrated authentication system with your React frontend.

## Features Implemented

✅ **Complete Authentication Flow**
- User registration with email verification
- Login with email/password
- OTP verification system
- Protected routes
- Token management and refresh
- User session management

✅ **Components Updated**
- Login page with backend integration
- Signup page with validation
- OTP verification with resend functionality
- Protected route wrapper
- Navbar with authentication state
- User dropdown menu

✅ **Backend Integration**
- API service with configurable endpoints
- Mock backend for development/testing
- Token management system
- Error handling and validation

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in your frontend root directory:

```env
REACT_APP_API_BASE_URL=http://localhost:3001/api
# Set to true to use real backend instead of mock
REACT_APP_USE_REAL_BACKEND=false
```

### 2. Install Dependencies

The authentication system uses existing React Router dependencies. No additional packages needed.

### 3. Test the Authentication System

#### Using Mock Backend (Default)

The system comes with a built-in mock backend for testing:

**Test Credentials:**
- Email: `demo@example.com`
- Password: `password123`

**Test Signup:**
1. Go to `/signup`
2. Fill in any details
3. Check browser console for OTP code
4. Enter the OTP on verification page

#### Using Real Backend

1. Set `REACT_APP_USE_REAL_BACKEND=true` in `.env`
2. Update `REACT_APP_API_BASE_URL` to your backend URL
3. Ensure your backend implements the required endpoints (see API section below)

## File Structure

```
src/
├── contexts/
│   └── AuthContext.jsx          # Authentication context and hooks
├── services/
│   ├── apiService.js           # API service with backend calls
│   ├── mockBackend.js          # Mock backend for testing
│   └── tokenManager.js         # Token management utilities
├── components/
│   └── ProtectedRoute.jsx      # Route protection wrapper
├── pages/
│   └── aurth/
│       ├── login.jsx           # Login page with backend integration
│       ├── signup.jsx          # Signup page with validation
│       ├── OtpVerification.jsx # OTP verification page
│       └── aurth.css           # Authentication styles
└── App.jsx                     # Updated with AuthProvider and protected routes
```

## API Endpoints Required

Your backend should implement these endpoints:

### Authentication Endpoints

```
POST /api/auth/login
Body: { email, password }
Response: { accessToken, refreshToken, user }

POST /api/auth/signup  
Body: { firstName, lastName, email, password, phone? }
Response: { userId, requiresVerification, message }

POST /api/auth/verify-otp
Body: { userId, otp }
Response: { accessToken, refreshToken, user }

POST /api/auth/resend-otp
Body: { userId }
Response: { message }

POST /api/auth/refresh
Body: { refreshToken }
Response: { accessToken, refreshToken? }

POST /api/auth/logout
Headers: Authorization: Bearer <token>
Response: { message }
```

### User Endpoints

```
GET /api/user/profile
Headers: Authorization: Bearer <token>
Response: { id, email, firstName, lastName, phone }

PUT /api/user/profile
Headers: Authorization: Bearer <token>
Body: { firstName?, lastName?, phone? }
Response: { user }
```

## Usage Examples

### Using Authentication in Components

```jsx
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Creating Protected Routes

```jsx
import ProtectedRoute from '../components/ProtectedRoute';

// Protect a route (requires authentication)
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>

// Prevent authenticated users from accessing login
<Route 
  path="/login" 
  element={
    <ProtectedRoute requireAuth={false}>
      <Login />
    </ProtectedRoute>
  } 
/>
```

### Manual API Calls

```jsx
import ApiService from '../services/apiService';

// In an async function
try {
  const result = await ApiService.login({
    email: 'user@example.com',
    password: 'password123'
  });
  console.log('Login successful:', result);
} catch (error) {
  console.error('Login failed:', error.message);
}
```

## Development Features

### Mock Backend
- Simulates real backend responses
- Includes realistic delays
- Console logs OTP codes for testing
- Stores users in memory (resets on page refresh)

### Token Management
- Automatic token refresh on API calls
- Secure token storage in localStorage
- Automatic logout on token expiration
- Request queuing during token refresh

### Error Handling
- Form validation with real-time feedback
- API error messages displayed to users
- Network error handling
- Graceful fallbacks for failed requests

## Customization

### Styling
Authentication styles are in `src/pages/aurth/aurth.css`. Customize colors by updating CSS variables:

```css
:root {
  --primary-color: #01574C;
  --primary-hover: #014940;
  --error-color: #e53e3e;
}
```

### API Configuration
Update `src/services/apiService.js` to modify:
- API endpoints
- Request headers
- Error handling
- Response parsing

### Mock Data
Update `src/services/mockBackend.js` to modify:
- Test users
- OTP behavior
- Response delays
- Error scenarios

## Security Considerations

⚠️ **Important for Production:**

1. **Environment Variables**: Store sensitive config in environment variables
2. **HTTPS**: Always use HTTPS in production
3. **Token Storage**: Consider more secure storage for sensitive apps
4. **Validation**: Implement proper server-side validation
5. **Rate Limiting**: Add rate limiting to prevent abuse
6. **CORS**: Configure CORS properly for your domain

## Troubleshooting

### Common Issues

1. **"useAuth must be used within an AuthProvider"**
   - Ensure your App.jsx wraps routes with `<AuthProvider>`

2. **Process is not defined**
   - This is normal in some React setups. The code handles this gracefully.

3. **API calls failing**
   - Check your `.env` file configuration
   - Verify backend is running on the correct port
   - Check browser console for detailed error messages

4. **OTP not working**
   - Check browser console for the mock OTP code
   - Ensure you're using the correct userId from signup

### Debug Mode

To see detailed authentication flow:

1. Open browser developer tools
2. Check Console tab for API calls and responses
3. Check Application > Local Storage for stored tokens
4. Check Network tab for API request details

## Next Steps

1. **Backend Implementation**: Implement the required API endpoints in your backend
2. **Real Email Service**: Set up actual email sending for OTP codes
3. **Password Reset**: Implement forgot password functionality
4. **Profile Management**: Add user profile editing features
5. **Admin Features**: Extend for admin role management

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your `.env` configuration
3. Test with the mock backend first
4. Ensure all required files are in place

The authentication system is now fully integrated and ready for use!
