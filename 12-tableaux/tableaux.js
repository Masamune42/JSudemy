// Tableau simple

// Plus ancien
// let monTableau = new Array('un', 'deux', 'trois');
// let monTableau = Array('un', 'deux', 'trois');
// Plus récent
let monTableau = ['un', 'deux', 'trois'];
monTableau.push('quatre');
monTableau.unshift('zero');
monTableau.pop();
monTableau.shift();
console.log(monTableau);

// Accéder au dernier élément
let tailleTab =monTableau.length
console.log(monTableau[tailleTab-1]);

// Tableau à plusieurs dimensions
let monTableau2D = [
    ['Mark', 'Jeff','Bill'],
    ['Zuckerberg','Bezos','Gates']
];

monTableau2D[0].push('test');
monTableau2D[0].pop();
monTableau2D[1].shift();
console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
};

console.log(monTableauAssociatif['nom']);



