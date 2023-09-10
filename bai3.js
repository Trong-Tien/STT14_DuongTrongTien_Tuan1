// Bước 1: Tính toán điểm trung bình cho từng đội
var dolphinsScore1 = (96 + 108 + 89) / 3;
var koalasScore1 = (88 + 91 + 110) / 3;

var dolphinsScoreBonus1 = (97 + 112 + 101) / 3;
var koalasScoreBonus1 = (109 + 95 + 123) / 3;

var dolphinsScoreBonus2 = (97 + 112 + 101) / 3;
var koalasScoreBonus2 = (109 + 95 + 106) / 3;

// Bước 2: So sánh điểm trung bình và xác định người chiến thắng
if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
  console.log("Data 1: Dolphins win the trophy!");
} else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= 100) {
  console.log("Data 1: Koalas win the trophy!");
} else if (dolphinsScore1 === koalasScore1 && dolphinsScore1 >= 100 && koalasScore1 >= 100) {
  console.log("Data 1: It's a draw for the trophy!");
} else {
  console.log("Data 1: No one wins the trophy.");
}

if (dolphinsScoreBonus1 > koalasScoreBonus1 && dolphinsScoreBonus1 >= 100) {
  console.log("Data Bonus 1: Dolphins win the trophy!");
} else if (koalasScoreBonus1 > dolphinsScoreBonus1 && koalasScoreBonus1 >= 100) {
  console.log("Data Bonus 1: Koalas win the trophy!");
} else if (dolphinsScoreBonus1 === koalasScoreBonus1 && dolphinsScoreBonus1 >= 100 && koalasScoreBonus1 >= 100) {
  console.log("Data Bonus 1: It's a draw for the trophy!");
} else {
  console.log("Data Bonus 1: No one wins the trophy.");
}

if (dolphinsScoreBonus2 > koalasScoreBonus2 && dolphinsScoreBonus2 >= 100) {
  console.log("Data Bonus 2: Dolphins win the trophy!");
} else if (koalasScoreBonus2 > dolphinsScoreBonus2 && koalasScoreBonus2 >= 100) {
  console.log("Data Bonus 2: Koalas win the trophy!");
} else if (dolphinsScoreBonus2 === koalasScoreBonus2 && dolphinsScoreBonus2 >= 100 && koalasScoreBonus2 >= 100) {
  console.log("Data Bonus 2: It's a draw for the trophy!");
} else {
  console.log("Data Bonus 2: No one wins the trophy.");
}
