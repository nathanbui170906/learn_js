//          ARRAY

// Mảng là tập hợp các phần tử có thể cùng hoặc khác kiểu dữ liệu (Number, string, array, object, boolean), có index bắt đầu từ 0

// 1. Khai báo mảng
// Cách 1 : khai báo mảng rỗng
let arr1 = [];
console.log(arr1);

// Cách 2 : khai báo mảng có sẵn các phần tử
let arr2 = [38,75,"Ha Tinh","Hue"];
console.log(arr2);

// Cách 3 : dùng object Array và constructor
let arr3 = new Array();
console.log(arr3);

let arr4 = new Array("Messi",10,"GOAT");
console.log(arr4);

let arr5 = new Array(5);
console.log(arr5);


let listOfName = ["Nathan","Nhat","Win"];
// 2. Truy xuất mảng
console.log(listOfName[0]);

// 3. Thuộc tính length
console.log(listOfName.length);

// 4. Gán, thay đổi giá trị cho mảng qua index
console.log(listOfName);
listOfName[1] = "Bui";
console.log(listOfName);

// 5. Duyệt mảng
// Cách 1 : dùng vòng lặp for thường, có thể xem và sửa giá trị
for (let i = 0;i < listOfName.length;i++) {
    console.log(listOfName[i]);
}

// Cách 2 : dùng vòng for ... of, chỉ xem nhưng k sửa đc giá trị
for (let ele of listOfName) {
    console.log(ele);
}

// 6. arr1.concat(arr2) : nối arr2 vào arr1 và trả về 1 mảng mới
let newArr1 = arr2.concat(arr4);
console.log(newArr1);

// 7. arr.push(x) : thêm phần tử x vào cuối mảng arr
newArr1.push(36);
console.log(newArr1);

// 8. arr.unshift(x) : thêm phần tử x vào đầu mảng arr
newArr1.unshift(18);
console.log(newArr1);

// 9. arr.pop() : xóa phần tử cuối cùng của mảng
let rm1 = newArr1.pop();
console.log(newArr1);

// 10. arr.shift() : xóa phần tử đầu tiên của mảng
let rm2 = newArr1.shift();
console.log(newArr1);

// 11. arr.slice(startIdx,endIdx) : tạo bản sao của mảng arr từ vị trí startIdx đến endIdx, lưu sang 1 vùng nhớ mới, nếu để trống thì lấy hết mảng
let newArr2 = newArr1.slice(2,5);
console.log(newArr2);

// 12. arr.includes(x) : kiểm tra xem mảng arr có chứa phần tử x hay k, trả về true nếu có và ngược lại
console.log(newArr2.includes("Messi"));

// 13. arr.indexOf(x) : trả về vị trí đầu tiên xuất hiện của x trong mảng, nếu k tìm thấy thì trả về -1
console.log(newArr2.indexOf(36));

// 14. arr.lastIndexOf(x) : trả về vị trí cuối cùng xuất hiện của x trong mảng, nếu k tìm thấy thì trả về -1
console.log(newArr2.lastIndexOf("Ha Tinh"));

// 15. arr.reverse() : đảo ngược thứ tự các phần tử trong mảng arr gốc
let newArr3 = newArr1.slice().reverse(); // Tạo bản sao của mảng và đảo ngược, giữ nguyên mảng gốc
console.log(newArr3);

// 16. arr.join(separator) : nối các phần tử trong mảng thành chuỗi theo ký tự phân tách separator (nếu bỏ trống thì mặc định là dấu ,)
console.log(newArr3.join("="));

// 17. arr.splice(start,delCnt,item1,item2,...,itemn) : loại bỏ các phần tử và thêm các item từ vị trí start của mảng (nếu start < 0 thì tính từ cuối mảng), delCnt là số phần tử bị loại bỏ
newArr3.splice(3,1,36,69);
console.log(newArr3);

// 18. Toán tử spread (...)
// Tạo bản sao của mảng
let newArr4 = [...newArr3];
console.log(newArr4);

// Truyền đối số vào hàm
let sum = (a,b,c) => {
    return a + b + c;
};
let nums = [1,2,3];
let res = sum(...nums);
console.log(res);

// Kết hợp mảng
let combinedArr = [...arr4,...listOfName];
console.log(combinedArr);

// Tạo mảng mới với thêm phần tử
let newNums = [...nums,4];
console.log(newNums);

// Chuyển iterable thành mảng
let myName = "nathan";
let chars = [...myName];
console.log(chars);

// 19. arr.sort(compareFunction) : sắp xếp mảng
// Khi k truyền compareFunction : so sánh lần lượt ký tự đầu đến các ký tự phía sau theo thứ tự tăng dần trong bảng mã UNICODE, nếu khác sẽ dừng so sánh

// Khi truyền : nếu trả về giá trị < 0 => a đặt trước b, nếu trả về 0 => thứ tự a và b k đổi, nếu trả về giá trị > 0 => b đặt trước a


let numbers = [1,2,3,4,5,6,7,8,9,10];
// 20. arr.reduce(funtion(accumulator,curVal,curIdx,arr),initialVal) : dựa trên hàm xử lý -> tính toán và trả về 1 giá trị duy nhất, accumulator (giá trị đc cập nhật sau mỗi lần gọi hàm), curVal (giá trị hiện đang xử lý trong mảng), curIdx (chỉ số của phần tử đang xử lý), arr (mảng đang đc reduce), initialVal (giá trị khởi tạo, nếu bỏ trống thì lấy phần tử đầu tiên của mảng và bắt đầu thực hiện từ phần tử thứ 2, nếu mảng trống mà k có initialVal thì reduce báo lỗi)

// Bài toán tính tổng các phần tử trong mảng
let result1 = numbers.reduce(
    (accumulator,curVal,curIdx,numbers) => {
        return curVal + accumulator;
    },
    0
);
console.log(result1);

// Bản rút gọn
let result2 = numbers.reduce(
    (a,b) => a + b,
    0
);
console.log(result2);

// 21. arr.filter(function(curVal,curIdx,arr)) : dựa trên hàm xử lý, tạo 1 mảng mới chứa các phần tử thỏa mãn điều kiện đc xác định bởi hàm, curVal (giá trị hiện đang xử lý trong mảng), curIdx (chỉ số của phần tử đang xử lý), arr (mảng đang đc duyệt)

// Bài toán tìm số chẵn trong mảng
let result3 = numbers.filter(
    (curVal,curIdx,numbers) => {
        return curVal % 2 === 0;
    }
);
console.log(result3);