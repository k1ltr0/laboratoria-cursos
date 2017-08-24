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
  if (note instanceof Note){
      this.data.unshift(note);
  }else{
    throw "Notes is not an instance of Note";
  }
};

Notes.prototype.toString = function () {
  let str = "";
  for ( var i = 0; i < this.data.length; i++){
    if(this.data[i] !== null){
      str += this.data[i].toString() + "\n" ;
    }
  }
  return str;
};
