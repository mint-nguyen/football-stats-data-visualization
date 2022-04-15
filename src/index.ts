import { CSVFileReader } from "./CSVFileReader";

const matches = new CSVFileReader("football.csv");
matches.read();

const MatchResult = {
  HomeWin: "H",
  AwayWin: "A",
  Draw: "D",
};

let manUnitedWins = 0;
for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
