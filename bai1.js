// Bước 1: Lưu trữ trọng lượng (mass) và chiều cao (height) của Mark và John 
var markMass1 = 78;
var markHeight1 = 1.69; 

var johnMass1 = 92; 
var johnHeight1 = 1.95; 

var markMass2 = 95; 
var markHeight2 = 1.88; 

var johnMass2 = 85; 
var johnHeight2 = 1.76; 

// Bước 2: Tính toán BMI cho cả Mark và John
var markBMI1 = markMass1 / (markHeight1 * markHeight1);
var johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

var markBMI2 = markMass2 / (markHeight2 * markHeight2);
var johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Bước 3: Tạo biến Boolean 'markHigherBMI' để so sánh BMI của Mark và John
var markHigherBMI1 = markBMI1 > johnBMI1;
var markHigherBMI2 = markBMI2 > johnBMI2;

// In kết quả ra màn hình
console.log("Data 1:");
console.log("Mark's BMI is higher than John's BMI (Data 1): " + markHigherBMI1);
console.log("Data 2:");
console.log("Mark's BMI is higher than John's BMI (Data 2): " + markHigherBMI2);