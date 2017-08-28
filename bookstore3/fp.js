const book = {
	'title': 'Libro 1',
	'subtitle': 'javascript',
	'author': 'osom author',
	toString: function() {
		return `${this.title} - ${this.subtitle} | ${this.author}`
	}
}

//console.log(JSON.stringify(book, null, 2))
//console.log(book.toString())
//console.log(book)

function createBook(){
	return {
		'title': 'Libro 1',
		'subtitle': 'javascript',
		'author': 'osom author',
		toString: function() {
			return `${this.title} - ${this.subtitle} | ${this.author}`
		}
	}
}

//const b = new Book()
const b = createBook()
console.log(JSON.stringify(b, null, 2))

function createBook2 (title, subtitle = 'placeholder', author = 'placeholder') {
	return {
		title, //title.title
		subtitle,
		author,
		toString: function () {
			return `${this.title} - ${this.subtitle} | ${this.author}`
		}
	}
}

const b2 = createBook2('libro2', 'Mastering Javascript', 'Yo mismo')
console.log(JSON.stringify(b2, null, 2))

//----------------------------------

function createBook3 (title, subtitle, author){
	const tmpTitle = title || 'default'
	const tmpSubtitle = subtitle || 'default'
	const tmpAuthor = author || 'default',

	return{
		title: tmpTitle,
		subtitle: tmpSubtitle,
		author: tmpAuthor,
		toString: () => {
			return `${tmpTitle} - ${tmpSubtitle} | ${tmpAuthor}`
		}
	}
}

const b3 = createBook3('Libro 3')
console.log(b3.toString())

//----------------------
const b4 = Object.create({})
console.log(b4)
const b5 = Object.create({
	title: 'Libro 5',
	toString: function() { return this.title }
})
console.log(b5)
console.log(Object.keys(b5))