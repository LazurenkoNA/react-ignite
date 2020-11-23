// Media Resize
// eslint-disable-next-line import/prefer-default-export
export const smallImage = (imagePath, size) => {
  return imagePath.match(/media\/screenshots/)
    ? imagePath.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
    : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
};
