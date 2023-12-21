export const calculateBMI = (weight, height) => {
  if (
    !weight ||
    !height ||
    isNaN(weight) ||
    isNaN(height) ||
    weight <= 0 ||
    height <= 0
  ) {
    return null;
  }
  return (weight / height ** 2).toFixed(1);
};
