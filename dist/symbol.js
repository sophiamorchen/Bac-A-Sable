"use strict";
// Création d'un symbole unique pour identifier le type de champ  
const fieldTypeSymbol = Symbol("fieldType");
// Création d'un champ de type texte  
const textField = {
    label: "Text Field", // Libellé  
    value: "Hello", // Valeur initiale  
    [fieldTypeSymbol]: "text", // Type de champ ('text')  
};
// Création d'un champ de type nombre  
const numberField = {
    label: "Numbers", // Libellé  
    value: 42, // Valeur initiale (un nombre)  
    [fieldTypeSymbol]: "number", // Type de champ ('number')  
};
// Création d'un champ de type date  
const dateField = {
    label: "Date de naissance", // Libellé  
    value: new Date("1990-01-01"), // Valeur initiale (une date)  
    [fieldTypeSymbol]: "date", // Type de champ ('date')  
};
// Fonction de validation des entrées de formulaire  
function validateFormField(field) {
    // Utilisation d'un switch pour vérifier le type de champ  
    switch (field[fieldTypeSymbol]) {
        case "text": // Si le champ est de type texte  
            return `Le champ "${field.label}" est valide : ${field.value}`; // Retourne un message de validation  
        case "number": // Si le champ est de type nombre  
            if (typeof field.value !== "number") { // Vérifie si la valeur n'est pas un nombre  
                return `Le champ "${field.label}" doit être un nombre !`; // Si faux, message d'erreur  
            }
            return `Le champ "${field.label}" est valide : ${field.value}`; // Retourne un message de validation  
        case "date": // Si le champ est de type date  
            if (!(field.value instanceof Date)) { // Vérifie si la valeur n'est pas une instance de Date  
                return `Le champ "${field.label}" doit être une date !`; // Si faux, message d'erreur  
            }
            // Retourne un message de validation formaté avec la date au format ISO  
            return `Le champ "${field.label}" est valide : ${field.value.toISOString().split('T')[0]}`;
        default: // Si le type de champ n'est pas reconnu  
            throw new Error("Type de champ de formulaire invalide"); // Lancer une erreur  
    }
}
// Création d'un tableau de champs de formulaire à valider  
const fields = [textField, numberField, dateField]; // Déclaration des champs à valider  
// Itération pour valider chaque champ et afficher le résultat  
fields.forEach((field) => {
    console.log(validateFormField(field)); // Affiche le message de validation pour chaque champ  
});
/*
Dans cet exemple, nous avons
1. créé un symbole fieldTypeSymbol pour représenter le type de champ de formulaire
2. Puis nous l’avons utilisé pour étiqueter chaque champ de formulaire avec son type correspondant.
3. Créé une fonction validateFormField qui utilise le symbole pour valider chaque champ de formulaire en fonction de son type.

L’utilisation de symboles nous permet de créer une interface plus robuste
et plus sûre pour notre application de formulaire dynamique.
=> Les types de champ de formulaire ne peuvent pas être facilement modifiés ou falsifiés par d’autres parties du code.

*/ 
