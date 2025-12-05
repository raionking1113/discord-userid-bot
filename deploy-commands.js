const { REST, Routes } = require('discord.js');
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;

// コマンドの定義
const commands = [
    {
        name: 'userid',
        description: 'あなたのDiscordユーザーIDを秘密で表示します。'
    },
];

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

(async () => {
    try {
        console.log(`${commands.length}個のアプリケーションコマンドを登録します。`);

        // グローバル登録（反映に時間がかかる）またはギルド登録（すぐに反映）
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), // テストギルドに登録
            { body: commands },
        );

        console.log(`${data.length}個のアプリケーションコマンドが正常に登録されました。`);
    } catch (error) {
        console.error(error);
    }
})();
