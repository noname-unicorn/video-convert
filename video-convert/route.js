const {videoConvertController} = require("./controller");
const {asyncMiddleware} = require("../utils");

exports.videoConvertRoute = (app) => {
  app.get('/api/v1/video-convert', asyncMiddleware(videoConvertController));
};
