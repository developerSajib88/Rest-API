module.exports.errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Something Went Wrong!",
      error: err.message || err,
    });
  }