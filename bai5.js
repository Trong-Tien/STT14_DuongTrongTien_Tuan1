// Bước 1: Tạo hàm 'calcAverage' để tính điểm trung bình của 3 điểm số
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Bước 2: Sử dụng hàm 'calcAverage' để tính điểm trung bình cho cả Dolphins và Koalas
const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);

// Bước 3: Tạo hàm 'checkWinner' để kiểm tra người chiến thắng
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};

// Bước 4 và 5: Sử dụng hàm 'checkWinner' để xác định người chiến thắng cho Data 1 và Data 2
console.log("Data 1:");
checkWinner(dolphinsAverage1, koalasAverage1);

console.log("Data 2:");
checkWinner(dolphinsAverage2, koalasAverage2);
