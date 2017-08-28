// -> Declaremos tres objetos: 'machine' 'vehicle' y 'robot'
var machine = {};
var vehicle = {};
var robot = {};

// -> Haz que `machine` sea el prototipo de `vehicle`
// -> Haz que `machine` sea el prototipo de `robot`
robot.__proto__ = machine
vehicle.__proto__ = machine


// -> Qué es `vehicle.motors`?
claim(vehicle.motors, undefined);

// -> Qué es `robot.motors`?
claim(robot.motors,undefined );

// -> Define una propiedad `motors` en `machine` y asígnale el valor `4`
machine.motors = 4

// -> Qué es `vehicle.motors` ahora?
claim(vehicle.motors, 4);

// -> Qué es `robot.motors`?
claim(robot.motors,4);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  machine: machine,
  vehicle: vehicle,
  robot:   robot
}
