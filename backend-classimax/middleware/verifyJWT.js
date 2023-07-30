const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;

    // Check if the user has the 'admin' role
    if (!req.roles || !req.roles.includes('admin')) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    next();
  });
};

module.exports = verifyJWT;
