import { TextChannel } from "discord.js";
import client from "../bot/bot";
import { CHANELS } from "../configs/chanels"; 

client.once("ready", st => {
    console.log(`Bot is ready on user ${st.user.username}`);
    (st.channels.cache.get(CHANELS["ANOUNCMENT"]) as TextChannel).send("Traveler here to assist you!")
});