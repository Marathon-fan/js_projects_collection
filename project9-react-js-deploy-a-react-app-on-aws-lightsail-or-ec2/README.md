
## install react    
```
$> npm i -g create-react-app
$> create-react-app my-app
```

react-app-from-scratch(react and react environment in production)  
https://hackernoon.com/react-app-from-scratch-d694300d1631


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

