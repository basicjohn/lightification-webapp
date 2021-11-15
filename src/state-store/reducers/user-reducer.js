function userReducer (state = {}, action) {
  const { email, hubIp, username, selectedLight, lights, notificationType, brightness, schedule, id } = action;
  switch (action.type) {
    case 'ADD_USER':
    return Object.assign({}, state, {
      [id]: {
        email: email,
        hubIp: hubIp,
        username: username,
        selectedLight: selectedLight,
        lights: lights,
        notificationType: notificationType,
        brightness: brightness,
        schedule: schedule,
        id: id
      }
    });
    case 'REMOVE_USER':
      let newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  }
};

export default userReducer;