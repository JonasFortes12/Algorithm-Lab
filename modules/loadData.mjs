import fileSys from "fs";


export default function loadData(pathfile) {
  return new Promise((resolve, reject) => {
    fileSys.readFile(pathfile, "utf-8", (err, data) => {
      if (err) {
        console.error("File read error: ", err);
        reject(err);
        return;
      }

      return resolve(processData(data));
    });
  });
}

function processData(data) {
  let elements = [];
  const rows = data.trim().split(" \r\n");

  for (let row of rows) {
    const rowValues = row.split(",");
    elements.push(...rowValues);
  }

  return elements.map((value) => parseInt(value));;
}
