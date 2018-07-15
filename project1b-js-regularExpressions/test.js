

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

//////////////test regular expression

const constructCollection = (collectionObject) => {
    let ret = '';
    for(let item of collectionObject) {
        if(!item) break;
        ret += ",'" + item + "'";
    }
    ret = '(' + ret.substring(1) + ')';
    return ret;
}

let input2 = [2,3,4];
let res2 = constructCollection(input2);
console.log('res2',res2);

let input3 = [];
let res3 = constructCollection(input3);
console.log('res3',res3);



console.log(res2.match(/\((('')?(,?))+\)/g));
console.log(res3.match(/\((('')?(,?))+\)/g));

let input4 = '()';
let input5 = '(,)';
let input6 = '(,,)';
let input7 = '(\'\')';
let input8 = '(\'\'\'\')';
let input9 = '(\'\',)';
let input10 = '(\'\',\'\',)';
console.log('input4 res:',input4.match(/\((('')?(,?))+\)/g));
console.log('input5 res:',input5,input5.match(/\((('')?(,?))+\)/g));
console.log('input6 res:',input6.match(/\((('')?(,?))+\)/g));
console.log('input7 res:',input7.match(/\((('')?(,?))+\)/g));
console.log('input8 res:',input8.match(/\((('')?(,?))+\)/g));
console.log('input9 res:',input9.match(/\((('')?(,?))+\)/g));
console.log('input10 res:',input10.match(/\((('')?(,?))+\)/g));

console.log('[ \'()\' ]' ? true : false);
