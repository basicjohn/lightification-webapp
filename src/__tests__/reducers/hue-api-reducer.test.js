import hueApiReducer from '../../reducers/hue-api-reducer';

describe('hueApiReducer', () => {

  let action;
  const UserData = {
    hubIp: '192.168.86.168',
    username: 'GdKr5N2NQtBnaknaysdCMHNwTojvh7wcHuMG0Yy2',
    selectedLight: null,
    lights: [],
    notificationType: '',
    brightness: '',
    schedule: ''
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(hueApiReducer({}, { type: null })).toEqual({});
  });
});