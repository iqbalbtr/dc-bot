import { CallbackType } from "../../types/callback";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCVLOsH5k_TBnz2r_ripqDMDt9J9MBSyX0");


const textModel = genAI.getGenerativeModel({ model: "gemini-pro" })

export async function getAiChat(input: string, cb: CallbackType<string>) {
    try {
        const get = await textModel.generateContent(input)
        if (get) {
            const response = await get.response;
            return cb("", response.text())
        }
    } catch (error: any) {
        return cb("Gemini error", null)
    }
}