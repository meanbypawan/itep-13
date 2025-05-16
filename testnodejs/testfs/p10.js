import fs from "fs";

const readStream = fs.createReadStream("data.txt");
const writeStream = fs.createWriteStream("copy.txt");
readStream.pipe(writeStream);