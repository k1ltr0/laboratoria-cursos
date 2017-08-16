function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};

  
function Notes() {
  this.data = [];
  this.data.sort();
}

Notes.prototype.add = function (note) {
  //...Acá va el código
  if(note instanceof Note){
    this.data.unshift(note);
  }else{
    throw excepcion;
  }
};

Notes.prototype.toString = function () {
  //...Acá va el código
  return this.data.join('\n');
};
module.exports.Note = Note;
module.exports.Notes = Notes;

