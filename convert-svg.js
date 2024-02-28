import { Magick } from "node-magickwand";
import { glob } from "glob";
import * as path from "path";

(async () => {
    const files = await glob("content/modules/**/*.svg");
    files.forEach(async (image) => {
        let im = new Magick.Image;
        await im.backgroundColorAsync(new Magick.Color(0,0,0,0));
        await im.readAsync("230x230", image);
        const dirName = path.basename(path.dirname(image));
        await im.magickAsync("PNG");
        await im.writeAsync(`assets/images/modules/share-logos/${dirName}.png`);
    })
})();