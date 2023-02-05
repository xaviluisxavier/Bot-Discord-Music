module.exports = {
TOKEN: 'MTA3MTE2NjUxNDMwMjAyNTg3OA.Gz2_EC.4QxjS8oHtcSk7LxaVq1I0n6PRCWvgrmmi7nxUE',
ownerID: ["388748017995481089"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "", //write your discord bot invite.
supportServer: "", //write your discord bot support server invite.
mongodbURL: 'mongodb+srv://xavi:Benfica04@cluster0.0quxn99.mongodb.net/?retryWrites=true&w=majority', //write your mongodb url.
status: '❤️ Use /help astroélindo.me',
commandsDir: './commands', //Please don't touch
language: "pt", //en, tr, nl, pt, fr, ar, zh_TW, it
embedColor: "ffa954", //hex color code
errorLog: "1068745398375698453", //write your discord error log channel id.


sponsor: {
status: true, //true or false
url: "https://awmbilisim.com", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: true, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: true, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
