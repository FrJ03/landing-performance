import sharp from "sharp"
import * as fs from "fs"

const imagesDir = "./src/assets/images"

fs.readdirSync(imagesDir).forEach(async (file) => {
    try {
        const img = sharp(`${imagesDir}/${file}`)
        const name = file.split(".")[0]
        const {format} = await img.metadata()
    
        if(
            !name.includes("small") &&
            !name.includes("medium") &&
            !name.includes("large") &&
            (
                format === "png" ||
                format === "webp"
            )
        ){
            img.resize(450).toFile(`${imagesDir}/${name}-small.${format}`)
            img.resize(750).toFile(`${imagesDir}/${name}-medium.${format}`)
            img.resize(1800).toFile(`${imagesDir}/${name}-large.${format}`)
        }
    } catch (error) {
        console.log(error)
    }
})