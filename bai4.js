// Bước 1: Tính toán tip sử dụng toán tử ba ngôi (ternary operator)
const bill = 275; // Thay đổi giá trị bill ở đây để kiểm tra với các test case khác
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Bước 2: Tạo chuỗi chứa thông tin về bill, tip và total value
const totalValue = bill + tip;
const message = `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`;

// In kết quả ra màn hình
console.log(message);
