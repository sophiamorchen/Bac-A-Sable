"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tasks = ["faire les courses", "aller a l'école", "rendre visite a un ami"];
for (let i = 0; i < tasks.length; i++) {
    console.log(`Vos taches sont ${i} ${tasks[i]}`);
}
let monTableau = [["salut", "toi"], ["comment", "ca", "va?"]];
console.log(monTableau[1][2]);
console.log("Hello depuis TypeScript !");
function greet(name) {
    if (name) {
        console.log(`Bonjour   ${name} !`);
    }
    else {
        console.log("Bonjour !");
    }
}
greet('Gael');
function greet1(name = "monde") {
    console.log(`Bonjour, ${name}`);
}
;
greet1('Marco');
/*
Pour définir le type de retour d'une fonction en TypeScript, on utilise :
=> Une  annotation de -TYPE- après les parenthèses de la fonction.
=> Par exemple :
pour définir une fonction qui renvoie un nombre, on écrirait :
    function maFonction(): number { ... }.

EXEMPLE :
*/
function getMultiplier(factor) {
    return function (x) {
        return x * factor;
    };
}
getMultiplier(6);
function callLong(chaine) {
    return chaine.length;
}
console.log(callLong("Merguez"));
/*
En TypeScript, le mot-clé void :
=> Indique que la fonction ne renvoie pas de valeur.
=> Cela signifie que le résultat d’un appel à cette fonction ne peut pas être utilisé comme une valeur de retour.
*/
/*
Paramètres :
1. nom: string : Un paramètre obligatoire, de type string.
2. age?: number : Un paramètre optionnel (? signifie que ce paramètre peut ne pas être fourni). Si fourni, il doit être de type number.
3. ville = "Paris" : Un paramètre avec une valeur par défaut. Si ce paramètre n'est pas spécifié lors de l'appel de la fonction, il prendra la valeur "Paris".
*/
// déclaration d'une fonction
function direBonjour(nom, age, ville = "Paris") {
    console.log(`direBonjour, je m'appelle ${nom}.`);
    if (age) {
        console.log(`J'ai ${age} ans.`);
    }
    console.log(`Je viens de ${ville}.`);
}
direBonjour("Eva");
direBonjour("Boris", 35);
direBonjour("Robert");
/*
Pourquoi utiliser void ?
Clarté : En indiquant que la fonction ne renvoie rien, vous aidez les développeurs (y compris vous-même)
=> à comprendre comment utiliser cette fonction.
=> Cela établit des attentes claires quant à l'utilisation de la fonction et à ce qui se passe lorsqu'elle est invoquée.

Erreurs potentielles : TypeScript vous avertira si vous essayez d'utiliser une valeur de retour de la fonction direBonjour,
=> ce qui est une protection utile. Par exemple, si vous essayez d'écrire :

typescript
const result = direBonjour("Alice");
console.log(result); // Cela provoquera une erreur, car la fonction ne renvoie rien.
TypeScript émettra une erreur parce que result ne peut pas être utilisé
=> puisque la fonction direBonjour est définie pour ne rien retourner (void). */
/*
FONCTIONS FLECHEES

Pour définir une fonction fléchée en TypeScript
=> Syntaxe :  (param1: type, param2: type) => expression.
=> Dans ce cas, la fonction prend 2 paramètres x et y de type « number » et renvoie leur somme.
La syntaxe correcte pour définir une telle fonction fléchée serait donc la suivante :
*/
let maFonction = (x, y) => x + y;
/*
LE CASTING IMPLICITE
Le casting implicite est automatiquement effectué par le compilateur lorsqu'il est possible de convertir implicitement un type en un autre type.
=> Si j'ajoute une chaîne de caractères à un nombre :
=> TypeScript convertit automatiquement le nombre en une chaîne de caractères pour concaténer les 2.

Exemple de casting implicite : */
1;
let a = 5;
2;
let b = "10";
3;
let c = a + b; // TypeScript convertit automatiquement 'a' en une chaîne de caractères pour concaténer les deux
4;
console.log(c); // Affiche '510'
/*
LE CASTING EXPLICITE
Le casting explicite, en revanche, nécessite que le développeur spécifie explicitement le type de données dans lequel il souhaite convertir une variable.
=> utiliser l'opérateur as ou des crochets d'angle <>.

Exemple de casting explicite avec l'opérateur as :
*/
let a2 = "5";
let b2 = a2; // convertit explicitement 'a' en un nombre en utilisant l'opérateur "as"
console.log(b2); // Affiche 5
// Exemple de casting explicite avec des crochets d'angle <> :
let a1 = "5";
let b1 = a1; // converti 'a' en un nombre en utilisant des crochets d'angle < >
console.log(b1); // Affiche 5
/*
Le casting implicite et explicite
Voici un exemple qui illustre l'utilisation du casting implicite et explicite avec des tableaux et des fonctions en TypeScript.

Supposons que nous ayons un tableau de nombres et que nous voulions appliquer une fonction qui multiplie chaque nombre par un facteur donné.
Cependant, la fonction que nous voulons utiliser prend :
=> en entrée un tableau de nombres sous forme de chaîne de caractères
=> et renvoie un tableau de nombres sous forme de chaîne de caractères.

Pour résoudre ce problème, nous devons
1. utiliser le casting explicite pour convertir le tableau de nombres en tableau de chaînes de caractères
2. puis appeler la fonction.
3. et enfin utiliser le casting implicite pour convertir le tableau de chaînes de caractères résultant en un tableau de nombres.

Voici le code correspondant :
*/
// Tableau de nombres
const nombres = [1, 2, 3, 4, 5];
// Fonction qui multiplie chaque nombre par un facteur donné
function multiplierNombres(nombres, facteur) {
    const resultat = [];
    nombres.forEach(nombre => {
        const resultatMultiplication = Number(nombre) * facteur;
        resultat.push(resultatMultiplication.toString());
    });
    return resultat;
}
// Appel de la fonction avec le tableau de nombres
const facteur = 2;
const nombresEnChaineDeCaracteres = nombres.map(nombre => nombre.toString());
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres, facteur);
const resultats = resultatsMultiplication.map(resultat => Number(resultat));
// Affichage des résultats
console.log(nombres); // [1, 2, 3, 4, 5]
console.log(resultats); // [2, 4, 6, 8, 10]
/*
Dans cet exemple, nous avons
1. Converti le tableau de nombres en un tableau de chaînes de caractères :
=>  méthode map et la méthode toString.

2. Appelé la fonction multiplierNombres avec le tableau de chaînes de caractères en utilisant le casting explicite as string[].

La fonction a renvoyé
=> Un tableau de chaînes de caractères représentant les résultats de la multiplication
=> Que nous avons ensuite converti en un tableau de nombres
=> En utilisant la méthode map et la méthode Number,
=> Suivie du casting implicite as number[].

En résumé, le casting explicite et le casting implicite sont des techniques utiles pour
=> manipuler des données de différents types en TypeScript.

/!\ MAIS il est important de les utiliser avec précaution pour éviter les erreurs de type.
*/
// CASTING IMPLICITE
let x = 7;
let y = "8";
let z = x + y;
console.log(z); // sortie 78
// CASTING EXPLICITE
// Déclaration d'une variable de type 'any'
let xx = "10";
// Cast explicite de la variable en type 'number'
let yy = xx;
// Affichage de la valeur et du type : 
console.log(yy); // sortie 10
console.log(typeof yy); // sortie string
// Déclaration d'une variable de type 'any'
let xxx = "10";
// Cast explicite de la variable en type 'number' à l'aide de l'opérateur "as"
let yyy = xxx;
// Affichage de la valeur et du type de la variable après le cast
console.log(`Valeur de yyy : ${yyy}`); // 10
console.log(`Type de yyy : ${typeof yyy}`); // string
// Voici un exemple combinant filter, map et reduce :​
const nombresx = [1, 2, 3, 4, 5];
// Calculer la somme des carrés des nombres pairs
const sommeCarresPairs = nombres
    .filter((n) => n % 2 === 0) // [2, 4]
    .map((n) => n * n) // [4, 16]
    .reduce((acc, val) => acc + val, 0); // 20
/*
Déclarez une énumération nommée « Jours » qui contient les valeurs
« Lundi », « Mardi », « Mercredi », « Jeudi », « Vendredi », « Samedi » et « Dimanche ».

1. Créez une fonction nommée « obtenirJour » qui prend
2. un paramètre de type nombre
ET
3. retourne le jour correspondant dans l'énumération « Jours »
=> (par exemple, si le nombre est 1, la fonction doit retourner « Lundi »).
*/
var Jours;
(function (Jours) {
    Jours[Jours["lundi"] = 1] = "lundi";
    Jours[Jours["mardi"] = 2] = "mardi";
    Jours[Jours["mercredi"] = 3] = "mercredi";
    Jours[Jours["jeudi"] = 4] = "jeudi";
    Jours[Jours["vendredi"] = 5] = "vendredi";
    Jours[Jours["samedi"] = 6] = "samedi";
    Jours[Jours["damichance"] = 7] = "damichance";
})(Jours || (Jours = {}));
function obtenirJour(nombre) {
    return Jours[nombre];
}
console.log(obtenirJour(2));
