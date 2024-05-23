import { ActivityType, TextChannel } from "discord.js";
import client from "../bot/bot";
import { CHANELS } from "../configs/chanels"; 

client.once("ready", st => {
    console.log(`Bot is ready on user ${st.user.username}`);
    client.user?.setPresence({
        status: "online",
        activities: [{
            name: "!help-ae",
            type: ActivityType.Listening
        }]
    });
    // (st.channels.cache.get(CHANELS["TESTBOT"]) as TextChannel).send("Traveler here to assist");
});