import userReducer from '../../reducers/user-reducer';

describe('userReducer', () => {

  let action;

  const currentState = {
    1: {email: 'test@test.com',
    hubIp: '1.1.1.1',
    username: 'testUser',
    selectedLight: 19,
    lights: 10,
    notificationType: 'Slow & Steady',
    brightness: 'Medium',
    schedule: 'Hourly',
    id: 1},
    2: {email: 'test2@test.com',
    hubIp: '2.1.1.1',
    username: 'testUser2',
    selectedLight: 18,
    lights: 11,
    notificationType: 'Slow & Steady',
    brightness: 'Medium',
    schedule: 'Hourly',
    id: 2}
  }

  const userData = {
    email: 'test@test.com',
    hubIp: '1.1.1.1',
    username: 'testUser',
    selectedLight: 19,
    lights: 10,
    notificationType: 'Slow & Steady',
    brightness: 'Medium',
    schedule: 'Hourly',
    id: 1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(userReducer({}, { type: null })).toEqual({});
  });


  test('Should successfully add new user data to the masterUserList', () => {
    const { email, hubIp, username, selectedLight, lights, notificationType, brightness, schedule, id } = userData;
    action = {
      type: 'ADD_USER',
      email: email,
      hubIp: hubIp,
      username: username,
      selectedLight: selectedLight,
      lights: lights,
      notificationType: notificationType,
      brightness: brightness,
      schedule: schedule,
      id: id
    };
    expect(userReducer(userData, action)).toEqual({
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
  });

  test('Should successfully remove user data from the masterUserList', () => {
    const { id } = userData;
    action = {
      type: 'REMOVE_USER',
      id: id
    };
    expect(userReducer(currentState, action)).toEqual({
      2: {email: 'test2@test.com',
      hubIp: '2.1.1.1',
      username: 'testUser2',
      selectedLight: 18,
      lights: 11,
      notificationType: 'Slow & Steady',
      brightness: 'Medium',
      schedule: 'Hourly',
      id: 2}
    });
  });
});8