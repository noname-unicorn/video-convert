const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

exports.videoConvertService = async () => {

  return new Promise((resolve, reject) => {
    return ffmpeg.ffprobe(fs.createReadStream('../test-video/test.mp4'), (error, videoInfo) => {
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
