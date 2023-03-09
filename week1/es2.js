"use strict"

// Exercise at https://github.com/polito-WA1-AW1-2023/aw1-weeks/blob/main/week01/exercises/exercises.md


// Given a string of people, convert it into a list of people
const stringPeople = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti, Eros Fani"

const people = Array.from(stringPeople.split(",").map( (name) => name.trim()))

// Given a string of people, convert it into a list of acronyms
const acronyms = Array.from(stringPeople.split(",").map( (name) => name.trim().replace(/ /g, "").replace(/[a-z]/g, "")).sort( (n1, n2) => n1.localeCompare(n2)))


console.log(`We are:                      [${people}]`)
console.log(`With the following acronyms: [${acronyms}]`)

