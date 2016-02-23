var changeRoute = require('../../src/actions/navigation/changeRoute');
import {expect} from '../assertions';

describe('changeRoute Action', () => {

  it('should return action', (done) => {
    let action = changeRoute('/somepath');
    expect(action).to.deep.equal({
      type: 'CHANGE_ROUTE',
      path: '#/somepath'
    });

    done();
  });

});
