const { auth } = require('express-oauth2-jwt-bearer');
const axios = require('axios');

// Middleware to validate JWT
// This verifies the Bearer token in the Authorization header
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256'
});

// Middleware to fetch user info from Auth0 and attach to req.user
const attachUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'No authorization header found' });
    }

    const accessToken = authHeader.split(' ')[1];
    
    // Fetch user info from Auth0
    const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Attach user profile to req.user
    req.user = response.data;
    next();
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    return res.status(500).json({ message: 'Failed to fetch user info' });
  }
};

module.exports = { checkJwt, attachUser };
