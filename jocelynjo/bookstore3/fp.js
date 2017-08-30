//de manera funcional 


function createBook(){
	return {
		'title':'Libro 1',
		'subtitle':'ja',
		'author':'oso',
		toString : function (){
			return `${this.title} ${this.subtitle} | ${this.author}`
		}
	}
}
console.log(JSON.stringify(book,null,2))
console.log(book.toString())
console.log(book)

function createBook2(title,subtitle ='placeholder',author = 'placeholder'){
	return {
		title,
		subtitle,
		author,
		toString:function(){
			return `${this.title} - ${this.subtitle} | ${this.author}`
		}
		/* toString:()=> ${this.title} - ${this.subtitle} | ${this.author}`*/
	}
}

const b2 = createBook2('libre2','Mastering Javascript', 'yo')
console.log (JSON.stringify(b2,null,2))
console.log(b2.toString())
//////////////////
//para que funcione =>
function createBook3(title,subtitle,author){
	const tmpTitle = title || 'default'// tiene valor si no tiene pon el por defecto 
	const tmpSubtitle = subtitle || 'default'
	const tmpAuthor =author || 'default'

	return {
		title:tmpTitle,
		subtitle:tmpSubtitle,
		author:tmpAuthor,
		toString :()=>{
			return `${tmpTitle}-${tmpSubtitle}| ${tmpAuthor}`
		}
	}
}

const b3 = createBook3('libro 3')
console.log(b3.toString())

/////////////////////


const b4 = Object.create({})
const b5 = Object.assign(b4,{
	title: 'Libro 5',
	toString:function(){return this.title}
})
console.log(b5)
console.log(Object.key(b5))