const fs = require("fs");
const path = require("path");
const appDir = path.dirname(require.main.filename);

const Create = name => {
    let nameFile = name + ".json";
    const File = path.join(appDir, nameFile);
    try {
        fs.unlinkSync(File);
    } catch(e) {
    }
    fs.writeFileSync(File, "{}");
    console.log("File created !")
}

const Insert = (index, value, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (data[index] == undefined) {
        data[index]=value;
        fs.writeFileSync(file, JSON.stringify(data));
    } else {
        console.log(index + ", Already exists !");
    }    
}

const Delete = (index, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (data[index] == undefined) {
        console.log(index + ", does not exist !");
    } else {
        data[index]=undefined;
        fs.writeFileSync(file, JSON.stringify(data));
    } 
}

const Update = (index, newValue, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (data[index] == undefined) {
        console.log(index + ", does not exist !");
    } else {
        data[index]=newValue;
        fs.writeFileSync(file, JSON.stringify(data)); 
    } 
}

const Search = (index, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (data[index] == undefined) {
        console.log(index + ", does not exist !");
    } else {
        return data[index];
    }
}

module.exports = {
    Create,
    Insert,
    Delete,
    Update,
    Search,
}
