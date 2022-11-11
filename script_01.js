"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// // Funktionsrumpf (body) | callee
// function test()
// {
//     console.log("Hallo Marcel!");    
// }

// // Funktionsaufruf (call)
// test();


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// // console.log(firstName); // Fehler: Scope!
// function ausgabeNamen() {
//     let firstName = "Marcel";
//     console.log("Hallo " + firstName + "!");    
// }

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von Aussen

// ausgabeNamenParam("Sabine");// Argument
// // Argumente sind Daten für Parameter

// function ausgabeNamenParam(firstName) // Parameter
// {
//     console.log("Hallo " + firstName + "!");    
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Marcel","Eggert");// Argument

// function ausgabeNamenParams(firstName,familyName) // Parameter
// {
//     console.log("Hallo " + firstName + " " + familyName + "!");    
// }



/***** Funktionen 03a *******/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Marcel","Eggert");// Argument


// function ausgabeNamenParams2(firstName,familyName) // Parameter
// {
//     //1. Funktionalität: string composing
//     const gap = " ";
//     const outputStr = "Hallo " + firstName + gap + familyName + "!";
    
//     // 2. Funktionalität: string output
//         console.log(outputStr);    
// }

/***** Funktionen 03b *******/
//  Trennen der Funktionalitäten | return

// 1. Funktionalität: string composing
output(getString("Maxine","Mütze"));
function getString(firstName,familyName) {
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr
    console.log("Funktion beendet");
}

// 2. Funktionalität: string output
// output("hi");
function output(outputData) { //Wrapper
    console.log(outputData);
}