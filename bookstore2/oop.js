const bookList = require('./books.json')

//console.log(JSON.stringify(bookList[0], null, 2))

class Book{
	constructor (isbn, title, subtitle, author, pages, description) {
		this.isbn = isbn
		this.title = title
		this.subtitle = subtitle
		this.author = author
		this.pages = pages
		this.description = description
	}
}

class Library {
	constructor () {
		this.container = []
	}

	add(book) {
		this.container.push(book)
		this.count++
	}

	searchBy(key, value){
		const result = []
		for(let i = 0; i<this.count;i++){
			const elem = this.container[i];
			const elemLower = elem[key].toLowerCase()
			const ValueLower = value.toLowerCase()
			if(elem[key].includes(value)){
				result.push(elem)
			}
		}
		return result
	}
}

const l = new Library()

//console.log(JSON.stringify(b, null, 2))

for (let i=0; i< bookList.books.length; i++){
	const book = bookList.books[i]
	console.log(book.title)
	const b = new Book(
		book.isbn,
		book.title,
		book.subtitle,
		book.author,
		book.pages,
		book.description
		)
	l.add(b)
	console.log(JSON.stringify(b, null, 2))
}

const result = l.searchBy('title', 'javascript')

