//          DOM CLASSLIST

let ele = document.getElementById("myElement");
// 1. classList.add() : thêm 1 class mới vào phần tử
ele.classList.add("newClass");

// 2. classList.remove() : xóa 1 class khỏi phần tử
ele.classList.remove("myClass");

// 3. classList.toggle() : loại 1 class nếu đã tồn tại và thêm nếu chưa có, hay dùng để chuyển theme sáng/tối
ele.classList.toggle("toggleClass");

// 4. classList.replace() : thay 1 class cũ bằng class mới
ele.classList.replace("newClass","abc");

// 5. classList.contain() : ktra xem 1 phần tử có 1 class cụ thể k
console.log(ele.classList.contains("newClass"));

// 6. Xem các class trong phần tử
console.log(ele.classList);