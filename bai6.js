// Bước 1: Tạo hàm 'calcTip' để tính tiền tip dựa trên quy tắc đã cho
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// Bước 2: Tạo một mảng 'bills' chứa dữ liệu test
const bills = [125, 555, 44];

// Bước 3: Tạo một mảng 'tips' chứa giá trị tip cho từng hóa đơn, tính từ hàm 'calcTip'
const tips = bills.map((bill) => calcTip(bill));

// Bước 4: Tạo một mảng 'total' chứa giá trị tổng cộng (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// In kết quả ra màn hình
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);
