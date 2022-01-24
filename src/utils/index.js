export const getTime = () => {
  // get formatted time like 4:00PM
  const date = new Date();
  const pmOram = date.getHours() > 12 ? "PM" : "AM";
  return `${date.getHours()}:${date.getMinutes()} ${pmOram}`;
};

export const sleep = (period) => {
  // allow the system to sleep for sometime
  return new Promise((resolve) => setTimeout(resolve, period));
};

export const getRandom = (range, pool) => {
  // get randomized value within a certain range
  return Math.floor(Math.random() * pool) % range;
};

export const getFirstChar = (char) => {
  return char[0].toUpperCase();
};
