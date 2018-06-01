# javascript proejcts

all small projects will be put in this category

## introduction  


## project1 FilterableList
use vanilla Javascript to create a filterable list.   
how to use it?  
use your browser to open index.html, and you can play it

## project2 ModernImageGallery(using ES6 Vanilla JavaScript)  


## project3-HTMLFundamental  
this project is about HTML, CSS and javascript basics  

## project4-NumberFactsApp-AjaxAndFetch(using vanilla JS)  
a demo of Ajax and vanilla JS    
use api from numbersapi.com  

## project5-AjaxExample(using vanilla JS)  
a demo of Ajax  
XHR stands for XmlHttpRequest  

Ajax libraries & other Methods  
1) jQuery  
2) Axios  
3) Superagent  
4) Fetch API  
5) Prototype  
6) Node HTTP  

## project6-project6-splitLandingPage(CSSAndVanillaJS)  
uses CSS and VanillaJS to make a Landing Page that splits  

## project7-miniBlockchain(javascript)  
an example to demonstrate how blockchain works.  
uses SHA256 as the hashfunction.

## project8-testNodeWithJasmine(NodeAndJasmine)  
$> npm install jasmine --save-dev  
in package.json, add:  
```javascript
  "scripts": {
    "test-init": "./node_modules/jasmine/bin/jasmine.js init",
    "test": "./node_modules/jasmine/bin/jasmine.js"
  },
 ```
 
$> npm run test-init  
$> touch app.js  // for code
```javascript
 ...
module.exports = add;
```


$> touch touch spec/app.spec.js  // for testing  
```javascript
// sample code for test
var Add = require("../app")

describe("Add functionality1", () => {
    it("calculates x + y = z", () => {
        expect(Add(10, 5)).toEqual(15);
    });
    it("calculate x + y != z", () => {
        expect(Add(10, 5)).not.toEqual(14);
    });

});
```


```javascript
//another example of testing
var Request = require("request");

describe("server", () => {

    var server ;
    beforeAll(() => {
        server = require("../api");
    });


    afterAll(() => {
        server.close();
    });

    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {  // store the data for other test
            Request.get("http://localhost:3000", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("body", () => {
            expect(data.body).toBe("The Polyglot Developer");
        });
    });
});

```

$> npm test // run the test cases  

/////////////////  
$> npm install express request --save // for http api test  

## project9-nodeLoginWithPassportAndMongo  
This project is about how to use passport and mongo to build a login system.(ongoing)    
// package.json   
  "dependencies": {  
    "bcryptjs": "*",   // password hashing  
    "body-parser": "*", // parse json  
    "connect-flash": "*", // for flash messages  
    "cookie-parser": "^1.4.1",  
    "express": "*",  
    "express-handlebars": "*",  
    "express-messages": "*",     // for flash messaging  
    "express-session": "*",      // also for flash messaging  
    "express-validator": "*",    // for validate forms  
    "mongodb": "*",  
    "mongoose": "*",              // orm - data  
    "passport": "*",  
    "passport-http": "*",         // facebook login  
    "passport-local": "*"         //  
  }  


## project10-graphQLAndReact  
This project is about  
1 why does GraphQL exist?  
2 what is GraphQL  
3 how do we use GraphQL  


## project11-promiseAndAsync  
some examples about promise and async  in js  
how to run them?  
step 1:   
$> npm install  
step 2:   
$> node promiseExample1.js  // demonstrate how to use promise  
step 3:  
$> node promiseExample2.js  // demonstrate how to use promise  
step 4:  
$> node node readfile.js    // demonstrate how to use async and error handling  
step 5:  
$> node asyncModuleDemo2.js; //  demonstrate how to use async for paralleling and how to order them  



## project11-automation-grunt, gulp, and brunch  
$> npm install -g grunt-cli  
$> npm init  
$> npm install grunt --save-dev    
$> npm install grunt-contrib-uglify --save-dev   
$> npm install grunt-contrib-cssmin --save-dev  


create a file called Gruntfile.js in the project folder  
```javascript
module.exports = function(grunt) {

    // configure main project settings  
    grunt.initConfig({
        // basic settings and info about plugins  
        pkg: grunt.file.readJSON('package.json'),

        // name of the plugin(plugin name without the "grunt-conrib-")
        cssmin: {  // task name
            combine: {
                files: {
                    'html/css/main.css':['html/css/content.css', 'html/css/sidebar.css']
                }
            }
        },

        // uglify
        uglify: { // task name
            dist: {
                files: {
                    'html/js/toggle.min.js':['html/js/toggle.js']
                }
            }
        } 

    });

    // load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // do the task
    grunt.registerTask('default', ['cssmin', 'uglify']);

};


```
then  
$> grunt  // so that new files are created using grunt-plugin(like in the example, 'html/css/main.css' will be created, so does 'html/js/toggle.min.js')  




## vanilla JS, HTML, CSS

### Style display Property-Style Object  

Example
Set a <div> element to not be displayed:

