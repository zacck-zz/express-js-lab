module.exports = {
  requireAuthentication: (req, res, next) => { // next tells express to move on
    console.log('private route hit');
    next();
  },
  logger: (req, res, next) => {
    const date = new Date().toString();
    console.log(`Request ${req.method}  ${req.originalUrl} ${date}`);
    next();
  }
}
