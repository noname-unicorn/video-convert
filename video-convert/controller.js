const {videoConvertService} = require("./service");

exports.videoConvertController = async (request, response) => {
  const { file } = request.body;
  const data = await videoConvertService(file);
  return response.status(200).send(data);
};
