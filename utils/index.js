exports.asyncMiddleware = (func) => {
  return async (request, response, next) => {
    try {
      await func(request, response, next);
    } catch (err) {
      next(err);
    }
  };
}
