const express = require('express');
const app = express();

const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'INSERTKEY',
    appSecret: 'INSERTKEY',
    accessToken: 'INSERTKEY',
    accessSecret: 'INSERTKEY',
});

client.v2.singleTweet('1455477974489251841', {
    'tweet.fields': [
        'organic_metrics',
     ],
  }).then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})

const PORT = 5555;
const USERS = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Williams'
    }
];

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/users', (req, res, next) => {
    res.json(USERS);
});

app.get('/users/:userId', (req, res, next) => {
    res.json(USERS.find(user => user.id === parseInt(req.params.userId)));
});

module.exports = {
    app
};