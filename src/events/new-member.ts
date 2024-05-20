import { TextChannel } from "discord.js";
import client from "../bot/bot";
import { CHANELS } from "../configs/chanels";


client.on("guildMemberAdd", st => {
    
    const channel = st.guild.channels.cache.get(CHANELS["WELCOME"]) as TextChannel

    channel.send(`Welcome ${st.user.tag} & let's start your journey!`)
})