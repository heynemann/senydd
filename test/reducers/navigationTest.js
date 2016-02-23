var reducer = require('../../src/reducers/navigation');
import {expect} from '../assertions';

describe('navigation', () => {

  it('should not change the passed state', (done) => {
    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('should change navigation path', (done) => {
    const state = Object.freeze({});
    let newState = reducer(state, {type: 'CHANGE_ROUTE', path: '#/newpath'});

    expect(newState.currentView).to.equal('#/newpath');

    done();
  });

});
