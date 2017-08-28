// -> Define un constructor 'Robot'
// -> Dentro de la función `Robot` asigna una propiedad 'motors' en 'this',
//    y dale el valor `2` a `motors`
// -> Creaan una instancia de `Robot` llamada `robby`

class Robot{
	constructor(){
		this.motors = 2
	}
}

let robby = new Robot()

// -> Cuál es el resultado de `(robby instanceof Robot)`?
claim((robby instanceof Robot), true);

// -> Qué es `robby.motors`?
claim(robby.motors, 2);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot: Robot,
  robby: robby
}
