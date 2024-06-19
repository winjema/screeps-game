var currentDate = new Date().toLocaleTimeString();

console.log("top of main: ", currentDate);

//define my constants
var desiredHarvesterCount = 5;
var unitsMaxLimit = 10;

//Garbage collector (clear memory)
for (let name in Memory.creeps) {
  if (Game.creeps[name] == undefined) {
    delete Memory.creeps[name];
  }
}

//Execute creep actions
for (let name in Game.creeps) {
  var creep = Game.creeps[name];

  //check role
  if (creep.memory.role == "harvester") {
    roleHarvester.run(creep);
  } else if (creep.memory.role == "upgrader") {
    roleUpgrader.run(creep);
  }
}

//Spawn and top up on missing units
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
  return name;
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
  return name;
}

numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == "harvester");
numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == "upgraders");
numberOfUnits = numberOfHarvesters + numberOfUpgraders;
//arrow function to filter creeps to only count harvesters

console.log(numberOfHarvesters);

if (numberofUnits <= unitsMaxLimit) {
  var unitName = undefined;
  if (numberOfHarvesters < desiredHarvesterCount) {
    unitName = spawnHarvester();
  } else {
    unitName = spawnUpgrader();
  }
  if (!(unitName < 0)) {
    console.log("Spawned new creep: " + unitName);
  }
}
