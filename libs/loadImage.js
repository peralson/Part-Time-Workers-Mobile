export default loadImage = (base) => {
  return base ? { uri: `data:image/png;base64,${base}` } : null;
};
