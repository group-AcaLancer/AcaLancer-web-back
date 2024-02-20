import fs from "node:fs/promises";
import path from "node:path";

async function getImages(dirPath) {
  // Formatos aceptados
  const formats = [".png", ".gif", ".jpg", ".jpeg", ".webp", ".svg"];
  // dirPath es una ruta dentro de src
  // Obtenemos la ruta del directorio de las imagenes.
  const imagesPath = path.join(__dirname, "..", dirPath);
  // Leemos el directorio en donde están las imagenes.
  const images = await fs.readdir(imagesPath);
  const filtered = images.filter((img) => formats.includes(path.extname(img)));
  return filtered.map((img) => ({
    filename: img,
    path: `${imagesPath}/${img}`,
    cid: img.split(".")[0],
  }));
}

export default getImages