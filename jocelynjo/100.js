// -> Define un constructor 'Robot'
// -> Crea dos instancias de Robot: 'robby' y 'cranky'
// -> Tanto robby como cranky deben tener 'parts' y 'capabilities', éstas deben
//    ser arrays vacíos al inicio

class Robot{
	constructor(){
		this.parts=[]// no menciona que debe ir en el constructor, intente agregando las dos con prototype pero reclamos que no estaba vacia al inicio
	}
}

let robby = new Robot();
let cranky = new Robot();

Robot.prototype.capabilities = []
//Robot.prototype.parts = []  

// -> Haz claim del resultado de robby.parts
claim(robby.parts, []);
// -> Haz claim del resultado de cranky.parts
claim(cranky.parts, []);
// -> Haz claim del resultado de robby.capabilities
claim(robby.capabilities, []);
// -> Haz claim del resultado de cranky.capabilities
claim(cranky.capabilities, []);

robby.parts.push('core');
robby.capabilities.push('fly');
// -> Añade 'core' a robby.parts, cranky.parts debería tener todavía un arreglo vacío
// -> Añade 'fly' a robby.capabilities, después de esto cranky.capabilities debe
//    también tener 'fly' sin añadírselo directamente, así que esta propiedad
//    debe ser compartida.

__

// -> Haz claim del resultado de robby.parts
claim(robby.parts, ['core']);
// -> Haz claim del resultado de cranky.parts
claim(cranky.parts, []);
// -> Haz claim del resultado de robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Haz claim del resultado de cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot:  Robot,
  robby:  robby,
  cranky: cranky
}
