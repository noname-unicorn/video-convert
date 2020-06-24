const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

exports.videoConvertService = async () => {

  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '/test-video/test.mp4');
    return ffmpeg.ffprobe(filePath, (error, videoInfo) => {
      if (error) {
        return reject(error);
      }

      const { duration, size } = videoInfo.format;
      console.log({duration, size});
      return resolve({
        size,
        durationInSeconds: Math.floor(duration),
      });
    })
  });
};
