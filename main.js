const modal = document.querySelector('#modal')
const addButton = document.getElementById('add-book');
const closeModal = document.getElementById('close')

const UNCOMPLETED_BOOK_ID = "unread";
const COMPLETED_BOOK_ID ="read";

const addBook = () => {
  const uncompletedBook = document.getElementById(UNCOMPLETED_BOOK_ID);
  const inputTitle = document.getElementById('title').value;
  const inputAuthor = document.getElementById('author').value;
  const inputYear = document.getElementById('year').value;
  
  const book = makeBook(inputTitle, inputAuthor, inputYear)
    uncompletedBook.append(book)
}

const makeBook = (title, author, year, isCompleted) => {
  
  const image = document.createElement('img');
  image.setAttribute('src', 'assets/img/book.jpg')
  
  const imageBook = document.createElement('div');
  imageBook.classList.add('image-book')
  imageBook.append(image)
  
  const bookTitle = document.createElement('h3');
  bookTitle.innerText = title;
  
  const authorName = document.createElement('p');
  authorName.innerText = author;
  
  const bookYear = document.createElement('small');
  bookYear.innerText = `Terbit pada : ${year}`;
  
  // const actionButton = document.createElement('div');
  // actionButton.classList.add('action-button');
  
  const detail = document.createElement('div');
  detail.classList.add('detail-book')
  detail.append(bookTitle, authorName, bookYear)
  
  const container = document.createElement('div');
  container.classList.add('my-container');
  container.append(imageBook, detail)
  /*
  const readBook = document.getElementById(UNCOMPLETED_BOOK_ID);
  readBook.append(container)
  readBook.append(createReadButton());*/
  
  if(isCompleted){
        container.append(
           /* createMoveButton(),
            createTrashButton()*/
        );
    } else {
        container.append(createReadButton());
    }
  return container;
}

function createButton(buttonTypeClass, eventListener) {
    const button  = document.createElement('button');
    button.classList.add(buttonTypeClass);
    button.innerText = 'Add to read'
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}

function createReadButton() {
    return createButton("read-button", function (event) {
        addBookToCompleted(event.target.parentElement);
    });
}

function addBookToCompleted(bookElement) {
  const bookCompleted = document.getElementById(COMPLETED_BOOK_ID);
  const unc = document.getElementById(UNCOMPLETED_BOOK_ID)
	const bookTitle = bookElement.querySelector(".detail-book > h3").innerText;
  const bookAuthor = bookElement.querySelector(".detail-book > p").innerText;
  const bookYear = bookElement.querySelector(".detail-book > small").innerText;
 
  const newBook = makeBook(bookTitle, bookAuthor, bookYear);
    
    
    bookCompleted.append(newBook);
    bookElement.remove();
    
} 




















addButton.addEventListener("click", () => {
  modal.classList.toggle("modal-open")
})
closeModal.addEventListener("click", () => {
  modal.style.transition = '1s';
  modal.classList.toggle("modal-open")
})

document.addEventListener("DOMContentLoaded", function () {


   const submitForm = document.getElementById("form");

   submitForm.addEventListener("submit", function (event) {
       event.preventDefault();
       modal.classList.remove("modal-open");
       addBook();
   });


});
