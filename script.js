function main(){
    const myLibrary = [];

    function Book(title, author, pages, hasRead){
        if(!new.target){
            throw Error('Use the "new" operator to call this Constructor method!'); // Prevents calling the constructor like a normal method.
        }

        this.title = title;
        this.author = author;
        this.pages = pages;

        hasRead ? this.hasRead = 'has been read' : this.hasRead = 'not read yet';
    }

    function addBookToLibrary(title, author, pages, hasRead){
        const book = new Book(title, author, pages, hasRead);
        myLibrary.push(book);
    }
}

main();