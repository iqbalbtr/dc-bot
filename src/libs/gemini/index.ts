import { GEMINI } from "../../configs/gemini";
import { CallbackType } from "../../types/callback";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GEMINI["TOKEN"]);


const textModel = genAI.getGenerativeModel({ model: "gemini-pro" })

export async function getAiChat(input: string, cb: CallbackType<string, string>) {
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

export async function getMakalah(title: string, cb: CallbackType<string, string>) {
    try {

        const daftar = await textModel
        .generateContent("buatkan  sebuah makalah yang berisi daftar isi, pendahuluan, rumusan masalah minimal 2 masalah , pembahanasan dari rumusan masalah tersebut,lalu kesimpulan, buat secara mendetail dan jelas dengan bahasa yang familiar dengan manusia dan tidak kaku dengan judul " + title)
        if (daftar) {
            const response = await daftar.response;
            console.log(response.text());
            
            return cb("", response.text())
        }

    } catch (error: any) {
        return cb("Gemini error", null)
    }
}