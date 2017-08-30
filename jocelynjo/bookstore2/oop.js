const bookList = require('./books.json')
console.log (JSON.stringify(bookList.book[0],null,2))

class Books{
	constructor(isbn, title,subtitle,author,pages,description) {
		this.isbn =isbn
		this.title = title		
		this.subtitle = subtitle
		this.author= author
		this.pages = pages
		this.description = description		
	}
}

class Library{
	constructor(){
		this.books =[]
		this.count = 0
	}

	add(book){
		this.books.push(book)
		this.count ++
	}
	searchBy(key,value){
		const result =[]
		for(let i = 0; i< this.book;i++){
           const elem =this.books[i]
           const elemLower = elem[key].toLowerCase()
           const valueLower = value.toLowerCase()
           if(elemLower.includes(valueLower)){
           	result.push(elem)
           }
		}
		return result
	}
}

const l = new Library()
//lleno libreria

 for (let i= 0;i<data.books.length;i++){
 	const book = data.books[i]
 	console.log(book.title)
    const b = new Book(book.isbn, book,title, book.subtitle,book.author,book.pages,book.description)

    l.add(b)
 }
const result = l.searchBy('title','javascript')
// console.log(JSON.stringify(l, null, 2))
 console.log(JSON.stringify(result, null, 2))