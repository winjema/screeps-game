var currentDate = new Date().toLocaleTimeString();

console.log("top of main: ", currentDate);

var minimumNumberOfHarvesters = 5;
var numberOfHarvesters = _.sum(
  Game.creeps,
  (c) => c.memory.role == "harvester"
);
//arrow function to filter creeps to only count harvesters

console.log(numberOfHarvesters);
