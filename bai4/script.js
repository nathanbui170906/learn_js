//          STRING

let name = "Nhat Bui Minh";

// 1. s.length : trả về độ dài chuỗi
console.log(name.length);

// 2. s.slice(startIdx,endIdx) : cắt chuỗi từ vị trí startIdx đến sát endIdx, startIdx > endIdx thì xem như chuỗi rỗng, chỉ số âm thì đếm từ cuối chuỗi
console.log(name.slice(0,4));

// 3. s.substring(startIdx,endIdx) : cắt chuỗi con từ vị trí startIdx đến sát endIdx, startIdx > endIdx thì đảo ngược, chỉ số âm thì chuyển thành 0 và nếu startIdx > endIdx thì đảo ngược
console.log(name.substring(5,8));


let quote = "     Discipline > Motivation     ";

// 4. s.trim() : loại bỏ khoảng trắng ở 2 đầu chuỗi, s.trimEnd()/s.trimStart() : loại bỏ khoảng trắng ở cuối/đầu chuỗi
console.log(quote.trim());

// 5. s.concat(s1,s2,...,sn) : ghép n chuỗi lại với chuỗi s
let firstName = "Nathan";
let lastName = "Bui";
console.log(firstName.concat(" ",lastName));

// 6. s.toUpperCase()/s.toLowerCase() : chuyển toàn bộ chuỗi s sang viết hoa/thường
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// 7. s.charAt(idx) : trả về ký tự nằm ở vị trí idx đc truyền vào
console.log(name.charAt(9));


let slogan = "study, study, study forever";

// 8. s.replace(oldVal,newVal) : thay thể chuỗi oldVal bằng chuỗi newVal, nếu thêm /oldVal/g thì thay thế tất cả oldVal
console.log(slogan.replace("study","sleep"));
console.log(slogan.replace(/study/g,"sleep"));

// 9. s.repeat(cnt) : lặp chuỗi s cnt lần
console.log((name.concat(' ')).repeat(4));

// 10. s.indexOf(searchVal,fromIdx) : trả về vị trí xuất hiện đầu tiên của searchVal, fromIdx là vị trí bắt đầu tìm kiếm (nếu bỏ trống thì tìm từ đầu chuỗi), nếu k tìm thấy thì trả về -1
console.log(name.indexOf("Nhat"));
console.log(name.indexOf("Nhat",2));

// 11. s.lastIndexOf(searchVal,endIdx) : trả về vị trí xuất hiện cuối cùng của searchVal, endIdx là vị trí bắt đầu tìm kiếm (nếu bỏ trống thì tìm hết chuỗi), nếu k tìm thấy thì trả về -1
console.log(name.lastIndexOf("Bui"));
console.log(name.lastIndexOf("Bui",name.length));

// 12. s.includes(searchVal,frommIdx) : kiểm tra xem searchVal có trong chuỗi s hay k, trả về true nếu có và ngược lại, fromIdx là vị trí bắt đầu tìm kiếm (nếu bỏ trống thì tìm hết chuỗi)
console.log(name.includes("x"));

// 13. s.startsWith(searchVal,startIdx) : kiểm tra chuỗi s có bắt đầu bằng searchVal hay k, trả về true nếu có và ngược lại, fromIdx là vị trí bắt đầu tìm kiếm (nếu bỏ trống thì tìm hết chuỗi)
console.log(name.startsWith("Nhat"));

// 14. s.endsWith(searchVal,endIdx) : kiểm tra chuỗi s có kết thúc bằng searchVal hay k, trả về true nếu có và ngược lại, endIdx là vị trí bắt đầu tìm kiếm (nếu bỏ trống thì tìm hết chuỗi)
console.log(name.endsWith("Nathan"));


let input = "Nhat;Bui;Minh";

// 15. s.split(separator,limit) : tách chuỗi trả về mảng, separator là chuỗi xác định vị trí tách (có thể là ký tự hoặc chuỗi), limit là số lượng phần tử trong mảng kết quả, nếu separator là "" thì tách toàn bộ ký tự trong mảng
let inputArr1 = input.split(";");
let inputArr2 = input.split(";",2);
console.log(inputArr1);
console.log(inputArr2);