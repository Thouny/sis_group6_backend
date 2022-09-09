const functions = require ('firebase-functions');
const { TwitterApi } = require ('twitter-api-v2');
const admin = require('firebase-admin');
admin.initializeApp();

const client = new TwitterApi({
    appKey: 'INSERTKEY',
    appSecret: 'INSERTKEY',
    accessToken: 'INSERTKEY',
    accessSecret: 'INSERTKEY',
});


exports.searchTweets = functions
.region('australia-southeast1')
.https
.onCall(async (data, context) => {
    if(!context.auth){
        return {message: 'Authentication Required!', code: 401};
    }
    console.log('searchTweets called');
    try{
        const query = data.query;
        const response =  await client.v2.searchTweets(query);
        console.log("The Response is" + response.request._redirectable._options.href)
        return response;
    } catch(error){
        // return an error
        console.log(error);
        return (error);
    }
});