function hueApiReducer (state = {}, action) {
  const { email, hubIp, username, selectedLight, lights, notificationType, brightness, schedule, id } = action;
  switch (action.type) {
  case 'CHECK_BRIDGE_CONNECTION':
  case 'NEW_DEVELOPER':
  case 'NEW_USER':
  case 'ALL_LIGHT_INFO':
  case 'SINGLE_LIGHT_INFO':
  case 'ALL_LIGHTS_ON':
  case 'ALL_LIGHTS_OFF':
  case 'SINGLE_LIGHT_ON':
  case 'SINGLE_LIGHT_OFF':
  case 'SINGLE_LIGHT_COLOR':
  case 'SINGLE_LIGHT_BRIGHTNESS':
  case 'SINGLE_LIGHT_ALERT':
  default:
    return state;
  }
};

export default hueApiReducer;