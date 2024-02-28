import { Magick } from "node-magickwand";
import { globSync } from "glob";
import * as path from "path";

const files = globSync("content/modules/**/*.svg");
files.forEach((image) => {
    let im = new Magick.Image;
    im.backgroundColor(new Magick.Color(0,0,0,0));
    im.read("230x230", image);
    const dirName = path.basename(path.dirname(image));
    im.magick("PNG");
    im.write(`assets/images/modules/share-logos/${dirName}.png`);
    console.log(`Converted: ${dirName}`)
});