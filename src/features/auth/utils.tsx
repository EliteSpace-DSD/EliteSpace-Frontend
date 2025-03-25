const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const verifyUserData = (dispatch: Function, setFetching: Function, setUser: Function) => {
  dispatch(setFetching(true));
  const verifyUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-user`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    } catch (error) {
      return null;
    }
  };

  const user = verifyUser();
  user.then((userData) => {
    dispatch(setUser(userData));
    dispatch(setFetching(false));
  });
};
