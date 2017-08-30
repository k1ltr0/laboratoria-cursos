const data = require('./books.json') 
console.log(JSON.stringify(data.books[0],null, 2)) 

class Book {
	constructor (isbn, title, subtitle, author, pages, description){
		this.isbn = isbn
		this.title = title
		this.subtitle = subtitle
		this.author = author
		this.pages = pages
		this.description = description
	}
}

class Library {
	constructor (){
		this.container = []
		this.count = 0
	}

	add (book){
		this.container.push(book)
		this.count++
	}

	searchBy(key, value){
		const result = []
		for(let i = 0; i < this.count; i++){
			const elem = this.container[i]
			const elemLower = elem[key].toLowerCase()
			const valueLower = value.toLowerCase()

			if(elemLower.includes(valueLower)){
				result.push(elem)
			}
		}
		return result
	}
}


// LIBRERIA

const l = new Library ()
// Lleno la librería
for(let i = 0; i < data.books.length; i++){
	const book = data.books[i]
	const b = new Book(book.isbn, book.title, book.subtitle, book.author, book.pages, book.description)
	
	l.add(b)
}

const result = l.searchBy('title', 'programming')

console.log(JSON.stringify(l, null, 2))
