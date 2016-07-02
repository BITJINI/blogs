---
layout: post
categories: [javascript, backbone, node.js]
title: Starting Node.js
summary: Node.js setup
author: ill-Logical
profile: https://github.com/ill-Logical
image: Node-js.png
user_image: Muqtadir.jpeg
---

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world, as stated by the [official website](https://nodejs.org/).

So, if you are a JavaScript enthusiast and want to try server side coding as well then here is the thing for you my friend.

Setting Up
For short NodeJS is Javascript running outside the browser, in this case in the server.
Installation
To install it, you can go to [NodeJS Website](https://nodejs.org/). But if you are using Mac and brew you can do:

```
brew install node
``` 
and in ubuntu use:


curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

Once you have, to see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this `v5.10.0`

And if you are a windows user, you can simply download the [Windows Installer](http://nodejs.org/#download) directly from the [official web site](https://nodejs.org/).

We're all set to write our first server program! Wasn't that easy :)

Hello Server

Okay so let's start by opening your favourite text editor in my case I am using [Sublime Text 3](https://www.sublimetext.com/3), and creating a new file with a ".js" extension. Ex: "getting-started.js", and in here we write our very own server:

```
//Initialise http package built in to Node.js library to make http request.
var http = require('http');

//This simple code as states 'creates' server, returns a JSON object. 
var server = http.createServer( function (request, response) {
	response.writeHead(200, { 'content-type' : 'application/json'});
	response.end(JSON.stringify({hello: 'Server'}));
});

//We configure the server to listen to port: 3000
server.listen(3000);

console.log("Http server started");
```

Once we have the above code in our JavaScript file, we can simply run it from the terminal,

```
node getting-started.js
```
Here, "getting-started.js" is the name with which I have saved my the file.
It should output something like this:

node getting-started.js 
Http server started


Now, if we just go to the browser and open the `http://localhost:3000/` we should be able to see a JSON object object is returned.

```
{"hello":"Server"}
```
Is it working? Cool, you have embarked upon the wonderful world of Node.js! Is NOT working? take a look at the [code](https://gist.github.com/MuqThe2nd/80573ee207205148ab401e4655054e24).


