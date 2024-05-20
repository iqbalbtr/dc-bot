import { Message } from "discord.js";
import client from "../bot/bot";
import { CommandType, Commands } from "../types/client";

module.exports = {
    name: "help-ae",
    description: "Males buat docs awoakowsako",
    execute(msg: Message){

        const payloadMSg: string[] = [];
        
        (client as Commands).commands.forEach((coms: CommandType) => {
            payloadMSg.push(`!${coms.name} : ${coms.description}`)
        })

        msg.reply(`\`\`\`${payloadMSg.join('\n')}\`\`\``);
    }
}