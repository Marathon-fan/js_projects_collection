
## mocha test

### install  
```
$> npm install --save-dev mocha
$> npm install --save-dev babel-cli
$> npm install --save-dev babel-cli
$> sudo npm i -g babel-cli
$> npm start  
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

