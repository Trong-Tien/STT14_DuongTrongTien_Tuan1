// Bước 1: Tạo đối tượng cho Mark và John với các thuộc tính: full name, mass và height
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // m
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // m
  };
  
  // Bước 2: Tạo phương thức 'calcBMI' để tính BMI cho từng đối tượng và lưu vào thuộc tính 'bmi'
  mark.calcBMI = function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  };
  
  john.calcBMI = function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  };
  
  // Bước 3: So sánh BMI và in kết quả ra màn hình
  if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
  } else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)}).`);
  }
  