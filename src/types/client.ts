import { Client, Message } from "discord.js";

export type CommandType = {
    name: string;
    description: string;
    execute: (message: Message, client: any) => void
}

export interface Commands extends Client {
    commands: Map<string, any>
} 