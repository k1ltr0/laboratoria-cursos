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
  //...
};

Notes.prototype.toString = function () {
  //...
};
