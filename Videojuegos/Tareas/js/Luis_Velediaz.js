/*
* Actividad en clase: Javascript
* Luis Veledíaz Flores - A01029829
* 12-02-2025
*/

"use strict";

/* Ej. 1
* Escribe una función llamada firstNonRepeating que encuentre 
* el primer carácter de un cadena de texto que no se repite. 
* Prueba tu función con: 'abacddbec'
*/
export function firstNonRepeating (string){
  for (let i = 0; i < string.length; i++){
      let repeated = string[i];
      for (let j = 0; j < string.length; j++){
          if (i != j  && repeated == string[j]){
              break;
          }
          else{
              if (j == string.length - 1){
                  return repeated;
              }
          }
      }
  }
}

console.log("Ejercicio 1: ");
console.log(firstNonRepeating('abacddbec'));
console.log(firstNonRepeating(''));
console.log("");

/* Ej. 2
* Escribe una función llamada bubbleSort que implemente 
* el algoritmo 'bubble-sort' para ordenar una lista de números.
*/
export function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log("Ejercicio 2: ");
let testEx2 = [5, 3, 1, 2, 4];
console.log(testEx2);
bubbleSort(testEx2);
console.log(testEx2);
console.log("");

/* Ej. 3
* Escribe dos funciones: la primera con nombre invertArray que invierta un arreglo de 
* números y regrese un nuevo arreglo con el resultado; la segunda, con nombre invertArrayInplace,
* que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
*/
export function invertArray(arr){
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }
    return arr2;
}

console.log("Ejercicio 3, invertArray: ");
let testEx3 = [2001, 2002, 2003, 2004, 2005];
console.log(invertArray(testEx3));
console.log("");

export function invertArrayInplace(arr){
    for (let i=0; i < arr.length / 2; i++){
        for (let j = arr.length - 1 - i; j >= 0; j--){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            break;
        }
    }
}

console.log("Ejercicio 3 invertArrayInPlace: ");
let testEx3_2 = [20, 14, 15, 16];
invertArrayInplace(testEx3_2);
console.log(testEx3_2);
console.log("");

/* Ej. 4
* Escribe una función llamada capitalize que reciba una cadena de texto 
* y regrese una nueva con la primer letra de cada palabra en mayúscula.
*/
function capitalize(string){
    let cap=string[0].toUpperCase();
    let rest="";
    for (let i=1; i<string.length; i++){
        rest += string[i];
    }
    let result=cap+rest;
    return result;
}

console.log("Ejercicio 4: ");
let testEx4 = "oupigoupi";
capitalize(testEx4);
console.log(capitalize(testEx4));
console.log("");


/* Ej. 5
* Escribe una función llamada mcd que calcule el máximo común divisor de dos números
*/
export function mcd(a, b){
    if (a == 0){
        return b;
    }
    else if (b == 0){
        return a;
    }
    else{
        return mcd(b, (a % b));
    }
}

console.log("Ejercicio 5: ");
console.log(mcd(36, 12));
console.log("");

/* Ej. 6
* Crea una función llamada hackerSpeak que cambie una cadena de texto a 'Hacker Speak'.
* Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
*/
export function hackerSpeak(string){
    let result="";
    for (let i = 0; i < string.length; i++){
      switch (string[i].toLowerCase()){
        case 'a':
          result = result + 4;
          break;
        case 'e':
          result = result + 3;
          break;
        case 'i':
          result = result + 1;
          break;
        case 'o':
          result = result + 0;
          break;
        case 's':
          result = result + 5;
          break
        default:
          result = result + string[i];
          break;
            }
        }
        return result;
    }
    
console.log("Ejercicio 6: ");
let string = "Hola, Javascript es divertido!";
console.log(hackerSpeak(string));
console.log("");
    

/* Ej. 7
* Escribe una función llamada factorize que reciba un número, y regrese una lista con todos sus factores.
*/
export function factorize(n){
    let factor=[];
    for (let i=0; i <= n; i++){
        if (n % i == 0){
            factor.push(i);
        }
        else if (n == 0){
            break;
        }
    }
    return factor;
}

console.log("Ejercicio 7: ");
console.log(factorize(12));
console.log("");


/* Ej. 8
* Escribe una función llamada deduplicate que quite los elementos duplicados de un 
* arreglo y regrese una lista con los elementos que quedan.
*/
export function deduplicate(arr){
    for (let i = 0; i < arr.length; i++){
        let n = arr[i]; 
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] == n){
                arr.splice(j, 1); 
                j--;
            }
        }
    }
    return arr;
}

