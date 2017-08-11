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
}

Notes.prototype.add = function (note) {
  if(note instanceof Note){
    this.data.unshift(note)
  }else{
    throw new Exception
  }
};

Notes.prototype.toString = function () {
  if(this.data.length === 0){
    return ''
  }else{
    return this.data.join('\n')
  }
  //...
};

module.exports.Note = Note
module.exports.Notes = Notes 