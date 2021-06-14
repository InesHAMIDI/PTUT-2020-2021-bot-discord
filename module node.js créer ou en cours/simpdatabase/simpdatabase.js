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

const Insert = (tab, index, value, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (tab == "") {
        if (data[index] == undefined) {
            data[index] = value;
            fs.writeFileSync(file, JSON.stringify(data));
        } else {
            console.log(index + ", Already exists !");
        }
    } else if (index == "") {
        if (data[tab] == undefined) {
            data[tab] = {};
            fs.writeFileSync(file, JSON.stringify(data));
        } else {
            console.log(tab + ", Already exists !");
        }    
    } else {
        if (data[tab][index] == undefined) {
            data[tab][index] = value;
            fs.writeFileSync(file, JSON.stringify(data));
        } else {
            console.log(tab + "{" + index + "} , Already exists !");
        }
    }
}

const Update = (tab, index, newValue, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (tab == "") {
        if (data[index] == undefined) {
            console.log(index + ", does not exist !");
        } else {
            data[index] = newValue;
            fs.writeFileSync(file, JSON.stringify(data)); 
        }
    } else {
        if (data[tab][index] == undefined) {
            console.log(tab + "{" + index + "} , does not exist !");
        } else {
            data[tab][index] = newValue;
            fs.writeFileSync(file, JSON.stringify(data));
        }
    } 
}

const Delete = (tab, index, file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (tab == "") {
        if (data[index] == undefined) {
                console.log(index + ", does not exist !");
            } else {
                data[index] = undefined;
                fs.writeFileSync(file, JSON.stringify(data));
            }
    } else if (index == "") {
        if (data[tab] == undefined) {
            console.log(tab + ", does not exist !");
        } else {
            data[tab] = undefined;
            fs.writeFileSync(file, JSON.stringify(data));
        }
    } else {
        if (data[tab][index] == undefined) {
            console.log(tab + "{" + index + "} , does not exist !");
        } else {
            data[tab][index] = undefined;
            fs.writeFileSync(file, JSON.stringify(data));
        }
    }
}

/*
const DeleteTotal = file => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    for (let i = 0; i<data.lenght ; i++) {
        data[i] = undefined;
        fs.writeFileSync(file, JSON.stringify(data));
    }
    console.log("File content Delete !")
}
*/

const Search = (tab, index,  file) => {
    let out = fs.readFileSync(file);
    let data = JSON.parse(out.toString());
    if (tab == "") {
        if (data[index] == undefined) {
                console.log(index + ", does not exist !");
            } else {
                return data[index];
            }
    } else {
        if (data[tab][index] == undefined) {
            console.log(tab + "{" + index + "} , does not exist !");
        } else {
            return data[tab][index];
        }
    }
}

module.exports = {
    Create,
    Insert,
    Update,
    Delete,
    //DeleteTotal,
    Search,
}
