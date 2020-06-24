const ffmpeg = require('fluent-ffmpeg');

exports.videoConvertService = async () => {
  // if (!file) {
  //   return {
  //     code: 400,
  //     data: '',
  //   }
  // }
  await ffmpeg.ffprobe('../test-video/test.mp4', function(err, metadata) {
    console.dir({metadata, err});
    return {
      code: 200,
      data: metadata,
    };
  });
};
