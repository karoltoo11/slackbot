require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

app.command("/karoltoo11bot-status", async ({ ack, respond }) => {
    await ack();
    await respond("Working good!✅️");
});

app.command("/karoltoo11bot-commands", async ({ ack, respond }) => {
    await ack();
    await respond("Commands: ``/karoltoo11bot-commands`, /karoltoo11bot-status`, `/karoltoo11bot-kittyfact`, `/karoltoo11bot-doggyfact`, `/karoltoo11bot-funfact`, `/karoltoo11bot-daddyjokes`")
});

app.command("/karoltoo11bot-kittyfact", async ({ ack, respond }) => {
    await ack();
    const res = await axios.get("https://catfact.ninja/fact");
    await respond("Random kitty fact: " + res.data.fact);
})

app.command("/karoltoo11bot-doggyfact", async ({ ack, respond }) => {
    await ack();
    const res = await axios.get("https://dogapi.dog/api/v2/facts");
    await respond("Random doggy fact: " + res.data.data[0].attributes.body)
})

app.command("/karoltoo11bot-funfact", async ({ ack, respond }) =>{
    await ack();
    const res = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
    await respond("Fun fact: " + res.data.text);
})

app.command("/karoltoo11bot-daddyjokes", async ({ ack, respond }) => {
    await ack();
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    await respond("Random very, very funny daddy joke: " + res.data.value)
})

app.start().then(() => console.log("My bot 'karoltoo11bot' is working. I really didn't believe I'd pull it off! Love you all xoxoxo~!!! \n(I still can't believe that I wrote all the code myself :D)"));
