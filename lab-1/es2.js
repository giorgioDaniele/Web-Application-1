"use strict"

const dayjs = require('dayjs')

function Film (id, title, isFavorite = false, watchDate = "", rating = -1) {

    this.id = id
    this.title = title
    this.isFavorite = isFavorite
    this.rating = (rating >= 1 && rating <= 5) ? rating : -1 

    // An empty string ("") is generally considered to be falsy

    // The syntax expr1 && expr2 means what's following: if expr1 
    // can be converted into falsy, it returns expr1, otherwise
    // it returns expr2
    
    // If watchDate is equal to "", then watchDate && dayjs(watchDate) returns
    // watchDate. On the contrary, if watchDate is not equal to "", it returns 
    // dayjs(watchDate)
    this.watchDate = watchDate && dayjs(watchDate)

    // Methods

    this.toString = () => console.log( `
            ----------------------------------------------
            [Film ID]: ${this.id} 
            [Title]: ${this.title} 
            [Is it a favorite film?]: ${this.isFavorite} 
            [Date]: ${this.watchDate instanceof dayjs ? dayjs(this.watchDate).format("DD/MM/YYYY") : "<not defined>"} 
            [Rating]: ${this.rating}
            ----------------------------------------------
            `)

}


function FilmLibrary () {

    this.films = []

    this.addNewFilm = (film) => this.films.push(film)
    this.toString = () => this.films.forEach( (film) => film.toString() )

    this.sortByDate = () => {
        const withDate    = [...this.films].filter( (film) => film.watchDate instanceof dayjs)
        const withoutDate = [...this.films].filter( (film) => !(film.watchDate instanceof dayjs)).sort( (film1, film2) => dayjs(film1.watchDate).diff(dayjs(film2.watchDate)))
        return [...withDate, ...withoutDate]
    }

    this.deteleFilm = (id) => this.films = [...this.films.filter( (film) => film.id != id)]

    this.resetWatchedFilms = () => this.films.forEach((film) => film.watchDate = "")

    this.getRated = () => this.films.filter((film) => film.rating >= 0).sort((film1, film2) =>  - film1.rating + film2.rating)
}

// Create the films
const f1 = new Film(1, "Pulp Fiction", true, "2022-03-10", 5);
const f2 = new Film(2, "21 Grams", true, "2022-03-17", 4);
const f3 = new Film(3, "Star Wars", false);
const f4 = new Film(4, "Matrix", false);
const f5 = new Film(5, "Shrek", false, "2022-03-21", 3);


// Create the library
const lib = new FilmLibrary()

Array.of(f1, f2, f3, f4, f5). forEach( (film) => lib.addNewFilm(film))

// Print the current library
lib.toString()

// Print the current library, but sorted by date
lib.sortByDate().toString()

console.log("Sorting by rating...")
// Print the current library, but sorted by rating
lib.getRated().toString()

console.log("Deleting film with ID 1...")
lib.deteleFilm(1)
console.log("Library...")
// Print the current library, but after deleting a fim
lib.toString()


console.log("Resetting all dates...")
lib.resetWatchedFilms()
console.log("Library...")
// Print the current library, but after resetting all dates
lib.toString()






