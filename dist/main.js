"use strict";
// Création d'un symbole sans argument
const mySymbol1 = Symbol();
console.log(mySymbol1); // affiche "Symbol()"
// Le symbole "mySymbol1" est un identifiant unique. Lorsqu'il est affiché, il apparaît comme "Symbol()".
// Utilisation d’un symbole pour créer une propriété privée dans un objet :
const myObj = {}; // Déclare un objet avec des clés de type "symbol" et des valeurs de type "string".
const mySymbol2 = Symbol("myPrivateProperty"); // Crée un symbole avec la description "myPrivateProperty".
myObj[mySymbol2] = "valeur privée"; // Utilise "mySymbol2" comme clé pour ajouter une propriété à l'objet "myObj".
console.log(myObj[mySymbol2]); // Affiche "valeur privée"
// Ici, "mySymbol2" est utilisé comme une clé unique pour une propriété dans "myObj". 
// Cela permet de créer une propriété privée, car il est difficile d'accéder à cette clé autrement.
// Utilisation d’un symbole pour étiqueter un type dans TypeScript :
const mySymbol4 = Symbol("myType"); // Crée un autre symbole avec la description "myType".
// Déclaration d'une variable de type "MyType"
const myValue = {
    [mySymbol4]: true, // Initialise la propriété de "myValue" avec la clé "mySymbol4" et la valeur "true".
};
console.log(myValue[mySymbol4]); // Affiche "true"
// Ici, on utilise "mySymbol4" pour étiqueter un type et donner une valeur à une propriété dans "myValue".
// La clé de l'objet est un symbole, ce qui le rend unique et permet de ne pas avoir de collision avec d'autres clés.
/*

myObj: { [key: symbol]: string } :
=> Déclare un objet myObj dont
1. les clés sont des symboles (key: symbol)
2. les valeurs associées à ces clés sont des chaînes de caractères (string).

mySymbol2 = Symbol("myPrivateProperty") :
=> Crée un symbole avec une description "myPrivateProperty"
! Mais cette description est principalement utilisée à des fins de débogage ou de lisibilité.
& N'a pas d'impact sur la valeur unique du symbole.

myObj[mySymbol2] = "valeur privée" : Utilise le symbole mySymbol2 comme clé pour ajouter une valeur à l'objet myObj.
La clé est unique, donc même si tu utilises le même nom de propriété dans un autre objet, cela ne causera pas de collision.

console.log(myObj[mySymbol2]) :
=> Affiche la valeur associée à mySymbol2 dans myObj
=> qui est "valeur privée".
C'est une manière de créer des propriétés "privées" dans un objet
( les symboles ne sont pas facilement accessibles via des opérations normales sur les objets.*/
/*


En utilisant des symboles pour étiqueter les types :
=> donne des info supp à l’analyseur statique de TypeScript
=> aide à détecter les erreurs potentielles dès la phase de compilation.*/
