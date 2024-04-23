function isAuthenticated(req, res, next) {
  if (req.session.user) {
      next();  // User is logged in, proceed to the next middleware
  } else {
      res.status(401).json({ message: "Not authorized" });  // User is not logged in, block access
  }
}

module.exports = isAuthenticated;