// -> Crea tres objetos: 'machine', 'robot' y 'vehicle'
// -> En la definición de `machine` incluye una propiedad `parts`, y dale un
//    array vacío como valor: `[]`
// -> En la definición de `machine` incluye una propiedad 'capabilities', y
//    asígnale un objeto vacío: `{}`
const machine = {parts:[],capabilities:{}}
const robot = {}
const vehicle = {}

// -> Hagamos que el prototipo de tanto `robot` como `vehicle` sea `machine`
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> Qué es `robot.parts`?
claim(robot.parts, []);

// -> Qué es `vehicle.parts`?
claim(vehicle.parts, []);

// -> Qué es `robot.capabilities`?
claim(robot.capabilities, {});

// -> Qué es `vehicle.capabilities`?
claim(vehicle.capabilities, {});

// -> Añadamos 'core' a `parts` del robot
robot.parts.push('core');

// -> Qué es `robot.parts` ahora?
claim(robot.parts, ['core']);

// -> Qué es `vehicle.parts` ahora?
claim(vehicle.parts, ['core']);

// -> Démosle una habilidad al vehículo...
vehicle.capabilities.fly = true;

// -> Qué es `robot.capabilities` ahora?
claim(robot.capabilities,{fly:true});

// -> Qué es `vehicle.capabilities` ahora?
claim(vehicle.capabilities,{fly:true});


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  machine: machine,
  vehicle: vehicle,
  robot:   robot
}
