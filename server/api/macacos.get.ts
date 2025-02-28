import fs from "fs/promises";
import path from "path";

interface Macaco {
    nome: string;
    classe: string;
    custo: number;
    upgrades: {
        nome: string;
        custo: number;
    }[];
    image?: string;
}

export default defineEventHandler(async (event) => {
    try {
        // Corrigindo o caminho do arquivo JSON
        const filePath = path.resolve(process.cwd(), 'server/data/bloons_macacos.json');

        // Lendo o arquivo JSON
        const data = await fs.readFile(filePath, 'utf8');
        const macacos: Macaco[] = JSON.parse(data).macacos;

        return macacos;
    } catch (err) {
        return { message: 'Erro ao carregar dados', error: err.message };
    }
});
