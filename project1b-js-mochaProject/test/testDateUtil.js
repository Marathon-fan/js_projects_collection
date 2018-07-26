

import { getUserDOBAsInt, getMaxUserAgeAtEndOfLoanTerm }  from './../src/utils/DateUtils';
//const { getUserDOBAsInt, getMaxUserAgeAtEndOfLoanTerm } = require('./utils');

var assert = require('assert');

const dateArr = ['1999-12-12', '1999-12-2', '1999-1-12', '1999/2/2',  '12-12-1999', '12-2-1999', '1-12-1999', '1-1-1999', '12-12-199', 'xy-cd-aabb'];
const yearArr = [1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, -1, -1];

describe('date1', function() {
	dateArr.forEach((date, index) => {
		describe('date test case ' + index , function() {
		  it('should equal to ' +  yearArr[index] +  ' with input ' + date, function() {
		    assert.equal(getUserDOBAsInt(date), yearArr[index]);
		  });
		});
	}); 
});



