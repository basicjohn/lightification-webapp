import settingsFormVisibleReducer from '../../reducers/settings-form-visible-reducer';

describe('settingsFormVisibleReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(settingsFormVisibleReducer(false, {type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(settingsFormVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
  });




});