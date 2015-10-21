# IonicPushTest
Example project for push test using ionic.

On pushSample directory:

	$ ionic state restore

Plugins dependencies:

	cordova-plugin-console
	cordova-plugin-device
	cordova-plugin-dialogs
	cordova-plugin-file
	cordova-plugin-media
	https://github.com/phonegap-build/PushPlugin


For simpleServer node-gcm is required:

	$ npm install node-gcm

Simpleserver docker execution:

	$ docker run -it --rm --name testnode -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:0.12.7 node sendGCM.js
