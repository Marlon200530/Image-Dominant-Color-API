import axios from "axios";
import sharp from "sharp";

const getDominantColorFromUrl = async (url) => {
    // Baixa a imagem
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");

    // Reduz a imagem para processar rápido
    const { data, info } = await sharp(buffer)
        .resize(50, 50)
        .raw()
        .toBuffer({ resolveWithObject: true });

    const colorCount = {};
    for (let i = 0; i < data.length; i += 3) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Ignora pixels muito escuros (quase preto)
        const brightness = (r + g + b) / 3;
        if (brightness < 30) continue;

        const key = `${r},${g},${b}`;
        colorCount[key] = (colorCount[key] || 0) + 1;
    }

    // Se não houver pixels válidos, retorna preto padrão
    if (Object.keys(colorCount).length === 0) {
        return { hex: "#000000", rgba: "rgba(0,0,0,0.1)" };
    }

    // Pega a cor mais frequente
    const dominantColor = Object.entries(colorCount).sort((a, b) => b[1] - a[1])[0][0];
    const [r, g, b] = dominantColor.split(",").map(Number);

    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    const rgba = `rgba(${r}, ${g}, ${b}, 0.15)`; // alpha 0.1

    return { hex, rgba };
};

// Exemplo
getDominantColorFromUrl("https://m.media-amazon.com/images/M/MV5BMTQ5OTI2MTQ1MV5BMl5BanBnXkFtZTcwMjY0Njk2OQ@@._V1_FMjpg_UX640_.jpg")
    .then(console.log);

export default getDominantColorFromUrl;
