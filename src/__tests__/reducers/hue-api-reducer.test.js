import hueApiReducer from '../../reducers/hue-api-reducer';

describe('hueApiReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(hueApiReducer({}, { type: null })).toEqual({});
  });
});