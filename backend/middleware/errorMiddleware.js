/*
  Custom error handlers override the native Express error handler.
  These functions are imported into server.js.
  notFound() handles 404 - page not found errors.
  errorHandler handles other errors we want to throw.

  notFound() ends with a next() containing the 404 code.
  The next step in the middleware chain is errorHandler(),
  which deals with the 404.
  
  To return errors with this handler, we call: 
    res.status(some-http-error-code)
    throw new Error('Some-error-message')
*/

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.StatusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
