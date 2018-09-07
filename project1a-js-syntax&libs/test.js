

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

let users = {user1:'lily', user2:'Jim'};
let usersExpend = {users};
usersExpend.passwd = ['pass1', 'pass2'];
usersExpend.DOB= ['1999', '1998'];

console.log(usersExpend);


////////////////merge example
var _ = require('lodash');

beforeMerge = {};
afterMerge = _.merge(beforeMerge, {key1:'value1'});
console.log('afterMerge 1:', afterMerge);
afterMerge = _.merge(beforeMerge, {key2:'value2'});
console.log('afterMerge 2:', afterMerge);

////////////////stringify and parse example

let employee = {name:"Lily", DOB:"1999"};
console.log('employee:',employee);
let stringifiedEmployee = JSON.stringify(employee);
console.log('stringifiedEmployee:',stringifiedEmployee);
let backFromStringifiedEmployee = JSON.parse(stringifiedEmployee);
console.log('backFromStringifiedEmployee:',backFromStringifiedEmployee);
////////////////-------------------------------------------
console.log('----');
let original = [{'a':9}];
console.log('original', original);
let deepCopy1 = _.merge({}, original);
let deepCopy2 = JSON.parse(JSON.stringify(original))
console.log('deepCopy1', deepCopy1);
console.log('deepCopy2', deepCopy2);
console.log('original[0].a', original[0].a);

////////////////-------------------------------------------
console.log('----63');
    let Max_Return_Rate = 1;
    const input_Max_Return_Rate_A = 'NULL';
    if (_.isNumber(input_Max_Return_Rate_A)) {
        Max_Return_Rate = input_Max_Return_Rate_A;
    }
    console.log('Max_Return_Rate', Max_Return_Rate);
    const input_Max_Return_Rate_B = 0.5;
    if (_.isNumber(input_Max_Return_Rate_B)) {
        Max_Return_Rate = input_Max_Return_Rate_B;
    }
    console.log('Max_Return_Rate', Max_Return_Rate);


