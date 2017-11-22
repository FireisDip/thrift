/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.09
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Display current map and gamemode?
'true' or 'false'*/
var l_displayMapGamemode = true;

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Quantum Networks";

/*Use a video for the background?
Otherwise it will use images
'true' or 'false'*/
var l_bgVideo = false;

/*Default available videos:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add your own video backgrounds
Just make sure they are using webm VP8 format 
(Place the videos in the backgrounds/videos folder)*/
var l_background = "Brother.mp4";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Place the files in the backgrounds/images folder)*/
var l_bgImages = [
	"beOZR88.jpg"
];

/*Random background images order?
'true' or 'false'*/
var l_bgImagesRandom = false;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 4000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?
'true' or 'false'*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Play music during the loading screen?
'true' or 'false'*/
var l_music = true;

/*Display current music name?
'true' or 'false'*/
var l_musicDisplay = false;

/*Music playlist
Add as many youtube ids or ogg files you want
(Place the ogg files in the music folder)*/
var l_musicPlaylist = [
	{ogg: "Star Wars - The Clone Wars Medley music.ogg", name: "Dog"},
	{ogg: "Star Wars - The Clone Wars Medley music.ogg", name: "Dog"},
	{youtube: "pNafSXKqfNQ", name: "dog"},
	{youtube: "pNafSXKqfNQ", name: "dog"},
];

/*Random music order?
'true' or 'false'*/
var l_musicRandom = false;

/*Music volume
Choose a value between 0 (quietest) and 100 (loudest)*/
var l_musicVolume = 30;

/*Enable custom messages?
'true' or 'false'*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"“Trust in your friends, and they’ll have reason to trust in you.”",
	"“Searching for the truth is easy. Accepting the truth is hard.”",
	"“The most dangerous beast is the beast within.”",
	"“Brothers in arms are brothers for life.”",
	"“Where there’s a will, there’s a way.”",
	"“The enemy of my enemy is my friend.”",
	"“A fallen enemy may rise again, but the reconciled one is truly vanquished.”"
];

/*Random message order?
'true' or 'false'*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 3500;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;




