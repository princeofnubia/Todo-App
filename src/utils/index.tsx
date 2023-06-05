export const getTime = (): string => {
  // get formatted time like 4:00PM
  const date = new Date();
  const pmOram = date.getHours() > 12 ? "PM" : "AM";
  return `${date.getHours()}:${date.getMinutes()} ${pmOram}`;
};

export const sleep = (period: number): Promise<void> => {
  // allow the system to sleep for sometime
  return new Promise((resolve) => setTimeout(resolve, period));
};

export const getRandom = (range: number, pool: number): number => {
  // get randomized value within a certain range
  return Math.floor(Math.random() * pool) % range;
};

export const getFirstChar = (char: string): string => {
  return char[0].toUpperCase();
};
