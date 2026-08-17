//          BIẾN

// Khai báo biến thường chỉ tạo mỗi tên biến, khởi tạo thì gán thêm giá trị ban đầu, thường dùng với 3 từ khóa: var, let, const. Nên đặt tên biến theo quy tắc camelCase
// var : function scope, có thể gán và khai báo lại, có hoisting với giá trị undefined, k nên dùng
var num = 3;
var num = 6;
console.log(num);

// let : block scope, có thể gán nhưng k thể khai báo lại, có hoisting nhưng TDZ, nên dùng
let name = "Nathan";
name = "Messi";
console.log(name);

// const : block scope, k thể gán và khai báo lại, có hoisting nhưng TDZ, ưu tiên dùng
const pi = 3.14;
console.log(pi);


//          KIỂU DỮ LIỆU

// typeof tên_biến : trả về kiểu dữ liệu của 1 biến, gồm các kiểu dữ liệu như: string, number, boolean, undefined, null, object
let fullName;
console.log(`${typeof fullName}`);


//          ÉP KIỂU

// Dùng parseInt(ép kiểu số nguyên), parseFloat(ép kiểu số thực), Number(ép kiểu number)


//          CÁC PHÉP TOÁN TRONG JS

// Cơ bản : gồm các phép như +, -, *, /, %

// Gán : gồm các phép như =, +=, -=, *=, /=, %=

// Tiền tố (prefix) : nhằm tăng/giảm giá trị lên 1 trước rồi gán, hậu tố (postfix) : gán giá trị trước rồi sau đó mới tăng/giảm

// Logic : && (trả về true khi cả 2 đều đúng), || (trả về false khi cả 2 đều sai), ! (phủ định hoặc đảo giá trị)

// So sánh : >, <, >=, <=, == và != (k quan tâm kiểu dữ liệu), === và !== (ss giá trị và kiểu dữ liệu)


//          CÁC PHÉP TOÁN VỚI STRING

// Phép cộng với 1 số : thành 1 chuỗi

// Phép trừ với 1 số : thành 1 số


//          CÁC HÀM TOÁN HỌC

// Math.sqrt(x); : trả về căn bậc 2 của x

// Math.pow(base,exponent); : trả về base ^ exponent

// Math.abs(x); : trả về giá trị tuyệt đối của x

// Math.ceil(x); : làm tròn lên số x

// Math.floor(x); : làm tròn xuống số x

// Math.round(x); : chữ số thập phân đầu tiên >= 5 thì làm tròn lên, k thì làm tròn xuống

// n.toFix(x); : làm tròn số n đến x chữ số thập phân

// Math.min(); : trả về GTNN

// Math.max(); : trả về GTLN

// Number(val) : chuyển val sang số, nếu k chuyển đc thì trả về NaN (Not a Number)

// isNaN(val) : kiểm tra xem val k phải là kiểu số hay k, trả về true nếu k phải

// Number.isNaN(val) : trả về true nếu val có giá trị NaN

// Math.random() * x : sinh ra số random từ 0 -> sát x