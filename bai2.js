// Bước 1: Lưu trữ trọng lượng (mass) và chiều cao (height) của Mark và John trong biến
var markMass1 = 78; 
var markHeight1 = 1.69; 

var johnMass1 = 92; 
var johnHeight1 = 1.95; 

// Bước 2: Tính toán BMI cho cả Mark và John
var markBMI1 = markMass1 / (markHeight1 * markHeight1);
var johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// Bước 3: So sánh BMI và in kết quả ra màn hình
if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's BMI (${johnBMI1.toFixed(1)})!`);
} else if (johnBMI1 > markBMI1) {
  console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's BMI (${markBMI1.toFixed(1)})!`);
} else {
  console.log("Mark and John have the same BMI.");
}
