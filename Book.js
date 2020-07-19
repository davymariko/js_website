class Book {
  constructor(title, author, pages, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = 1;
    this.read = false;
  }
  
  readBook(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.pages) {
      alert('Wrong Page Number!!!!');
    } else {
    	this.currentPage = pageNumber;
    	if (this.currentPage == this.pages) {
    		this.read = true;
      	}
    }
  }
}

export { Book };