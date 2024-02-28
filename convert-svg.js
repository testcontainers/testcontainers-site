import { Magick } from "node-magickwand";
import { globSync } from "glob";
import * as path from "path";

const files = globSync("content/modules/**/*.svg");
console.log("Files:");
console.log(files);
files.forEach((image) => {
    const dirName = path.basename(path.dirname(image));
    console.log(`Starting: ${dirName}`);
    let im = new Magick.Image;
    im.backgroundColor(new Magick.Color(0,0,0,0));
    im.read("230x230", image);
    im.magick("PNG");
    const writePath = `assets/images/modules/share-logos/${dirName}.png`
    console.log(`Writing: ${writePath}`)
    im.write(writePath);
    console.log(`Finished: ${dirName}`)
});