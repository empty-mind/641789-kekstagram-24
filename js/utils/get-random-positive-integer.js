const getRandomPositiveInteger = (numberOne, numberTwo) => {
  const lower = Math.ceil(Math.min(Math.abs(numberOne), Math.abs(numberTwo)));
  const upper = Math.floor(Math.max(Math.abs(numberOne), Math.abs(numberTwo)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export {getRandomPositiveInteger};
