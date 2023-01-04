export const getSearchResults = async () => {
  const interval = setInterval(() => {
    //  dispatch(ResultSchools(searchParams.get('search')));
  }, 2500);

  const timeoutInterval = setTimeout(() => clearInterval(interval), 180000);

  return () => {
    clearInterval(interval);
    clearTimeout(timeoutInterval);
  };
};
