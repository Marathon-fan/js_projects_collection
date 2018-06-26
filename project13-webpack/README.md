# Webpack

Webpack is a module bundler. It takes the code you write and bundles it. But Webpack can also transpile, combine, and minify your code. It allows for code splitting, in which the client can load blocks of code on demand rather than having to send one huge file to the client. Webpack is also compatible with React.js.


## Why Webpack?  

1 By combining the files you drastically reduce the number of requests to the server. 

2 Minifying the combined file through a production grade minifier reduces the size of the files you request.

3 Another problem of loading multiple files is that of dependencies and load order. Resolving them is a huge cognitive load. This is where Webpack comes in. Since Webpack needs the code to be split into modules, its easier to resolve and understand dependencies.

4 Webpack is not the only solution out there. Task runners like Grunt or Gulp can also get the job done. Since both of these tools are built around a plugin ecosystem, you can pick and choose plugins based on your requirements.


## Installing Webpack  

```
$ sudo npm install -g webpack
$ sudo npm install -g webpack-cli

$ sudo npm install -g  webpack-command
```

## CLI (Command Line Interface)   





