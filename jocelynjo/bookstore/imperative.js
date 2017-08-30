const booksFile = require('./books.json')

//console.log(JSON.stringify(books, null, 2))

//busqueda por nombre
function getBooksByName (name) {
	const foundBooks = []
	//iteramos sobre los libros
	for ( let i = 0; i < booksFile.books.length; i++) {
		const book = booksFile.books[i]
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()
		//if (book.title.indexOf(name) > -1)
		//comprobamos que lowerName esté en title
		if (title.includes(lowerName)) {
			//agregamos coincidencias al arreglo
			foundBooks.push(book)
		}
		//console.log(JSON.stringify(book, null, 2))
		//console.log('=========================')
	}
	return foundBooks
}

//busqueda por nombre y retornar title
function getBooksTitleByName (name) {
	const foundBooks = []
	//iteramos sobre los libros
	for ( let i = 0; i < booksFile.books.length; i++) {
		const book = booksFile.books[i]

		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()
		//if (book.title.indexOf(name) > -1)
		//comprobamos que lowerName esté en title
		if (title.includes(lowerName)) {

			//agregamos coincidencias al arreglo
			foundBooks.push(book.title)
		}
		//console.log(JSON.stringify(book, null, 2))
		//console.log('=========================')
	}
	return foundBooks
}


function getBooksTitleBy (key, token) {
	const foundBooks = []
	if (key === 'title') {
		for ( let i = 0; i < booksFile.books.length; i++) {
			const book = booksFile.books[i]

			const title = book[key].toLowerCase()
			const lowerName = token.toLowerCase()
			//if (book.title.indexOf(name) > -1)
			//comprobamos que lowerName esté en title
			if (title.includes(lowerName)) {

				//agregamos coincidencias al arreglo
				foundBooks.push(book.title)
			}
			//console.log(JSON.stringify(book, null, 2))
			//console.log('=========================')
		}
	} else if (key === 'author') {
		for (let i = 0; i < booksFile.books.length; i++) {
			const book = booksFile.books[i]
			const title = book[key].toLowerCase()
			const lowerName = token.toLowerCase()
			if (title.includes(lowerName)) {

				//agregamos coincidencias al arreglo
				foundBooks.push(book.title)
			}
		}
	}
	return foundBooks
}

function getBooksTitleByV2 (key, token) {
	const currentKey = selectKey(key)
	const lowerToken = token.toLowerCase()
	booksFile.books.filter((book) => {
		const title = book[key].toLowerCase()
		return title.includes(lowerToken)
	})
}

function selectKey (key) {
	let currentKey = ''
	if (key === 'title') {
		currentKey = key
	} else if (key === 'author') {
		currentKey = key
	}
	return currentKey
}

const foundBooks = getBooksTitleByV2('title', 'Javascript')
console.log(foundBooks)
console.log('===================')
const foundBooks2 = getBooksTitleByV2('author', 'Haverbeke')
console.log(foundBooks2)
