


## install react    
```
$> npm i -g create-react-app
$> create-react-app my-app
```

react-app-from-scratch(react and react environment in production)  
https://hackernoon.com/react-app-from-scratch-d694300d1631

## from parent to child

```
The props and state of a parent component will become just props to their child component.
```


## Props and state

```
Props and state are somewhat related in the sense that they both “model” data for React components. Both of them can be passed down from parent to child components. However, the props and state of a parent component will become just props to their child component.
```


## deploy a react app on aws lightsail or ec2    

First, go to your packages.json folder and put this line of code to match your real domain address:

```
"homepage": "https://yourwebsite.com/afolder/", 
```

Second, go to terminal in your project folder and type:

```
> npm run build
```
now you will see that in the project folder structures there is a build folder.

Only that one you take an upload to your server using filezilla(like in lightsail/ec2, files are uploaded into the following folder(archieve old files in htdocs folder and delete old files first):
```
/opt/bitnami/apache2/htdocs
```

before that, use the following cmd to log into lightsail/ec2 and change ownership
```
ssh -i LightsailDefaultPrivateKey.pem bitnami@xxx.xxx.xxx.xxx(ip addr)

sudo chown -R bitnami /opt/bitnami

```


## export default     

```js

It's part of the ES6 module system, described here. There is a helpful example in that documentation, also:

If a module defines a default export:

export default function() { console.log("hello!") }
then you can import that default export by omitting the curly braces:

import foo from "foo";
foo(); // hello!

```