console.log("Ejercicio 8: ");
console.log(deduplicate([1, 2, 4, 6, 5, 2, 7, 2, 5, 1]));
console.log("");


/* Ej. 9
* Escribe una función llamada findShortestString que reciba como parámetro una lista de 
* cadenas de texto, y regrese la longitud de la cadena más corta.
*/
export function findShortestString(string){
    if (string.length == 0){
        return 0;
    }
    let shortest= string[0].length; 
    for (let i = 1; i < string.length; i++){
        if (string[i].length < shortest){
            shortest = string[i].length;
        }
        else{
            continue;
        }
    }
    return shortest;
}

console.log("Ejercicio 9: ");
let set = ["Dog", "Fish", "Platypus", "Elephant", "Pterodactyl", "Otter"];
console.log(findShortestString(set));
console.log("");


/* Ej. 10
* Escribe una función llamada isPalindrome que revise si una cadena de texto es un palíndromo o no.
*/
export function isPalindrome (string){
    let stringPal = '' // Se crea una string vacía
    for (let i = string.length - 1; i >= 0; i --){
      stringPal = stringPal + string[i];
    }
    if (string == stringPal){
        return true
    }
    else{
        return false
    }
}

console.log("Ejercicio 10: ");
let palindromo = "reconocer";
console.log(isPalindrome(palindromo));
console.log("");


/* Ej. 11
* Escribe una función llamada sortStrings que tome una lista de cadena de textos y devuelva 
* una nueva lista con todas las cadenas en orden alfabético.
*/
export function sortStrings(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j].toLowerCase() > arr[j+1].toLowerCase()){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false)
        break;
    }
    let newarr = arr;
    return newarr;
}

console.log("Ejercicio 11: ");
let setW = ["Ana", "Abigail", "Ernesto", "Ivan", "Jose"];
console.log(sortStrings(setW));
console.log("");


/* Ej. 12
* Escribe una función llamada stats que tome una lista de 
* números y devuelva una lista con dos elementos: la mediana y la moda. 
*/
export function media(arr){
    if (arr.length == 0){
        return 0;
    }
    else{
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        let media = sum / arr.length;
        return media;
    }
}

export function moda(arr){
    if (arr.length == 0){
        return 0;
    }
    bubbleSort(arr);
    let moda = arr[0] 
    let count = 1;
    let max = 1;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] == arr[i - 1]){  
          count++;
        } 
        else{
            if (count > max){
                max = count;
                moda = arr[i - 1];
            }
            count = 1; 
        }
    }
    
    return moda;
}

export function stats(arr){
    return [media(arr), moda(arr)];
}

console.log("Ejercicio 12: ");
console.log(stats([10, 10, 8, 4, 5, 9, 5]));
console.log("");


/* Ej. 13
* Escribe una función llamada popularString que tome una lista de cadenas de 
* texto y devuelva la cadena más frecuente.
*/
export function popularString(arr){
    if (arr.length == 0){
        return "";
    }
    let first = arr[0];
    let max = 0;
    let count;
    for (let i = 0; i < arr.length; i++) {
        count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > max){
            max = count;
            first = arr[i];
        }
    }
    
    return first;
}

console.log("Ejercicio 13: ");
const strings = ["manzana", "pera", "banana", "uva", "manzana", "manzana", "manzana", "manzana", "manzana", "naranja", "kiwi"];
console.log(popularString(strings)); 
console.log("");


/* Ej. 14
* Escribe una función llamada isPowerOf2 que tome un número y devuelva verdadero 
* si es una potencia de dos, falso de lo contrario.
*/
export function isPowerOf2(n){
    if (n <= 0){
        return false;
    }
    else if (n == 1){
        return true 
    }
    else{
        let exponent;
        exponent = Math.round(Math.log(n) / Math.log(2));
        if (Math.pow(2, exponent) == n){
            return true
        }
        else{
            return false;   
        }
    }
}

console.log("Ejercicio 14: ");
console.log(isPowerOf2(32));
console.log("");

/* Ej. 15
* Escribe una función llamada sortDescending que tome una lista de números y devuelva una nueva 
* lista con todos los números en orden descendente.
*/
export function sortDescending(arr){
    for (let i=0; i < arr.length - 1; i++){
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false)
        break;
    }
    return arr;
}

console.log("Ejercicio 15: ");
let p = [7, 9, 5, 6, 4, 7];
sortDescending(p);
console.log(p);
console.log("");
