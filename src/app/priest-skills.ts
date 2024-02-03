import {Pair} from "./pair";
import {
  addFive,
  addFour,
  addOne,
  addThree,
  addTwo,
  Character,
  removeFive,
  removeFour,
  removeOne,
  removeThree,
  removeTwo
} from "./character";

export const priestSkills: Map<string, Pair<(arg: Character) => Character, (arg: Character) => Character>> =
  new Map([
    ["Trained Healer", {first: addOne, second: removeOne}],
    ["Solitude of Faith", {first: addFour, second: removeFour}],
    ["Blessings", {first: addOne, second: removeOne}],
    ["Preacher", {first: addOne, second: removeOne}],
    ["The Will of Linus", {first: addThree, second: removeThree}],
    ["Elevate Privileges", {first: addFive, second: removeFive}],
    ["Oh Fair Algorithmia! Oh Shining Cloud!", {first: addTwo, second: removeTwo}],
  ])
