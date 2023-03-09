"use strict"

// Exercise at https://github.com/polito-WA1-AW1-2023/aw1-weeks/blob/main/week01/exercises/exercises.md

// A "const" references is used to define a pointer to a value which can not be
// assigned more than once
const scores   = [-11, -1, 3, 18, 12, 0, -4, 34]
const toDelete = 2

console.log(`Before processing:  [${scores}]`)

// Given a value sequence, filter each one so that there are no negative values, and
// then sort, by using increasing order
// (No additional control are provided)
const processedScore = [...scores].filter((mark) => mark > 0).sort((s1, s2) => s1 - s2).splice(toDelete)

// Negative number which have been removed
let NN = scores.length - (processedScore.length + toDelete)

console.log(`[${NN}] negative marks have been removed`)

// Evalute the average
const average = processedScore.reduce( (total, amount) => total + amount) / processedScore.length

console.log(`The average mark is [${average}]`)

// If processedScore were let, the use the following patter
//processedScore = processedScore.concat(Array(NN + toDelete).fill(average))

// If processedScore were const, the use the following patter
// const finalScore = [...processedScore, ...Array(NN + toDelete).fill(average)]

// Another possible solution might be by using splice()
processedScore.splice(processedScore.length, 0, ...Array(NN + toDelete).fill(average))


console.log(`After processing:   [${processedScore}]`)
