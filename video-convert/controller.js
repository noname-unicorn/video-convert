const {videoConvertService} = require("./service");

exports.videoConvertController = async (request, response) => {
  const { file } = request.body;
  await videoConvertService(file);
  return response.status(200).send('ok');
};
