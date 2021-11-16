const CorsMiddleware = (req, res, next) => {
  res.header("access-control-allow-origin", "*"); // tells the browser to allow code from any origin.
  res.header("access-control-allow-methods", "GET, POST, PUT, DELETE"); // specifies the method(s) allowed when accessing the resource in the response to a preflight request.
  res.header(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  return next();
};

module.exports = CorsMiddleware;
