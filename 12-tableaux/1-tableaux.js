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
let tailleTab = monTableau.length
console.log(monTableau[tailleTab - 1]);

// Tableau à plusieurs dimensions
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

monTableau2D[0].push('test');
monTableau2D[0].pop();
monTableau2D[1].shift();
console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
    'prenom': 'Mark',
    'nom': 'Zuckerberg',
    'poste': 'PDG de Facebook'
};

console.log(monTableauAssociatif['nom']);

// Retrouver un élément dans un tableau (1D seulement)
console.log(monTableau.indexOf('deux'));

// Associe les valeurs d'un tableau en chaine de caractères
// ', ' <- séparateur, ',' si aucun
// 1D
console.log(monTableau.join(', '));

// 2D
console.log(monTableau2D.join(' / '));

// splice
// 1D
// Suppression à partir de l'élément 0 de 2 éléments
monTableau.splice(0, 2);
console.log(monTableau);

// Rajouter des éléments à partir de l'index 0
monTableau.splice(0, 0, 'random', 'pie');
console.log(monTableau);

// 2D
// On sélectionne le 1er tableau pour y supprimer le 1er élément
monTableau2D[0].splice(0, 1);
console.log(monTableau2D);

monTableau2D.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D);