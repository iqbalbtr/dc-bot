import axios from "axios";
import { CallbackType, StatusFetching } from "../../types/callback";
import fs from "fs";
import path from "path";
import { Message } from "discord.js";

export async function instagramDownloader(url: string, status: Message) {

    status.edit("Creating url...")

    try {
        const get = await axios.get(`https://api.nyx.my.id/dl/ig?url=${url}`);
        if (get.status === 200) {
            status.edit("Finalizing...")
            return get.data.result[0].url
        }

    } catch (error) {

        status.edit("Error..")
        throw new Error()

    }
}