const booksFile = require('./books.json')

//console.log(JSON.stringify(books,null, 2))


//Buscar libros por nombre
function getBooksByTitle (name) {
	const foundBooks = []

	//Iteramos sobre los libros
	for (let i=0; i < booksFile.books.length; i++){
		const book = booksFile.books[i]
		
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()
		//Comprobamos q loqer name este en 
		if(title.includes(lowerName)){
			foundBooks.push(book)
		}
	}
	return foundBooks
}

function getBooksTitleByTitle (name) {
	const foundBooks = []

	//Iteramos sobre los libros
	for (let i=0; i < booksFile.books.length; i++){
		const book = booksFile.books[i]
		
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()
		//Comprobamos q loqer name este en 
		if(title.includes(lowerName)){
			//agregamos coincidencia al arreglo
			foundBooks.push(book.title)
	}

function getBooksTitleBy(key, token) {
	const foundBooks = []

	//Iteramos sobre los libros
	if(key === 'title'){
	for (let i=0; i < booksFile.books.length; i++){
		const book = booksFile.books[i]
		
		const title = book[key].toLowerCase()
		const lowerName = token.toLowerCase()
		//Comprobamos q loqer name este en 
		if(title.includes(lowerName)){
			//agregamos coincidencia al arreglo
			foundBooks.push(book.title)
		}
	}}else if(key === 'author'){
		for (let i=0; i < booksFile.books.length; i++){
		const book = booksFile.books[i]
		
		const title = book[key].toLowerCase()
		const lowerName = token.toLowerCase()
		//Comprobamos q loqer name este en 
		if(title.includes(lowerName)){
			//agregamos coincidencia al arreglo
			foundBooks.push(book.title)
		}
	}
}
	return foundBooks
}

const foundBooks = getBooksTitleBy('title', 'Javascript')
console.log(foundBooks)


function selectKey(key){
	let currentKey = ''
	if(key === 'title'){
		
	}
}