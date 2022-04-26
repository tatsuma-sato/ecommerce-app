export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
