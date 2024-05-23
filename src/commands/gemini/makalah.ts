import { Message } from "discord.js";
import { getPayloadMsg } from "../../utils/prefix";
import { getMakalah } from "../../libs/gemini";

module.exports = {
    name: "makalah",
    description: "Males buat docs awoakowsako",
    async execute(msg: Message){
        const payload = getPayloadMsg(msg);
        msg.reply("Developing")
        // await getMakalah(payload, (err, result) => {
            // if(err){
            //     msg.reply(result || "No Content")
            // } else {
            //     msg.reply(result || "No Content")
            // }
        // })
    }
}