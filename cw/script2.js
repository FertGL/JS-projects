const lib = {
    books: [],
    addBook: function (title, author) {
        this.books.push({ title, author })
    },

    getBook: function (param) {
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`$номер ${index} ${element.title}, ${element.author}`)
        }
    },

    getBookByIndex: function (index) {
        const element = this.books[index];
        console.log('Поиска по индесу ' + index)
        console.log(`$номер ${index} ${element.title}, ${element.author}`)
    },

    clearLib: function () {
        this.books.length = 0;
        alert('Библиотека очищена')
    },

    addBooks: function (title, author) {
        this.books.push({ title, author })
        if (confirm("Добавить ещё?" == true)) {
            let newTitle = prompt("Введите название книги");
            let newAuthor = prompt("Введите автора");
            this.addBooks(newTitle, newAuthor);
        } else {
            
        }

    },

    getLast: function () {
        const element = this.books[this.books.length - 1];
        console.log('Последняя книга');
        console.log(`$номер ${this.books.length} ${element.title}, ${element.author}`)
    },

    getFirst: function () {
        const element = this.books[0];
        console.log('Первая книга');
        console.log(`$номер ${1} ${element.title}, ${element.author}`)
    },

    getTitles: function () {
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`$номер ${index} ${element.title}`)
        } ``
    },

    getAuthors: function () {
        let authors = [];

        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index].author;
            authors.push({ element });
        }

        const set = new Set(authors);
        console.log(set);
    },

    countBookByAuthor: function(author) {
        let count = 0;
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index].author;
            if(author == element) {
                count++;
            }
        }
        alert("Количество книг авторат " + author + " = " + count);
    }
}

lib.addBook('The Greate Gatsby', "Scott F.");
lib.addBook('1984', "G. Orwell");

lib.getBook();

lib.getBookByIndex(1);
lib.getFirst();
lib.getLast();
lib.getTitles();
lib.getAuthors();
lib.clearLib();
lib.addBooks();
lib.getBook();
lib.countBookByAuthor("глеб");

