// eslint-disable-next-line import/prefer-default-export
export const formatDate = (dateString: string): string => {
  const splitString = dateString.split('T');
  return splitString[0].replace(/-/g, '/');
};
