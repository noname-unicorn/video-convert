const {videoConvertRoute} = require("./video-convert/route");

exports.routes = (app) => {
    app.get('/test', (_, res) => {
    return res.status(200).send('work')
  }),
    videoConvertRoute(app)
};
