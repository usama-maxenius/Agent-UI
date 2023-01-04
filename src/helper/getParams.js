export const getParams = async (key = 'search') => {
  const url = new URL(window.location.href);
  const search_identifier_param = url.searchParams.get(key);
  return search_identifier_param;
};
