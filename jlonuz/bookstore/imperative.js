const booksFile = require('./books.json')

//console.log(JSON.stringify(books, null, 2));

// Buscar libros por nombre
function getBooksByTitle(title){
	const foundBooks = []
	// itera,os sobre los libros
	for(let i = 0; i < booksFile.books.length; i++){
		const book = booksFile.books[i];

		const title = book.title.toLowerCase();
		const lowerName = name.toLowerCase();

		if(title.includes(lowerName)){
			//agregamos coicidencia 
			foundBooks.push(book)
		}
	}
	return foundBooks;
}

// Buscar libros por nombre y retornar el título
function getBooksTitleByTitle(title){
	const foundBooks = []

	for(let i = 0; i < booksFile.books.length; i++){
		const book = booksFile.books[i];

		const title = book.title.toLowerCase();
		const lowerName = name.toLowerCase();

		if(title.includes(lowerName)){
			foundBooks.push(book.title)
		}
	}
	return foundBooks;
}


function getBooksTitleBy(key,token){
	const foundBooks = []
	if(key === 'title'){
		for(let i = 0; i < booksFile.books.length; i++){
			const book = booksFile.books[i];
			const title = book[key].toLowerCase();
			const lowerName = token.toLowerCase();

			if(title.includes(lowerName)){
				foundBooks.push(book.title)
			}
		}
	} else if(key==='author'){
		for(let i = 0; i < booksFile.books.length; i++){
			const book = booksFile.books[i];
			const title = book[key].toLowerCase();
			const lowerName = token.toLowerCase();

			if(title.includes(lowerName)){
				foundBooks.push(book.title)
			}
		}
	}
	return foundBooks;
}

const foundBooks = getBooksTitleBy('title','Javascript')
console.log(foundBooks)