import { Message } from "discord.js";
import { getAiChat } from "../../libs/gemini";
import { getPayloadMsg } from "../../utils/prefix";

module.exports = {
    name: "tanya",
    description: "Ai powered by gemini google",
    async execute(message: Message){
        await getAiChat(getPayloadMsg(message), (err, result) => {
            if(err){
                message.reply(result || "No Content")
            } else {
                message.reply(result || "No Content")
            }
        })
    }
}