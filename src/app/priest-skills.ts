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
    ["Oh Fair Algorithmia!", {first: addTwo, second: removeTwo}],
  ])

export const priestSkillDescriptions = new Map([
  ["Trained Healer", "Spend an access token to restore 1d6 HP or 1 SP"],
  ["Solitude of Faith", "You count as two characters when standing watch"],
  ["Blessings", "Spend 1 R to remove a character's Despair, restore 1 WP"],
  ["Preacher", "When Persuading you get +1 and Will Power spend adds 2 to the roll."],
  ["The Will of Linus", "Spend 1 Access Token and 1 R to re-roll a single die when a one is rolled. The result is the Will of Linus and must be accepted."],
  ["Elevate Privileges", "Gain one Access Token"],
  ["Oh Fair Algorithmia!", "Spend 3 Access Tokens to restore 1 to each stat except Luck"]
]);
