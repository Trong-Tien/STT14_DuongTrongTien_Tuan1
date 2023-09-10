// Bước 1: Tạo mảng 'bills' chứa giá trị hóa đơn kiểm tra
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Bước 2: Tạo mảng trống 'tips' và 'totals' để lưu giá trị tip và tổng cộng
const tips = [];
const totals = [];

// Bước 3: Sử dụng vòng lặp for để tính toán tip và tổng cộng cho từng hóa đơn
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// In kết quả ra màn hình
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// Bước 4: Bonus - Tạo hàm 'calcAverage' để tính trung bình của mảng số
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// Bước 4.3: Gọi hàm 'calcAverage' với mảng 'totals' để tính trung bình giá trị tổng cộng
const averageTotal = calcAverage(totals);
console.log("Average Total:", averageTotal);
