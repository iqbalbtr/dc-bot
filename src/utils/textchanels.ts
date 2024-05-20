import { DMChannel, NewsChannel, TextChannel } from "discord.js";

export default (channel: any): channel is TextChannel | DMChannel | NewsChannel => {
    return channel instanceof TextChannel || channel instanceof DMChannel || channel instanceof NewsChannel;
}