import { globSync } from "glob";
import * as path from "path";
import sharp from "sharp";

const files = globSync([
  "content/modules/**/*.svg",
  "community-module-registry/modules/**/*.svg",
]);
files.forEach((image) => {
  const dirName = path.basename(path.dirname(image));
  const writePath = `assets/images/modules/share-logos/${dirName}.png`;
  sharp(image)
    .resize(150, 150)
    .png()
    .toFile(writePath)
    .then(() => {
      console.log(`Converted: ${dirName}`);
    })
    .catch((err) => {
      console.log(err);
    });
});
