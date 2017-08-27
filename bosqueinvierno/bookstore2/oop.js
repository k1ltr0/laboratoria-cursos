const data = require('./books.json')//aca llamo a mi json donde estan los datos de los libros
//console.log(JSON.stringify(bookList.books[0], null, 2))//Accedo a la primera posicion del arreglo

class Book {
	constructor(isbn, title, subtitle, author, pages, description/*esta es la forma mas comun pasandole como parametros los valores*/){//inicializa mi clase
		this.isbn = isbn//this es la referencia hacia un elemento
		this.title = title
		this.subtitle = subtitle
		this.author = author
		this.pages = pages
		this.description = description
	}
}

class Library {
	constructor(){
		this.containerBooks = []//variable donde guardaremos nuestros libros
		this.count = 0 //se inicializa en cero y cada vez que arrege un libro se aumentara aca
	}

	add(book){
		this.containerBooks.push(book)
		this.count++

	}

	searchBy(key, value){
		const result = [] //es un arreglo vacio donde se iran guardando los libros que cumplan las condiciones
		for(let i = 0; i < this.count; i++){
			const elem = this.containerBooks[i]//aca sacaremos el elemento con los datos requeridos
			const elemLower = elem[key].toLowerCase()//pasa el titulo buscado a minuscula para poder tener resultado que buscamos
			const valueLower = value.toLowerCase()//pasa el valor buscado a minuscula para poder tener resultado
			if(elemLower.includes(valueLower)/*si incluye el valor se retorno true y lo incluye a mi arreglo result*/){
				result.push(elem)//aca agrego el elemento encontrado en el if
			}
		}
		return result //retorno el arreglo que resulto despues de mi recorrido
	}
}

//creamos nuestra libreria
const l = new Library()

//ahora instanciamos el objeto
const b = new Book()
//console.log(JSON.stringify(b, null, 2))

for(let i = 0; i < data.books.length; i++){
	const book = data.books[i]
	//console.log(book.title)
	const b = new Book(book.isbn, book.title, book.subtitle, book.author, book.pages, book.description)
	//console.log(JSON.stringify(b, null, 2))

	l.add(b)
}
//console.log(JSON.stringify(l, null, 2))

const result = l.searchBy('title', 'javascript')//que me retorne los libros que en su titulo tengan javascript
console.log(JSON.stringify(result, null, 2))