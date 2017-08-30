const book = {
	'title' : 'Libro 1',
	'subtitle' : 'javascript',
	'author' : 'osom author',
	toString : function (){
		return `${this.title} - ${this.sutitle} | ${this.author}`
	}
}

//console.log(JSON.stringify(book, null, 2))
//console.log(book.toString())

function createBook (){
	return {
	'title' : 'Libro 1',
	'subtitle' : 'javascript',
	'author' : 'osom author',
	toString : function (){
		return `${this.title} - ${this.sutitle} | ${this.author}`
		}
	}
}

const b = createBook()
console.log(JSON.stringify(b, null, 2))



//-----------------------------------------

function createBook2(title, subtitle, author){
	return {
		title, // es lo mismo que title : title (si el valor es del mismo nombre que la variable, se puede escribir así)
		subtitle,
		author,
		toString: function(){
			return `${this.title} - ${this.subtitle} | ${this.author}`
		}
	}
}
const b2 = createBook2('Libro 2','Mastering Javascript', 'Josefina Lonuz')
//console.log(JSON.stringify(b2, null, 2))
//console.log(b2.toString())

//------------------------------------------

function createBook3(title, subtitle, author){
	const tmpTitle = title || 'default'
	const tmpSubtitle = subtitle || 'default'
	const tmpAuthor = author || 'default'

	return {
		title: tmpTitle,
		subtitle: tmpSubtitle,
		author: tmpAuthor,
		toString: () => {
			return `${this.title} - ${this.subtitle} | ${this.author}`
		}
	}
}
const b3 = createBook3('Libro 3')
//console.log(b3.toString())

//-------------------------------------------

//const 4 = {}
const b4 = Object.create({})
console.log(b4)
const b5 = Object.assign(b4,{
	title: 'Libro 5',
	toString: function (){ return this.title}
})

console.log(b5)
console.log(Object.keys(b5))
