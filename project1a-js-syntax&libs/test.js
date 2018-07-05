

//import _ from 'lodash';

var _ = require('lodash');


var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other1 = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
var other2 = {
  'a': [{ 'm': 8 }, { 'n': 9 }, {'l': 1}]
};
 



const res = _.merge(object, other1, other2);

console.log(res);
