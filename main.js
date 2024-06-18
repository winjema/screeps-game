var currentDate = new Date().toLocaleTimeString();

console.log("top of main: ", currentDate);

function spawnHarvester() {
  console.log("creating Harvester");
  var name = Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, CARRY, MOVE],
    undefined,
    {
      role: "harvester",
      working: false,
    }
  );
}

function spawnUpgrader() {
  console.log("creating Upgrader");
  var name = Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, CARRY, MOVE],
    undefined,
    {
      role: "upgrader",
      working: false,
    }
  );
}
var name = undefined;

var minimumNumberOfHarvesters = 5;
numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == "harvester");
//arrow function to filter creeps to only count harvesters

console.log(numberOfHarvesters);

if (numberOfHarvesters < minimumNumberOfHarvesters) {
  spawnHarvester();
} else {
  spawnUpgrader();
}
