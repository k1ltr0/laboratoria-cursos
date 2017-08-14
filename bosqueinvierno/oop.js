function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}
//Convierte note en un string con este formato:
// [X] : Mon Jun 12 2017 : mundo
Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() {
  this.data = [];

}

Notes.prototype.add = function (note) {
  if(note instanceof Note){   //si note es una instancia de Note, 
    this.data.unshift(note)   //va agregando en pos 0 (this.data) a note
  } else {
    throw excepcion; // si no, bota error
  }
};

Notes.prototype.toString = function () {
  //...  itera en cada nota
  // retornar una línea por nota
  //return this.data.join('</br>') (si imprimo en consola no me sirve br)
  return this.data.join('\n'); //uno todo lo que esta en el array y no imprimo con saltos de línea por cada nota
};
module.exports = Note;
module.exports = Notes;

//Exportar constructores 
// https://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor

//throw
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/throw

/*Requisitos
» Notes.prototype.add debe botar error (throw) si el argumento (note) no es una instancia de Note.
» Notes.prototype.add debe añadir nuevas notas al principio de this.data, no al final.
» La implementación de Notes.prototype.toString debe iterar sobre las notas e invocar toString en cada nota y así ir concatenando el resultado. El string que retornes debe contener una línea para cada nota (ver ejemplo).
» El método Notes.prototype.toString debe listar las notas ordenadas por fecha de creación descendente, la última añadida debe aparecer primero.
» No olvides exportar los constructores Note y Notes. 

## Ejemplo
Una vez implementado el ejercicio, alguien que importe tu módulo debería de poder hacer lo siguiente:
const note1 = new Note('hola');
const note2 = new Note('mundo');
const notes = new Notes();
     
notes.add(note1);
notes.add(note2);
console.log(notes.toString());
// [ ] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola
note1.completed = true;
console.log(notes.toString());
// [ ] | Mon Jun 12 2017 | mundo
// [X] | Mon Jun 12 2017 | hola     
*/
