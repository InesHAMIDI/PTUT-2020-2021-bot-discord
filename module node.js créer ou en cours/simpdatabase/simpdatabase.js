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


const Insert = async (data, file) => {
    let database = JSON.stringify(data);
    fs.appendFile(file, database, function(erreur) {
     if (erreur) {
         console.log(erreur)}
    })
}

const Search = async (searchName, file) => {
    let nameFile = "../" + file;
    let jsonData = require(nameFile);
    var data = jsonData[searchName];
    console.log(data);
    return data;
}

module.exports = {
    Create,
    Insert,
    Search,
}
