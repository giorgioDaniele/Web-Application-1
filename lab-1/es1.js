"use strict"

const NN = 2 

const twoCharTransformer   = (word) => console.log(word + word)
const threeCharTransformer = (word) => console.log(word.slice(0, 1) + `${word.charAt(NN - 1)}` + word.slice(1))
const stdTransformer       = (word) => console.log(word.replace(word.slice(NN,word.length - NN), ""))

const mainTransformer      = (word) => word.length > (NN << 1) ? stdTransformer(word) : word.length == (NN + 1) ? threeCharTransformer(word) : twoCharTransformer(word)


const words =  ["spring", "helicopter", "cat", "it", "hey", "web", "application"].forEach( (word) => mainTransformer(word))
