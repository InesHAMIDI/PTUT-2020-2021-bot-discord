const fs = require("fs");
const path = require("path");

const Create = name => {
    let nameFile = name + ".json";
    const File = path.join(__dirname, nameFile);
    try {
        fs.unlinkSync(File);
    } catch(e) {
    }
    fs.writeFileSync(File, "");
}


const insert = (index, value, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    data[index]=value;
    fs.writeFileSync(file, JSON.stringify(data));
}

const Delete = (index, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    data[index]=undefined;
    fs.writeFileSync(file, JSON.stringify(data));
}

const search = (searchName, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    return data[searchName];

    /*
    let jsonData = require(nameFile);
    var data = jsonData[searchName];
    console.log(data);
    data = data + 1;
    console.log(data);
    return data;*/
}

module.exports = {
    Create,
    insert,
    Delete,
    search,
}
