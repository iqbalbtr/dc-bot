import { Message } from "discord.js";
import client from "../bot/bot";
import { getPayloadMsg } from "../utils/prefix";
import { BOTS } from "../configs/bot"; 

module.exports = {
    name: "req-feature",
    description: "Feature request",
    async execute(message: Message) {
        try {
            const target = await client.users.fetch(BOTS["ME"]);
            const payloadReq = `
            type: Request Fitur 
            from: ${message.author.username} 
            req: ${getPayloadMsg(message)}
            `
            target.send(payloadReq);

            message.reply("Mendeng rakit bom");
        } catch (error) {
            message.reply("Error fetching user")
        }
    }
}