const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('7220158967:AAHffCxZ-9sKjBeiMcLRv6aODydPx9kdMsg');


bot.start((ctx) => {
    ctx.reply('Hi! Click on the button to open the mini app', 
        Markup.inlineKeyboard([
            Markup.button.webApp('Play', 'https://mikhailok.me')
        ])
    );
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));