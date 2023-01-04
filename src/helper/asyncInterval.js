export const asyncInterval = async (callback, ms) => {
  console.log('🚀 ~ file: asyncInterval.js:2 ~ asyncInterval ~ ms', ms);
  return new Promise((resolve) => {
    const interval = setInterval(async () => {
      resolve(await callback());
      console.log('test');
      return clearInterval(interval);
    }, ms);
  });
};
