import {Pair} from "./pair";
import {
  addFive,
  addFour,
  addOne,
  addSix,
  addThree,
  addTwo,
  Character, removeFive,
  removeFour, removeOne,
  removeSix,
  removeThree,
  removeTwo
} from "./character";


export function applyKillerOne(character:Character): Character {
  character.cm++;
  character.pp++;
  return character;
}

export function removeKillerOne(character:Character): Character {
  character.cm--;
  character.pp--;
  return character;
}

export function applyKillerTwo(character:Character): Character {
  character.cm += 2;
  character.pp += 2;
  return character;
}

export function removeKillerTwo(character:Character): Character {
  character.cm -= 2;
  character.pp -= 2;
  return character;
}

export function applyResourcefulOne(character: Character): Character {
  character.rp += 1;
  character.pp +=2;
  return character;
}

export function removeResourcefulOne(character: Character): Character {
  character.rp -= 1;
  character.pp -=2;
  return character;
}

export function applyResourcefulTwo(character: Character): Character {
  character.rp += 2;
  character.pp += 4;
  return character;
}

export function removeResourcefulTwo(character: Character): Character {
  character.rp -= 2;
  character.pp -=4;
  return character;
}

export function applyResourcefulThree(character: Character): Character {
  character.rp += 3;
  character.pp +=6;
  return character;
}

export function removeResourcefulThree(character: Character): Character {
  character.rp -= 3;
  character.pp -=6;
  return character;
}

export const hunterSkills: Map<string, Pair<(arg: Character)=>Character, (arg: Character)=>Character>> = new Map([
  ["Survival [1]", {first: addTwo, second:removeTwo}],
  ["Survival [2]", {first: addFour, second:removeFour}],
  ["Survival [3]", {first: addSix, second:removeSix}],
  ["Harvest the Land", {first:addFour, second:removeFour}],
  ["Don't Ask",{first:addThree, second: removeThree}],
  ["Rain or Shine",{first:addOne, second:removeOne}],
  ["Gatherer",{first: addFive, second: removeFive}],
  ["Killer [1]",{first:applyKillerOne, second:removeKillerOne}],
  ["Killer [2]",{first:applyKillerTwo, second:removeKillerTwo}],
  ["Resourceful [1]",{first:applyResourcefulOne, second:removeResourcefulOne}],
  ["Resourceful [2]",{first:applyResourcefulTwo, second:removeResourcefulTwo}],
  ["Resourceful [3]",{first:applyResourcefulThree, second:removeResourcefulThree}],
])

export const hunterSkillDescriptions = new Map([
  ["Survival [1]", "You can spend 1 R to add +1 to Foraging Rolls, this may be done after the roll is made."],
  ["Survival [2]", "You can spend 1 R to add +2 to Foraging Rolls, this may be done after the roll is made."],
  ["Survival [3]", "You can spend 1 R to add +3 to Foraging Rolls, this may be done after the roll is made."],
  ["Harvest the Land", "When your degree of success is 2+  on a Forage Roll gain one ration, max 6"],
  ["Don't Ask", "If the party has ran out of rations you may spend 2 RP to gain a ration."],
  ["Rain or Shine", "Spend 1 RP during Planning phase to ignore weather effects this turn."],
  ["Gatherer", "Spend 2 RP when making a loot role, then add one to the result. This may only be done before making the roll."],
  ["Killer [1]", "Increase your Combat Modifier by 1"],
  ["Killer [2]", "Increase your Combat Modifier by 2"],
  ["Resourceful [1]", "Increase Resourcefulness by 1"],
  ["Resourceful [2]", "Increase Resourcefulness by 2"],
  ["Resourceful [3]", "Increase Resourcefulness by 3"],
]);
