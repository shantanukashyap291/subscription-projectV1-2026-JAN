const errorMiddleware=(err,req,res,next)=>{
 
  let error = { ...err };
  error.message = err.message;

  // 2. ❌ MONGOOSE DUPLICATE KEY (E11000)
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)[0]} entered`;
    error = new ErrorHandler(message, 400);
  }

  // 3. ❌ MONGOOSE VALIDATION ERROR
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = new ErrorHandler(message, 400);
  }

  // 4. ❌ JWT ERROR
  if (err.name === 'JsonWebTokenError') {
    const message = 'JSON Web Token is invalid, Try again!!!';
    error = new ErrorHandler(message, 401);
  }

  // 5. ❌ JWT EXPIRED
  if (err.name === 'TokenExpiredError') {
    const message = 'JSON Web Token is Expired, Try again!!!';
    error = new ErrorHandler(message, 401);
  }

  // 6. DEVELOPMENT: Full error object
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    return res.status(error.statusCode || 500).json({
      success: false,
      error: error,
      message: error.message,
      stack: error.stack  // Full stack trace
    });
  }

  // 7. PRODUCTION: Hide sensitive data
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Internal Server Error'
    // NO stack trace!
  });
 next();
}


export default errorMiddleware;