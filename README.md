# IonicPushTest
Example project for push test using ionic.

Requirements:

	$ ionic plugin add org.apache.cordova.console
	$ ionic plugin add org.apache.cordova.device
	$ ionic plugin add org.apache.cordova.dialogs
	$ ionic plugin add org.apache.cordova.file
	$ ionic plugin add org.apache.cordova.media
	$ ionic plugin add https://github.com/phonegap-build/PushPlugin


For simpleServer node-gcm is required:

	$ npm install node-gcm

Simpleserver docker execution:

	$ docker run -it --rm --name testnode -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:0.12.7 node sendGCM.js
