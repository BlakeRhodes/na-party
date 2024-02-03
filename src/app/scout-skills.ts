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
  ])
