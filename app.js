require('dotenv').config()

const Snoowrap = require('snoowrap')
const Snoostorm = require('snoostorm')

const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASSWORD
})

const client = new Snoostorm(r)

streamOpts = {
    subreddit: 'testingground4bots',
    results: 25
}

const comments = client.CommentStream(streamOpts)

comments.on('comment', comment => {
    console.log(comment)
    if(comment.link_author !== 'vegan_fallacy_bot' || comment.body.includes('test')) comment.reply('response')
})