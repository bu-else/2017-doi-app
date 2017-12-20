IF YOU ARE READING THIS AND WONDERING WHY THE SERVER IS NOT SENDING SMS:
Ben has disabled the sending for debugging purposes.
Under responder.js, remove every line where it says 
```
return "DEBUGGING"
```
and remove the line above that if it calls the callback.

# Heroku
The backend of the API is set up on Heroku. The source code is hosted on [2017-doi-server](https://github.com/bu-else/2017-doi-server). To make changes, the repository must be cloned to your computer. The app is currently hosted on Ben's free Heroku account, so to modify it you will have to get permissions. I am unsure if it is even possible to have multiple collaborators on a free Heroku account. If I can hand it over, the proccess of pushing is very easy, you just do a normal commit by adding to the staging and then commit, but then you must use the command:
```
git push heroku master
```
which restarts the server. It will ask you to login to Heroku if you have not already.The steps for starting a new Heroku server are pretty well explained by the [Node.js Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs). If you want to change the name, you must change the proxy used by the client in:
```
ionic.config.json
```
and also you must point the webhook for the Twilio account's SMS reciever at the new URL. This can be done under the [Twilio Manage Numbers page](https://www.twilio.com/console/phone-numbers/). Finally, the environment variables set up on the server are crucial to its running and they can be seen by running:
```
heroku config
```
while in the 2017-doi-server folder. They are pretty self explanatory, but if you get a new Twilio phone number you will wantto change TWILIO_NUM and once you have the dispatcher's real number you will want to change DISPATCH_NUMBER. Note that the DISPATCH_NUMBER is currently set to Ben's phone number, and anytime you test this app it sends Ben the text messages as if he were the dispatcher, so please be considerate :).


# Twilio
Currently, we are using the trial version of Twilio. It worked well during the semester, as it allows unlimited messages. However, it can only send to Ben and Michael's numbers. You will want to upgrade it. As noted in the issues, Ben pushed the Twilio number onto this repository and it stayed there for like months, so you [might want to replace it](https://github.com/bu-else/2017-doi-app/issues/54). It doesn't seem compromised and it doesn't really matter if it gets a lot of texts, [but it might be a good idea to get a new one](https://www.twilio.com/pricing). If you do so, you have to set up its webhookhandler as noted above.


# Google Maps
Also you should get a new [Google Maps Geolocation API key](https://developers.google.com/maps/documentation/geolocation/intro) and replace MAPS_KEY in the Heroku environment variables.

# Registration
Currently, the registration flow is still a WIP. The backend uses [Frame](https://github.com/jedireza/frame) hosted on MongoDB. It works only on local host for now, but will be merged with the Heroku. It is currently contained in theFrame folder in this repository, but should [merged to into the 2017-doi-server](https://github.com/bu-else/2017-doi-app/issues/69).


# Client
First, you will want to clone this repository onto your computer. Then you will need the 2 environment variables fileswe have set up. There is currently one in the Frame folder, but those will soon be Heroku environment variables. The other environmental variable file is:
```
client\src\env.ts
```
which either Ben or Michael can send you. You can also find it our Slack channel!
Once that is done, you can test it fully-functional in your browser with:
```
ionic serve
```
in the client folder.
The [Ionic tutorial](https://ionicframework.com/docs/intro/deploying/) does a good job on explaining deploying to a device. 

# TESTING
test.js in 2017-doi-server is the closest thing to a testing framework for the backend. It runs a bunch of end-to-end tests to confirm that the server is working but does not validate the returned JSON. Ben's number is in that file for ease of us. Simply use the command: 
```
node test.js
```
in the server repository to run it. It will alert you of any errors.

# API
The following URLS with annotations are useful to test the backend. Note, Ben's number is in the URLs so please do not DOX him.

http://doi-server.herokuapp.com/start-call/?&DeviceID=computer-id&From=18576361412&LatLng=42.350259,-71.105717
* Sends an sms to the emergency receiver with a new emergency ID generated
* Does not send the ID to the user, just a generic success

http://doi-server.herokuapp.com/sms/?&EmergencyID=TEST&Body=yes+test&From=18576361412
* Accepts the emergency. Notifies the caller.
* Replace yes with no under Body to reject it.


http://doi-server.herokuapp.com/update-latlng/?&DeviceID=computer-id&LatLng=42.345616,-71.104136
* Sends an sms to the emergency receiver with the updated latlng and address.

http://doi-server.herokuapp.com/update-description/?&DeviceID=computer-id&Description=In%20Apartment%203B%20up%20the%20stairs
* Sends an sms to the emergency receiver with the update description.

http://doi-server.herokuapp.com/dispatch-status/?&DeviceID=computer-id
* Gets the current status of the emergency (Pending, Accepted, Rejected, Ended)

http://doi-server.herokuapp.com/fetch-info/?&DeviceID=computer-id
* Fetches the address, latlng, and all descriptions as a JSON object.

http://doi-server.herokuapp.com/end-emergency/?&DeviceID=computer-id
* Closes the emergency, and sends a notification to the dispatcher

http://doi-server.herokuapp.com/dispatch-status/?&EmergencyID=TEST
* As above but using emergencyID

http://doi-server.herokuapp.com/fetch-info/?&EmergencyID=TEST
* As above but using emergencyID

http://doi-server.herokuapp.com/end-emergency/?&EmergencyID=TEST
* As above but using emergencyID
* Notifies the caller instead of the dispatcher 
