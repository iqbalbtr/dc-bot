import { Message } from "discord.js";

module.exports = {
    name: "repository",
    description: "Panjang umur buat yang mau kontribusi",
    execute(msg: Message){

        msg.reply(`Link github : ${"https://github.com/iqbalbtr/dc-bot"} \n Panjang umur yang mau kontribusi`)
    }
}