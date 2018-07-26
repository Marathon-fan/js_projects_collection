
require('babel-register')({
    presets: [ 'env' ]
})

const getUserDOBAsInt = require('./utils/getUserDOBAsInt');
const getMaxUserAgeAtEndOfLoanTerm = require('./utils/getMaxUserAgeAtEndOfLoanTerm');

//import { getUserDOBAsInt, getMaxUserAgeAtEndOfLoanTerm } from './utils';

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(getUserDOBAsInt('1999-12-12'), 1999);
    });
  });
});


