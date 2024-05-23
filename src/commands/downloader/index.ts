import { Attachment, EmbedBuilder, Message } from "discord.js";
import { getPayloadMsg } from "../../utils/prefix";
import { tiktokDowloader } from "../../libs/download/tiktok";
import { instagramDownloader } from "../../libs/download/ig";
import { facebookDowloader } from "../../libs/download/facebook";
import { youtubeDownloader } from "../../libs/download/yt";

module.exports = {
    name: "get",
    description: "Downloader [yt, tt, fb, ig], Beta test",
    async execute(message: Message) {

        const status = await message.reply("Fetching..")
        const sc = getPayloadMsg(message).split(" ");

        if (!sc[1]) {
            status.edit("No Url")
            return
        }

        try {
            switch (sc[0]) {
                case "ig":
                    const igResult: string = await instagramDownloader(sc[1], status);
                    const embed = new EmbedBuilder()
                        .setColor("#db0223")
                        .setTitle("Downlaod Here!")
                        .setURL(igResult)
                    if (igResult) {
                        status.edit("Success")
                        status.edit({ embeds: [embed] })
                    }
                    break;

                case "tt":
                    const result: string = await tiktokDowloader(sc[1], status);
                    const embed2 = new EmbedBuilder()
                        .setColor("#333232")
                        .setTitle("Downlaod Here!")
                        .setURL(result)
                    if (result) {
                        status.edit("Success")
                        status.edit({ embeds: [embed2] })
                    }
                    break;
                case "fb":
                    const fbResult: string = await facebookDowloader(sc[1], status);
                    const embed3 = new EmbedBuilder()
                        .setColor("#00379e")
                        .setTitle("Downlaod Here!")
                        .setURL(fbResult)
                    if (fbResult) {
                        status.edit("Success")
                        status.edit({ embeds: [embed3], })
                    }
                    break;
                case "yt":
                    const ytResult = await youtubeDownloader(sc[1], status);

                    let embedArray: EmbedBuilder[] = [];
                    
                    if (ytResult) {
                        status.edit("Success")
                        Object.values(ytResult).forEach((re: any, i: number) => {
                            const createEmbed = new EmbedBuilder()
                            .setTitle(re.quality)
                            .setURL(re.url)

                            embedArray.push(createEmbed)
                        })
                        status.edit({embeds: embedArray})
                    }
                    break;
                default:
                    status.edit("No Choice");
                    break;
            }
            return
        } catch (error) {
            status.edit("Error fetching or Not found")
        }
    }
}