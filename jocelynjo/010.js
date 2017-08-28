// -> Crea un objeto llamado 'robot' usando un objeto literal
// -> robot debe tener una propiedad 'smart' con el valor true
const robot = {smart : true}

// -> Haz claim de robot.smart
claim(robot.smart, true);

// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  robot: robot
}
