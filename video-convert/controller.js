const {videoConvertService} = require("./service");

exports.videoConvertController = async (request, response) => {
  const { file } = request.body;
  await videoConvertService(({code, data}) => {
    return response.status(code).send(data);
  });
};
