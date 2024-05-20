import { Message } from "discord.js";

module.exports = {
    name: "ping",
    description: "Server latency",
    async execute(message: Message){
        message.reply(`Pong!  Latency ${message.client.ws.ping}ms`)
    }
}