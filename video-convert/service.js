const ffmpeg = require('fluent-ffmpeg');

exports.videoConvertService = async () => {

  // return new Promise((resolve, reject) => {
  //   return ffmpeg.ffprobe('video-convert/test.mp4', (error, videoInfo) => {
  //     if (error) {
  //       return reject(error);
  //     }
  //
  //     const { duration, size } = videoInfo.format;
  //     console.log({duration, size});
  //     return resolve({
  //       size,
  //       durationInSeconds: Math.floor(duration),
  //     });
  //   })
  // });
  ffmpeg('video-convert/test.mp4')
    .videoCodec('libx264')
    .audioCodec('libmp3lame')
    .size('640x480')
    .on('error', function(err) {
      console.log('An error occurred: ' + err.message);
      return err.message
    })
    .on('end', function() {
      console.log('Processing finished !');
      return 'Success';
    })
    .save('video-convert/output.mp4');
};
