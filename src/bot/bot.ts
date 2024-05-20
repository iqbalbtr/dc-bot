import { Commands } from "../types/client";
import { initializeComands, initializeEvents} from "../utils/getLocalFile"
import { Client } from "discord.js";

const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "MessageContent",
    ]
});

(client as Commands).commands = new Map();

export default client

initializeComands()
initializeEvents();

