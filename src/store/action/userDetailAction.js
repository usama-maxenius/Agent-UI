export let searchData = (body) => {
  return async (dispatch) => {
    dispatch({
      type: 'USERDETAILPARAM',
      payload: body,
    });
  };
};
