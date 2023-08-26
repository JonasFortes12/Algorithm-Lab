import fileSys from "fs";
import * as path from 'path';

export default function reportGenerator(infos, fileName) {

  const filePath = path.join("data", "reports", `${fileName}.txt`);

  fileSys.writeFile(filePath, infos, (err) => {
    if (err) {
      console.error("Erro to write on file:", err);
      return;
    }
    console.log("Successfully generated report!");
  });
}
