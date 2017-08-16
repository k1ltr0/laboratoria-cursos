function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  var str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() {
  this.data = [];
  this.data.sort();
}

Notes.prototype.add = function (note) {
  if ( note instanceof Note){
    this.data.unshift(note);
  }else{
    return error;
  }
};

Notes.prototype.toString = function () {
  return this.data.join('\n');
};

module.exports.Note = Note;
module.exports.Notes = Notes;