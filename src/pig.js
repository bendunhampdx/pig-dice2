export function Player(variable2, variable) {
  this.name = variable2;
  this.currentTotal = [];
  this.totalPoints = variable;
}

Player.prototype.dice = function() {
  let number = Math.floor((Math.random() * 6) + 1);
  return number;
} 

Player.prototype.roll = function(number) {
  if (number === 1) {
    return true
  } else {
  return false
  }
};