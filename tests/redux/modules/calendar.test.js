import reducer, { defaultState } from 'redux/modules/calendar';
import deepFreeze from 'deep-freeze';

describe('(Redux) calendar', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
