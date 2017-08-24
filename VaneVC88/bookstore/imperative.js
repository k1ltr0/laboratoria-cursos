const booksFile = require('./books.json')

//console.log(JSON.stringify(books, null, 2))

// Buscar libros por nombre.
function getBooksByName (name) {
	const foundBooks = []

	//Iteramos sobre los libros.
	for(let i = 0; i < booksFile.books.length; i++){
		const book = booksFile.books[i]
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()

		//Comprobamos que lowerName este en title
		if (title.includes(lowerName)){
			//Agregamos coincidencias al arreglo
			foundBooks.push(book)
		}	
		return foundBooks
	}
}

// Buscar libros por nombre.
function getBooksTitleByName (name) {
	const foundBooks = []

	//Iteramos sobre los libros.
	for(let i = 0; i < booksFile.books.length; i++){
		const book = booksFile.books[i]
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()

		//Comprobamos que lowerName este en title
		if (title.includes(lowerName)){
			//Agregamos coincidencias al arreglo
			foundBooks.push(book.title)
		}	
		return foundBooks
	}
}

function getBooksTitleBy(key, token){
	const foundBooks = []
	if (key === 'title') {
		//Iteramos sobre los libros.
		for(let i = 0; i < booksFile.books.length; i++){
			const book = booksFile.books[i]
			const title = book[key].toLowerCase()
			const lowerName = token.toLowerCase()

			//Comprobamos que lowerName este en title
			if (title.includes(lowerName)){
				//Agregamos coincidencias al arreglo
				foundBooks.push(book.title)
			}
		}
	} else if (key == 'author'){
		//Iteramos sobre los libros.
		for(let i = 0; i < booksFile.books.length; i++){
			const book = booksFile.books[i]
			const title = book[key].toLowerCase()
			const lowerName = token.toLowerCase()

			//Comprobamos que lowerName este en title
			if (title.includes(lowerName)){
				//Agregamos coincidencias al arreglo
				foundBooks.push(book.title)
			}
		}
	}
	return foundBooks
}

function getBooksTitleByV2(key, token){
	const currentKey = selectKey(key)
	const lowerToken = token.toLowerCase()
	return booksFile.books.
	//filtro libros que cumplan condicion
	filter((book) =>{
		const title = book[currentKey].toLowerCase()
		return title.includes(lowerToken)
	})
	//Obtengo llave title
	.map((book) => book.title)
}

function selectKey (key){
	let currentKey = ''
	if(key === 'title'){
		currentKey = key
	}else if (key === 'author'){
		currentKey = key
	}
}
const foundBooks = getBooksTitleByV2('title'.'Javascript')
console.log(foundBooks)