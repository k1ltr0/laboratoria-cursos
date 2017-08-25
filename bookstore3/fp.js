const book = {
	'title' : 'libro1',
	'subtitle' : 'javascript',
	'author': 'osom author',
		toString:function(){
		return `${this.title} - ${this.subtitle} - ${this.author}`
	}
}

function createBook(){
	return{
		'title' : 'libro1',
		'subtitle' : 'javascript',
		'author': 'osom author',
		toString:function(){
			return `${this.title} - ${this.subtitle} - ${this.author}`
		}
	}
}

//const b = createBook()
//console.log(JSON.stringify(b,null,2));

/*--------------------------------*/

function createBook2(title,subtitle,author){
	return {
		title,
		subtitle,
		author,
		toString:function(){
			return `${this.title} - ${this.subtitle} - ${this.author}`
		}

	}
}
const b2 = createBook2('libro 2', 'mastering javascript', '');
//console.log(JSON.stringify(b2,null,2));
//console.log(b2.toString());

function createBook3(title,subtitle,author){
	const tmpTitle = title
	const tmpSubtitle = subtitle
	const tmpAuthor = author

	return{
		title: tmpTitle,
		subtitle: tmpSubtitle,
		author: tmpAuthor,
		toString:() => {
			return `${tmpTitle} - ${tmpSubtitle} | ${tmpAuthor}`
		} 
	}
}
//const b3 = createBook3('libro 3');
//console.log(b3.toString());

/*----------------------------- */
const b4 = Object.create({});
const b5 = Object.assign(b4,{
	'title': 'libro 4',
	toString:function(){
		return this.title
	}
})
console.log(b5);
console.log()
/*----------------------- */
