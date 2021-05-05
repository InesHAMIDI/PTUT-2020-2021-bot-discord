const fs = require("fs").promises;
const path = require("path");


const Create = async name => {
    let nameFile = name + ".json";
    const File = path.join(__dirname, nameFile);
    try {
        await fs.unlink(File);
    } catch {
    }
    await fs.writeFile(File, "");
}


const insert = async (data, file) => {
    let database = JSON.stringify(data);
    fs.appendFile(file, database, function(erreur) {
     if (erreur) {
         console.log(erreur)}
    })
}

module.exports = {
    Create,
    insert,
}