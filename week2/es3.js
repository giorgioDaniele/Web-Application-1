"use strict"

const dayjs = require('dayjs')


function Answer(response, name, score, date) {

    this.response = response
    this.name     = name
    this.score    = score
    this.date     = date

    this.toString = () => `[${this.response}] by [${this.name}] in [${this.date}], with score [${this.score}]`
}

function Question(question, name, score) {
    
    this.question = question
    this.name     = name
    this.score    = score
    this.answers  = []

    // It's up to the programmer to use or not use {} for lambda
    // If the programmer uses {} then return is mondatory, while
    // if the programmer does not use {}, then return can be skipped
    
    this.printAnswers = () => this.answers.forEach( (answer) => console.log(`${answer}`)) 

    //add(answer) // pass a fully-constructed Answer object
    this.add = (answer) => this.answers.push(answer)

    //findAll(name) // returns all the Answers of a given person
    this.findAll = (name) => this.answers.filter( (answer) => answer.name == name)

    //afterDate(date) // returns an array of Answers after the given date
    this.afterDate = (date) => this.answers.filter((answer) => answer.date.isAfter(date))

    //listByScore() // answer sorted, by decreasing score
    // Pay attention, while filter(), map() create a new array
    // sort does not create an array from scratch, but it works in place
    this.listByScore = () =>  this.answers.reduce( (sorted, answer) => {

        // Insertion Sort
        let index = 0
        while(index < sorted.length && answer.score < sorted[index].score) index++
        sorted.splice(index, 0, answer)
        return sorted

    }, [])

    //listByDate() // returns an array of Answers, sorted by increasing date
    this.listByDate = () => 
        this.answers.reduce( (sorted, answer) => {

            // Insertion Sort
            let index = 0
            while(index < sorted.length && answer.date.isAfter(sorted[index].date)) index++
            sorted.splice(index, 0, answer)
            return sorted

        }, [])
}

let q = new Question("Best way of enumerating an array in JS", "Enrico", 23, dayjs('2023-02-28'))

let ans1 = new Answer("for of", "Alice", -1, dayjs('2023-03-07'))
let ans2 = new Answer("for i=0,i<N,i++", "Harry", 3, dayjs('2023-03-04'))
let ans3 = new Answer("for in", 'Harry', -2, dayjs('2023-03-02'));
let ans4 = new Answer("i=0 while(i<N)", "Carol", -1, dayjs('2023-03-01'))

q.add(ans1)
q.add(ans2)
q.add(ans3)
q.add(ans4)

q.listByScore().forEach( (answer) => console.log(`${answer}`))
console.log("-------------------------------")
q.listByDate().forEach( (answer) => console.log(`${answer}`))
console.log("-------------------------------")
