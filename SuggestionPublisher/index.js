const {PubSub} = require('@google-cloud/pubsub');

const pubsub = new PubSub({projectId:"suggestion-box-sample"});

async function publishMessage(){
    const message = {sender:"Bill",content:"What's up "}
    const response = await pubsub.topic('suggestions-topic').publishJSON(message)
    console.log(response)
}

publishMessage()