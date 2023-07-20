// object

var assistantManager = {
  movement: 3,
  socialSkill: 30,
  streetSmarts: 30,
  health: 40,
  greeting: "Let's make some money",
};

assistantManager.nextAchievement = "get promoted";

assistantManager["age"] = 18;

var arrOfKeys = [
  "movement",
  "socialSkill",
  "streetSmarts",
  "health",
  "greeting",
  "nextAchievement",
  "age",
];
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(assistantManager[arrOfKeys[i]]);
}
