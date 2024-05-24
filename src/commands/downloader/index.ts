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
                    const igUrl: string = await instagramDownloader(sc[1], status);
                    const igEmbed = new EmbedBuilder()
                        .setColor("#db0223")
                        .setTitle("Downlaod Here!")
                        .setURL(igUrl)
                    if (igUrl) {
                        status.edit("Success")
                        status.edit({ embeds: [igEmbed] })
                    }
                    break;

                case "tt":
                    const ttUrl: string = await tiktokDowloader(sc[1], status);
                    const ttEmbed = new EmbedBuilder()
                        .setColor("#333232")
                        .setTitle("Downlaod Here!")
                        .setURL(ttUrl)
                    if (ttUrl) {
                        status.edit("Success")
                        status.edit({ embeds: [ttEmbed] })
                    }
                    break;
                case "fb":
                    const fbUrl: string = await facebookDowloader(sc[1], status);
                    const fbEmbed = new EmbedBuilder()
                        .setColor("#00379e")
                        .setTitle("Downlaod Here!")
                        .setURL(fbUrl)
                    if (fbUrl) {
                        status.edit("Success")
                        status.edit({ embeds: [fbEmbed], })
                    }
                    break;
                case "yt":
                    const ytUrl = await youtubeDownloader(sc[1], status);

                    let ytEmbedArray: EmbedBuilder[] = [];
                    
                    if (ytUrl) {
                        status.edit("Success")
                        Object.values(ytUrl).forEach((re: any, i: number) => {
                            const ytAembed = new EmbedBuilder()
                            .setTitle(re.quality)
                            .setURL(re.url)

                            ytEmbedArray.push(ytAembed)
                        })
                        status.edit({embeds: ytEmbedArray})
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
