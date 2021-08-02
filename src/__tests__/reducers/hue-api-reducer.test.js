import hueApiReducer from '../../reducers/hue-api-reducer';

describe('hueApiReducer', () => {

  let action;
  const userData = {
    email: 'test@test.com',
    hubIp: '1.1.1.1',
    username: 'GdKr5N2NQtBnaknaysdCMHNwTojvh7wcHuMG0Yy2',
    selectedLight: null,
    lights: [],
    notificationType: '',
    brightness: '',
    schedule: '',
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(hueApiReducer({}, { type: null })).toEqual({});
  });


  test('Should successfully add new user data to the masterUserList', () => {
    const { email, hubIp, username, selectedLight, lights, notificationType, brightness, schedule } = userData;
    action = {
      type: 'ADD_USER',
      email: email,
      hubIp: hubIp,
      username: username,
      selectedLight: selectedLight,
      lights: lights,
      notificationType: notificationType,
      brightness: brightness,
      schedule: schedule
    };
    expect(hueApiReducer(userData, action)).toEqual({
      [email]: {
        email: email,
        hubIp: hubIp,
        username: username,
        selectedLight: selectedLight,
        lights: lights,
        notificationType: notificationType,
        brightness: brightness,
        schedule: schedule,
      }
    });
  });
});