```javascript
document.getElementById("myDIV").style.display = "none";// will not be displayed  
document.getElementById("myDIV").style.display = '';// will be displayed  
```
Syntax  
Return the display property:  

object.style.display  
Set the display property:  

object.style.display = value  

### HTML DOM getElementsByTagName() Method  
Get all elements in the document with the specified tag name  

var x = document.getElementsByTagName("LI");

```javascript
var x = document.getElementsByTagName("LI");
```

Syntax  
document.getElementsByTagName(tagname)  

example  
Find out how many <li> elements there are in the document (using the length property of the NodeList object):  
```javascript
var x = document.getElementsByTagName("LI").length;
```

example  
Change the HTML content of the first <p> element (index 0) in the document:  
```javascript
document.getElementsByTagName("P")[0].innerHTML = "Hello World!";
```

example  
Change the background color of all <p> elements in the document:  
```javascript
var x = document.getElementsByTagName("P");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}
```
example  
Get all elements in the document ssing the "*" parameter.   
```javascript
var x = document.getElementsByTagName("P");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}
```


project11-promiseAndAsync  

``javascript
let promiseToCleanTheRoom = new Promise(function(resolve, reject){
	// cleaning the room
	let isClean = true;
	if (isClean) {
		resolve('Clean');
	} else {
		reject('not Clean');
	}
});

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('the room is ' + fromResolve);
}).catch(function(fromReject){
    console.log('the room is ' from fromReject);
})


```

## project9-nodeLoginWithPassportAndMongo  


### HTML DOM getElementById  


### HTML DOM getElementsByClassName  

### CSS  
in css, we can define style for a css class, a tag, or a id
```css
/*style for a css tag
style ul, h2 and h3 are for html tags*/

		ul {
			color: red;
		}
		h2, h3 {
			font-size: 40px;
		}

/*style for a css class
style .sports, .para and .blue-color are for html elements with the same css class name */
		.sports{
			background-color: blue;
			font-size: 25px;
		}
		.para{
			background-color: #ffffff;
			font-size: 50px;
		}

		.blue-color {
			font-size: 30px;
			color: blue;
		}
		.background-yellow {
			background-color: yellow;
		}
/*style for an id
style #fav-review-id is for the html element with the id of fav-review-id */
		#fav-review-id {
			font-size: : 32px;
			color: saddlebrown;

		}
```


### @media   

Definition and Usage
The @media rule is used to define different style rules for different media types/devices.  

In CSS2 this was called media types, while in CSS3 it is called media queries.  

Media queries look at the capability of the device, and can be used to check many things,   such as:  

width and height of the viewport  
width and height of the device  
orientation (is the tablet/phone in landscape or portrait mode?)  
resolution  
and much more  
```javascript
//Change the background-color if the viewport is 480 pixels wide or wider:
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

```

### HTML <form> action Attribute  

HTML <form> tag

Example  
On submit, send the form-data to a file named "/action_page.php" (to process the input):  
```html
<form action="/action_page.php" method="get">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
</form>   
```

The requirement is only by standards. It is perfectly possible to do whatever you want on a page and not follow standards. Things may not display or work correctly if you do that, but likely they will. The goal is to follow them, and the idea is that if you follow them, your page will always work; you don't have to worry about anything.

Yes, the form is required to have an action attribute in HTML4. If it's not set, the browser will likely use the same method as providing an empty string to it. You really should set action="" which is perfectly valid HTML4, follows standards, and achieves the same exact result.

In HTML5, you can actually specify an action on the submit button itself. If there isn't one, it uses the form's action and if that is not set, it defaults to the empty string (note you cannot explicitly set the action to an empty string in HTML5).

how to deal with one pages with two forms?  
1 use actions to direct two forms to different pages   
2 in each route(different directed pages), write different code to deal with the data  

because you have two forms, you have to specify which form to submit on a button click. Right now any button click would submit just the first form. Give first form's submit button class registerButton and second form's submit class loginButton. I would also suggest giving classes to your forms. One will be registerForm, another is loginForm. Then change your HTML to reflect the changes

```html
<form method="POST" action="/samples" class="registerForm"> 
...
<button type="submit" class="btn btn-primary registerButton">Sign in</button>
<form method="POST" action="/dashboard" class="loginForm">
...

<button type="submit" class="btn btn-primary loginButton">Log in</button>
```
Then change your javascript to this:

```javascript

    $('button.registerButton').click( function() {
        $('form.registerForm').submit();
    });
    $('button.loginButton').click( function() {
        $('form.loginForm').submit();
    });
```

Now you are able to submit two forms to two different routes.
One form would go to samples and the other to dashboard, so on your server (in Node) you can check which route it is. I would suggest using one of the Node frameworks to work with your application. You can try Express. It will drastically simplify your work with routes. It will allow you to write routes as easy as this:

```javascript
app.post('/samples', function(req, res){
    // check register form
    // res.send('user' + req.body);
});
app.get('/dashboard', function(req, res){
    // check login form
    // res.send('user' + req.body);
});
```

