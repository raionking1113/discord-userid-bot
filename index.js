// index.js
const { Client, GatewayIntentBits } = require('discord.js');
// dotenvはローカル実行時のみ使用。Renderでは環境変数に直接設定します。
// require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'userid') {
        const userId = interaction.user.id;
        
        // 🌟 ここが重要: ephemeral: true を設定すると、コマンド実行者のみにメッセージが表示されます。
        await interaction.reply({ 
            content: `あなたのユーザーIDは **${userId}** です。`, 
            ephemeral: true 
        });
    }
});

client.login(process.env.DISCORD_TOKEN);
