import axios from "axios";
import { Message } from "discord.js";

export async function facebookDowloader(url: string, status: Message) {

    status.edit("Creating url...")
    
    try {
        const get = await axios.get(`https://api.nyx.my.id/dl/fb?url=${url}`);
        if (get.status === 200) {

            if(get.data.result.HD){
                return get.data.result.HD
            } else {
                throw new Error()
            }
        }
        
    } catch (error) {
        status.edit("Error..")
        throw new Error()

    }
}