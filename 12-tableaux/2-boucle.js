// Boucle for..in 

let panier = ['fraise', 'banane', 'poire'];

// panier : index du tableau panier (et pas l'élément)
console.log('---Boucle for..in---');
for (const fruit in panier) {
    console.log(fruit + ' : ' + panier[fruit]);
}

// Boucle for..of
console.log('\n---Boucle for..of---');
for (const fruit of panier) {
    console.log(panier.indexOf(fruit) + ' ' + fruit);
}

// Boucle foreach
console.log('\n---Boucle foreach---');
let listeDePays = ['France','Belgique','Japon','Maroc'];
listeDePays.forEach(pays => {
    console.log(pays);
});

// Ancienne méthode
// listeDePays.forEach(function(pays){
//     console.log(pays);
// });