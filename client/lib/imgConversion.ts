export const imgSizeConversion = (sizeInBytes: number): string => {
  let result = Number((sizeInBytes / (1024 * 1024)).toFixed(2));
  if (result > 0.0) {
    return `${result} MB`;
  }

  result = Number((sizeInBytes / 1024).toFixed(2));
  return `${result} KB`;
};