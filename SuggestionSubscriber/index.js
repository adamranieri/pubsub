const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub({projectId:"suggestion-box-sample"});

async function pullMessages(){
    const subscription = pubsub.subscription('suggenstion-subscriber')
    subscription.on('message', message =>{
        console.log('suggestion saver')
        console.log(message.data.toString())
        message.ack()// you have to acknowledge the message for it to be removed from the subscription
    })
}

pullMessages()// the program will hang here 
// subscription.on is like express listening at a port