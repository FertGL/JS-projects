class LibraryItem {
    year;
    author;
    title;
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    textAbout() {
        console.log(`${this.title} рассказывает про...`)
    }
}

class Magasine extends LibraryItem {
    #description;
    constructor(title, year, description) {
        this.#description = description
        this.year = year;
        this.title = title;
    }

    textAbout() {
        console.log(`В журнале ${this.title} рассказывают: ${this.#description}`)
    }
}

class Booke extends LibraryItem {
    #description;
    constructor(title, author, year, description) {
        this.#description = description;
        super(year);
        this.author = author;
        this.title = title;
    }

    textAbout() {
        console.log(`${this.author} в своей книге ${this.title} писал: ${this.#description}`)
    }

}