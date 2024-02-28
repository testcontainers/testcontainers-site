import { Magick } from "node-magickwand";
import { globby } from "globby";
import * as path from "path";

const listAllFilesAndDirs = () => globby("content/modules/**/*.svg");
(async () => {
    const result = await listAllFilesAndDirs(process.cwd());
    result.forEach(async (image) => {
        let im = new Magick.Image;
        await im.backgroundColorAsync(new Magick.Color(0,0,0,0));
        await im.readAsync("230x230", image);
        const dirName = path.basename(path.dirname(image));
        await im.magickAsync("PNG");
        await im.writeAsync(`assets/images/modules/share-logos/${dirName}.png`);
    })
})();