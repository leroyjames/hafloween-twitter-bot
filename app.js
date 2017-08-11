const Twit = require('twit');

const config = require('./config');
const T = new Twit(config);

setInterval(favTweet, 600000) //interval of every 10 minutes

favTweet();

function favTweet(){
	const params = {
		q: 'halloween,Halloween,#Halloween,#halloween', //search query
		lang: 'en'
	}

	T.get('search/tweets', params, function(err,data){
		var tweet = data.statuses;
		var randTweet = ranNum(tweet);   // picks a random tweet
		
		
    // if random tweet does exists
    if(typeof randTweet != 'undefined'){
      // Tell the account to 'favorite'
      T.post('favorites/create', {id: randTweet.id_str}, function(err, response){
        // prints error
        if(err){
          console.log(err);
        }
        else{
          console.log('FAVORITED');
        }
      });
    }
  });
}

// function to generate a random tweet
function ranNum (arr) {  
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};