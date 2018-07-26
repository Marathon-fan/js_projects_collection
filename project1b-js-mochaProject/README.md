
## mocha test

### install  
```
$> npm install --save-dev mocha
$> npm install --save-dev babel-cli
$> npm test    
```

### add the following to package.json so that it support ES6(like import)  

```
  "babel": {
    "presets": [
      "es2015"
    ]
  },
```

### mocha will automatically search the files under test folder and implement it    


## test  

### design the function of getUserDOBAsInt   

When designing API, sometimes it's better that the data check is not so strict.

Like the newer version API, the core code is:
```js
    const dobAsInt = applicant_dob.match(/\d\d\d\d/);
```

And this code is more robust than the old code:
```js
    if (applicant_dob.match(/\d\d\d\d\D\d\d\D\d\d/) || applicant_dob.match(/\d\d\d\d\D\d\D\d/) || applicant_dob.match(/\d\d\d\d\D\d\D\d\d/) || applicant_dob.match(/\d\d\d\d\D\d\d\D\d/)) {
        return parseInt(applicant_dob.substring(0,4));
    }
    if (applicant_dob.match(/\d\d\D\d\d\D\d\d\d\d/) || applicant_dob.match(/\d\D\d\D\d\d\d\d/) || applicant_dob.match(/\d\D\d\d\D\d\d\d\d/) || applicant_dob.match(/\d\d\D\d\D\d\d\d\d/) ) {
        return parseInt(applicant_dob.substring(applicant_dob.length - 4, applicant_dob.length));
    }
```

The new code can be seen here: ./src/utils/DateUtils.js, and it can pass the test case in ./test/testDateUtil.js

```js
const dateArr = ['1999-12-12', '1999-12-2', '1999-1-12', '1999/2/2',  '12-12-1999', '12-2-1999', '1-12-1999', '1-1-1999', '12-12-199', 'xy-cd-aabb'];

```


