import {Pair} from "./pair";
import {
  addFour,
  addOne,
  addThree,
  addTwo,
  Character,
  removeFour,
  removeOne,
  removeThree,
  removeTwo,
  Type
} from "./character";

export function applyArmyScoutTwo(character: Character):Character{
  character.cm +=1;
  character.pp +=2;
  return character;
}

export function removeArmyScoutTwo(character: Character):Character{
  character.cm -=1;
  character.pp -=2;
  return character;
}

export function applyArmyScoutFour(character: Character):Character{
  character.cm +=2;
  character.pp +=4;
  return character;
}

export function removeArmyScoutFour(character: Character):Character{
  character.cm -=2;
  character.pp -=4;
  return character;
}

export function applyEnergyConservationOne(character: Character): Character {
  character.sp += 1;
  character.pp += 2;
  return character;
}

export function removeEnergyConservationOne(character: Character): Character {
  character.sp -= 1;
  character.pp -=2;
  return character;
}

export function applyEnergyConservationTwo(character: Character): Character {
  character.sp += 2;
  character.pp += 4;
  return character;
}

export function removeEnergyConservationTwo(character: Character): Character {
  character.sp -= 2;
  character.pp -=4;
  return character;
}

export function applyEnergyConservationThree(character: Character): Character {
  character.sp += 3;
  character.pp += 6;
  return character;
}

export function removeEnergyConservationThree(character: Character): Character {
  character.sp -= 3;
  character.pp -=6;
  return character;
}


export const scoutSkills: Map<string, Pair<(arg: Character) => Character, (arg: Character) => Character>> =
  new Map([
    ["Never Lost", {first: addTwo, second: removeTwo}],
    ["Covert Maneuver", {first: addFour, second: removeFour}],
    ["Opportunist", {first: addTwo, second: removeTwo}],
    ["Army Scout [1]", {first: applyArmyScoutTwo, second: removeArmyScoutTwo}],
    ["Army Scout [2]", {first: applyArmyScoutFour, second: removeArmyScoutFour}],
    ["The Only Good Bug . . .", {first:addOne, second:removeOne}],
    ["T. K. (Wilderness) [1]", {first: addOne, second:removeOne}],
    ["T. K. (Wilderness) [2]", {first: addTwo, second:removeTwo}],
    ["T. K. (Wilderness) [3]", {first: addThree, second:removeThree}],
    ["T. K. (Forest) [1]", {first: addOne, second:removeOne}],
    ["T. K. (Forest) [2]", {first: addTwo, second:removeTwo}],
    ["T. K. (Forest) [3]", {first: addThree, second:removeThree}],
    ["T. K. (Mountain) [1]", {first: addOne, second:removeOne}],
    ["T. K. (Mountain) [2]", {first: addTwo, second:removeTwo}],
    ["T. K. (Mountain) [3]", {first: addThree, second:removeThree}],
    ["T. K. (Desert) [1]", {first: addOne, second:removeOne}],
    ["T. K. (Desert) [2]", {first: addTwo, second:removeTwo}],
    ["T. K. (Desert) [3]", {first: addThree, second:removeThree}],
    ["T. K. (Swamp) [1]", {first: addOne, second:removeOne}],
    ["T. K. (Swamp) [2]", {first: addTwo, second:removeTwo}],
    ["T. K. (Swamp) [3]", {first: addThree, second:removeThree}],
    ["Energy Conservation [1]", {first: applyEnergyConservationOne, second: removeEnergyConservationOne}],
    ["Energy Conservation [2]", {first: applyEnergyConservationTwo, second: removeEnergyConservationTwo}],
    ["Energy Conservation [3]", {first: applyEnergyConservationThree, second: removeEnergyConservationThree}],
  ])

export const scoutSkillDescriptions = new Map([
  ["Never Lost", "During Prepare Phase can spend 1 RP to remove the Lost condition."],
  ["Covert Maneuver", "Before the party moves into a hex, you may spend 1 RP to look at the hex sheet for the destination without revealing it. You may choose not to move this turn."],
  ["Army Scout [1]", "Your Combat Modifier is 1"],
  ["Army Scout [2]", "Your Combat Modifier is 2"],
  ["The Only Good Bug . . .", "Your Combat Modifier is tripled against bugs. (Min 3)"],
  ["Opportunist", "You can spend 1 RP to change your Scouting Modifier by 1 when selecting an encounter. You may not use this if you do not have a Scouting Modifier."],
  ["T. K. (Wilderness) [1]", "When scouting a hex of Wilderness add one to the scouting roll."],
  ["T. K. (Wilderness) [2]", "When scouting a hex of Wilderness add two to the scouting roll."],
  ["T. K. (Wilderness) [3]", "When scouting a hex of Wilderness add three to the scouting roll."],
  ["T. K. (Wilderness) [3]", "When scouting a hex of Wilderness add three to the scouting roll."],
  ["T. K. (Forest) [1]", "When scouting a hex of Forest add one to the scouting roll."],
  ["T. K. (Forest) [2]", "When scouting a hex of Forest add two to the scouting roll."],
  ["T. K. (Forest) [3]", "When scouting a hex of Forest add three to the scouting roll."],
  ["T. K. (Desert) [1]", "When scouting a hex of Desert add one to the scouting roll."],
  ["T. K. (Desert) [2]", "When scouting a hex of Desert add two to the scouting roll."],
  ["T. K. (Desert) [3]", "When scouting a hex of Desert add three to the scouting roll."],
  ["T. K. (Swamp) [1]", "When scouting a hex of Swamp add one to the scouting roll."],
  ["T. K. (Swamp) [2]", "When scouting a hex of Swamp add two to the scouting roll."],
  ["T. K. (Swamp) [3]", "When scouting a hex of Swamp add three to the scouting roll."],
  ["Energy Conservation [1]", "Increase Stamina by 1"],
  ["Energy Conservation [2]", "Increase Stamina by 2"],
]);
