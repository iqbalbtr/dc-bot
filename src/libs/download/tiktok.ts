import axios from "axios";
import { CallbackType } from "../../types/callback";
import fs from "fs";
import path from "path";
import { Message } from "discord.js";

export async function tiktokDowloader(url: string, message: Message) {
    message.edit("Creating url..")
    try {
        const get = await axios.get(`https://api.nyx.my.id/dl/tiktok?url=${url}`);
        
        if (get.status === 200) {
            message.edit("Finalizing..")
            return get.data.result.video2
        }

    } catch (error) {
        
        message.edit("Error..")
        throw new Error()
    }
}