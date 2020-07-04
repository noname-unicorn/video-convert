const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

exports.videoConvertService = async (cb) => {
  await ffmpeg('video-convert/test.mp4')
    .videoCodec('libx264')
    .audioCodec('aac')
    .videoBitrate('700k')
    .on('error', function(err) {
      cb({
        code: 400,
        data: err.message
      })
    })
    .on('end', function() {
      ffmpeg.ffprobe('video-convert/output.mp4', (error, videoInfo) => {
        if (error) {
          cb({
            code: 400,
            data: error,
          })
        }
        const { duration, size } = videoInfo.format;
        fs.unlink('video-convert/output.mp4', (err) => {
          if (err) {
            cb({
              code: 400,
              data: `Error to remove file ${err}`
            })
          }
          cb({
            code: 200,
            data: {
              duration,
              size,
              message: 'delete file success',
            }
          })
        })
      });
    })
    .save('video-convert/output.mp4');
};
