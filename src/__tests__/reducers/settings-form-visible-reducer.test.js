import settingsFormVisibleReducer from '../../reducers/settings-form-visible-reducer';

describe('settingsFormVisibleReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(settingsFormVisibleReducer(false, {type: null })).toEqual(false);
  });
});