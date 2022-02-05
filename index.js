const TelegramApi = require('node-telegram-bot-api')

const request = require('request')

const token = '5192515680:AAGWiMBcawPdRP6itWMV3KsnQ8sktsR4ylY'

const bot = new TelegramApi(token, {polling: true})

bot.onText(/\/start/, async (msg) =>{
    console.log(msg)
})