import { globSync } from "glob";
import * as path from "path";
import sharp from "sharp";

const files = globSync([
  "content/modules/**/*.svg",
  "community-module-registry/modules/**/*.svg"
]);
files.forEach((image) => {
  const dirName = path.basename(path.dirname(image));
  const writePath = `assets/images/modules/share-logos/${dirName}.png`
  sharp(image)
    .resize(230, 230)
    .png()
    .toFile(writePath)
    .then(function(info) {
      console.log(`Converted: ${dirName}`)
    })
    .catch(function(err) {
      console.log(err)
    })
});