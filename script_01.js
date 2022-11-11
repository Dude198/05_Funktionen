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

ausgabeNamenParam("Marcel","Eggert");// Argument

function ausgabeNamenParam(firstName,familyName) // Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");    
}
