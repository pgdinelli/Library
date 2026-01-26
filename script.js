function main(){
    const myLibrary = [];

    const addBtn = document.querySelector('#addBtn');
    const titleInput = document.querySelector('#titleInput');
    const authorInput = document.querySelector('#authorInput');
    const pagesInput = document.querySelector('#pagesInput');

    function Book(title, author, pages, hasRead){ // Constructor
        if(!new.target){
            throw Error('Use the "new" operator to call this Constructor method!'); // Prevents calling the constructor like a normal method.
        }
        
        this.id = crypto.randomUUID()
        this.title = title;
        this.author = author;
        this.pages = pages;

        hasRead ? this.hasRead = 'has been read' : this.hasRead = 'not read yet';
    }

    function addBookToLibrary(book){
        if(!titleInput.value && !authorInput.value && !pagesInput.value){
            alert('Please, fill all fields');
            return;
        }
        myLibrary.push(book);
    }

    function displayBooks() {
        const bookDiv = document.querySelector('#bookDiv');
        myLibrary.forEach( book => bookDiv.innerHTML += `${book}<br>`);
    }

    addBtn.addEventListener('click', e => {
        e.preventDefault();
        const book = new Book(titleInput.value, authorInput.value, pagesInput.value);
        addBookToLibrary(book);
        console.log(myLibrary);
    });

    displayBooks();

}

main();