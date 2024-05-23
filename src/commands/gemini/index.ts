import { Message } from "discord.js";
import { getAiChat } from "../../libs/gemini";
import { getPayloadMsg } from "../../utils/prefix";

module.exports = {
    name: "tanya",
    description: "Ai powered by gemini google",
    async execute(message: Message){
        const progerss = await message.reply("Processing..")
        await getAiChat(getPayloadMsg(message), (err, result) => {
            if(!err){
                progerss.edit("Hasil :" + result)
            } else {
                progerss.edit("Gagal!")
            }
        })
    }
}