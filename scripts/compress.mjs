import imagemin from "imagemin";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";

const imagesDir = "./src/assets/images/";

(async () => {
    await imagemin([`${imagesDir}*.{webp,png}`], {
        destination: imagesDir,
        plugins: [pngquant({quality: [0.8, 0.8]}), webp({quality: 80})]
    })
})