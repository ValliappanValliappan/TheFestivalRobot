var TwitterBot=require('twit');
var configSettings=require('./config')
var bot = new TwitterBot(configSettings);
var tweet={status: "Hello World!"}
bot.post('statuses/update', tweet, function(err, data, response) {
    console.log(err)
  });
