import { Message } from "discord.js";

export default (msg: string) => {
    const prefix = '!'; 
    if (!msg.startsWith(prefix)) return;

    const args = msg.slice(prefix.length).trim().split(/ +/);
    const command = args.shift()?.toLowerCase();
    return command
}

export function getPayloadMsg(msg: Message) {
    return msg.content.split(" ").slice(1).join(" ")
}