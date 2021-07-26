export function login(token) {
  return dispatch => {
    dispatch({
      type: "LOGIN",
      payload:token
    });
  }
}

export function logout() {
  console.log("Logging out");
  return dispatch => {
    dispatch({
      type: "LOGOUT",
      payload: ""
    });
  };
}



