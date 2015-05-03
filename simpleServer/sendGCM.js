/**
* node-gcm is required:
* npm install node-gcm
*/

var gcm = require('node-gcm');

// API Server Key - From Google console
var sender = new gcm.Sender('-- API KEY --'); 
 
// Creating the message
var message = new gcm.Message();
message.addData('message',"Push notifications are working!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar when you drag it down by the time

message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// Token from client register process
var regIds = [];
regIds.push('-- REGISTRATION ID --');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, regIds, 4, function (result) {
	// Null value is a success
	if (result == null) {
		console.log('Success!');
	} else {
		console.log(result);
	}
});
