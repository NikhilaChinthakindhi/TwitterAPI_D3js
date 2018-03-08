var Twitter = require('twitter');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');
var jsonfile = require('jsonfile');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var file ='myFriends.json';


    var client = new Twitter({
        consumer_key: 'M0Z05xzRS2KPhQXGFxk61dn6i',
        consumer_secret: 'jaUO0RCUbhc7AroK8DQeKbdDpzfWAjszWnR2comBdMHqdgBTtH',
        access_token_key: '455685141-MZuUyQWKzEURFlxZ3XXPDPrtJvnBkD5BWllaWdZL',
        access_token_secret: 'jC5BQohSMrqKU86AZu4YNTaUcIVf20AeGCtE8oxQC1o7o'
    });

    var params = {screen_name: 'NikhilaReddyC', count :"200"};
    client.get('friends/list', params, function(error, tweets, response) {
        if (!error) {
            console.log("received data");
            var tweets1= [];
            for(i=0; i<tweets.users.length; i++){
                var obj = {
                    name : tweets.users[i].name,
                    friends_count : tweets.users[i].friends_count
                };
                tweets1.push(obj);
            }
            console.log(tweets1);
         }
        jsonfile.writeFile(file, tweets1, function (err) {
            console.error(err)
        })

});

