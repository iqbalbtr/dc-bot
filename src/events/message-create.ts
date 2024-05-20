import client from "../bot/bot"
import { CommandType, Commands } from "../types/client";
import prefix from "../utils/prefix";

(client as Commands).on("messageCreate", msg => {

    if (msg.author.bot) return

    const isPrefix = prefix(msg.content)
    
    const command: CommandType = (client as Commands).commands.get(isPrefix!)
    
    if(command){
        command.execute(msg, null)
    }
})