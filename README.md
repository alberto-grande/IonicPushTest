# IonicPushTest
Example project for push test using ionic.

Requirements:

	$ ionic plugin add cordova-plugin-console
	$ ionic plugin add cordova-plugin-device
	$ ionic plugin add cordova-plugin-dialogs
	$ ionic plugin add cordova-plugin-file
	$ ionic plugin add cordova-plugin-media
	$ ionic plugin add https://github.com/phonegap-build/PushPlugin


For simpleServer node-gcm is required:

	$ npm install node-gcm

Simpleserver docker execution:

	$ docker run -it --rm --name testnode -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:0.12.7 node sendGCM.js
