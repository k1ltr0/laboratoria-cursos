const booksFile = require('./books.json')

//console.log(JSON.stringify(books, null, 2))//me permite imprimir un objeto literal, el 2 es cuantos espacios quiero correr
//buscar libros por nombres
//esta es la forma imperativa
function getBooksByName(name){
	const foundBooks = []
	
	for ( let i = 0; i < booksFile.books.length; i++) {//voy a recorrer mi arreglo que esta guardado dentro de mi objeto
		const book = booksFile.books[i]//voy valor a mi variable creada con la posicion [i]
		//console.log(JSON.stringify(book, null, 2))//aca imprimo mi var creada
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()
		//if (book.title.indexOf(name) > -1)
		if (title.includes(lowerName)) {
			foundBooks.push(book)//aca busco todos los libros
		}
	}
		//console.log(JSON.stringify(book, null, 2))
		//console.log('@@@@@@@@@@@@@')

		return foundBooks
	}
//const foundBooks = getBooksByName("JavaScript")
//console.log(foundBooks)

function getBooksTitleByName(name){
	const foundBooksTitle = []
	
	for ( let i = 0; i < booksFile.books.length; i++) {//voy a recorrer mi arreglo que esta guardado dentro de mi objeto
		const book = booksFile.books[i]//voy valor a mi variable creada con la posicion [i]
		//console.log(JSON.stringify(book, null, 2))//aca imprimo mi var creada
		const title = book.title.toLowerCase()
		const lowerName = name.toLowerCase()
		//if (book.title.indexOf(name) > -1)
		if (title.includes(lowerName)) {
			foundBooksTitle.push(book.title)//aca busco los libros por su titulo
		}
	}
		//console.log(JSON.stringify(book, null, 2))
		//console.log('@@@@@@@@@@@@@')

		return foundBooks
	}

//const foundBooksTitle = getBooksTitleByName("JavaScript")
//console.log(foundBooksTitle)

function getBooksTitleBy(key, token){
	const foundBooks = []
	if(key === 'name'){
		for ( let i = 0; i < booksFile.books.length; i++) {//voy a recorrer mi arreglo que esta guardado dentro de mi objeto
		const book = booksFile.books[i]//voy valor a mi variable creada con la posicion [i]
		//console.log(JSON.stringify(book, null, 2))//aca imprimo mi var creada
		const title = book[key].toLowerCase()
		const lowerName = token.toLowerCase()
		//if (book.title.indexOf(name) > -1)
		if (title.includes(lowerName)) {
			foundBooks.push(book.title)//aca busco los libros por su titulo
			}
		}
	}else if(key === 'author'){
		for ( let i = 0; i < booksFile.books.length; i++) {//voy a recorrer mi arreglo que esta guardado dentro de mi objeto
		const book = booksFile.books[i]//voy valor a mi variable creada con la posicion [i]
		//console.log(JSON.stringify(book, null, 2))//aca imprimo mi var creada
		const title = book[key].toLowerCase()
		const lowerName = token.toLowerCase()
		//if (book.title.indexOf(name) > -1)
		if (title.includes(lowerName)) {
			foundBooks.push(book.title)//aca busco los libros por su titulo
				}
		}
	return foundBooks
	}
}
//const foundBooks = getBooksTitleBy('title', 'JavaScript')
//console.log(foundBooks)
//const foundBooks_2 = getBooksTitleBy('author', 'JavaScript')
//console.log(foundBooks_2)

function getBooksTitleByV2(key, token){
	const currentKey = selectKey(key)
	const lowerToken = token.toLowerCase()
	return booksFile.books.filter((book)=>{
		const title = book[currentKey].toLowerCase()
		return title.includes(lowerToken)
	}).map((book)=> book.title)
}

function selectKey(key){
	let currentKey = ''
	if(key === 'title'){
		currentKey = key
	}else if (key === 'author'){
		currentKey = key
	}
	return currentKey
}
const foundBooks = getBooksTitleByV2('title', 'Javascript')
console.log(foundBooks)
console.log('#######################')
const foundBooksDos = getBooksTitleByV2('author', 'Haverbeke')
console.log(foundBooksDos)


