class Book {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    }
}

class Display{
    add (book) {
        let tableBody = document.querySelector('#tableBody')
        let uiString = `
            <tr>
              <td>${book.name} </td>
              <td>${book.author}</td>
              <td>${book.type}</td>
            </tr> `

        tableBody.innerHTML += uiString;
    }
    clear () {
        let libraryForm = document.querySelector('#libraryForm')
        libraryForm.reset()
    }
    validator (book) {

        if (book.name.length < 2 || book.author.length < 2) {
            return false
        } else {
            return true
        }

    }

    show (type, message) {
        let mess = document.querySelector('#message')
        mess.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        ${message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                   </div> `
        setTimeout(() => {
            mess.innerHTML = ''
        }, 2000);
    }
}

// Add submit event listener

let libraryForm = document.querySelector('#libraryForm')

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    const name = document.querySelector('#bookName').value
    const author = document.querySelector('#author').value
    let type

    const fiction = document.querySelector('#fiction')
    const programming = document.querySelector('#programming')
    const cooking = document.querySelector('#cooking')

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type)

    console.log(book)

    let display = new Display()

    if (display.validator(book)) {

        display.add(book)
        display.clear()
        display.show('success', 'Book added Successfully')

    } else {
        display.show('danger', 'Sorry you can not add the book')
    }

    e.preventDefault()
}