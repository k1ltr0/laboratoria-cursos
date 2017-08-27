//Factory es una función que retorna un objeto
// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
// Funciones puras (buscar)
// Funcional, procedural, imperativo, declarativo
// Buscar arrow function scope this 

const book = {
	'title': 'Libro 1',
	'subtitle': 'javascript',
	'author': 'osom author',
	toString: function(){
		return `${this.title} - ${this.subtitle} | ${this.author}`  //buscar porque se ponen esos símbolos al inicio y final, no alcancé a anotarlo
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
		toString: function(){
			return `${this.title} - ${this.subtitle} | ${this.author}`
		}
	}
}

//const b = new Book()
//const b = createBook()
//console.log(JSON.stringify(b, null, 2))

//-----------------------------------------------------------------------------

/*function createBook2(title, subtitle, author, tags = 'placeholder'){
	return {
		title,  // => title: title
		subtitle,
		author,
		toString: function(){
			return `${this.title} - ${this.subtitle} | ${this.author} | ${this.tags}`
		}
	}
}
const b2 = createBook2('Libro 2', 'javascript', 'osom autor')
console.log(JSON.stringify(b2, null, 2))
console.log(b2.toString())
*/

function createBook2(title, subtitle, author, tags = 'placeholder'){
	return {
		title,  // => title: title
		subtitle,
		author,
		toString: function(){
			return `${this.title} - ${this.subtitle} | ${this.author} | ${this.tags}`
		}
	}
}
//const b2 = createBook2('Libro 2', 'javascript', 'osom autor')
//console.log(JSON.stringify(b2, null, 2))
//console.log(b2.toString())

//-----------------------------------------------------------------
//Usando clousure (encapsular algo)
// Manera de hacerlo con arrow function

function createBook3(title, subtitle, author){
	const tmpTitle = title  || 'default'      //se declaran valores por defecto de esta manera
	const tmpSubtitle = subtitle || 'default'
	const tmpAuthor = author || 'default'

	return {
		title: tmpTitle,
		subtitle: tmpSubtitle,
		author: tmpAuthor,
		toString: ()=> {
			return `${tmpTitle} - ${tmpSubtitle} | ${tmpAuthor}`
		}
	}
}
//const b3 = createBook3('Libro 3', 'javascript', 'osom autor')
//console.log(b3.toString())


//---------------------------------------------------------------------------
// Creando un objeto funcional
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/create

const b4 = Object.create({})
console.log(b4)
const b5 = Object.assign(b4, {
	title: 'Libro 5',
	toString: function () { return this.title}
})
//console.log(b5)
//console.log(Object.keys(b5))  //keys retorna las llaves del objeto en forma de arreglo ej [ 'title', 'toString' ]


//Versión con Promesas (código incompleto, pedir a Rodrigo)
const createBookWithTimeout == (author, title, publish_at) => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`${author} - ${title}`)
	}, publish_at)
})

console.log('Create Book')
createBookWithTimeout('Rodrigo', 'Javascript in time', 5000)
.then((result => {

})

