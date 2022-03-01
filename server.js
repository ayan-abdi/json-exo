
const fs = require('fs'); 
const path = require('path'); 
const readline = require('readline');

//  il faut lire le fichier json pour y avoir accès

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const filename = path.resolve('jsonFile','personnage.json');
console.log(`le fichier est dispo sur : ${filename}`);

fs.readFile(filename, (error, jsonFile) => {
    let dataJson = JSON.parse(jsonFile)
    console.log(dataJson);
})
fs.writeFile(__dirname, filename, (error) =>{
    console.log('>Affichage de mon  fichier json');
})
