//          BOM (BROWSER OBJECT MODELS)

// Là 1 phần của trình duyệt web, cung cấp 1 giao diện lập trình để tương tác với các thành phần của trình duyệt, cho phép kiểm soát và thao tác các yếu tố trong trang web như tạo cửa sổ mới, phóng to/thu nhỏ, ...

/* 
    Mô hình của BOM:
        - Document (DOM) : làm việc với cấu trúc HTML của trang
        - Screen : cung cấp thông tin về màn hình của người dùng
        - Location : đại diện cho URL của trình duyệt, cho phép tương tác với các thành phần như protocol, hostname, port, path, ... 
        - History : cho phép tương tác với lịch sử trình duyệt của người dùng
        - Navigator : chứa thông tin về trình duyệt của người dùng như tên, phiên bản, hệ điều hành, ...
*/

//          DOM (DOCUMENT OBJECT MODELS)

// Là 1 đối tượng đc tạo bởi trình duyệt web khi trang đc tải, k phụ thuộc vào bất kỳ NNLT nào mà là 1 phần của trình duyệt web

/* 
    Cấu trúc DOM:
        document
            * html
                - head
                    + title
                - body
                    + h1
                    + a

    Phân loại node:
        - Document node : đại diện cho toàn bộ tài liệu HTML
        - Element node : đại diện cho 1 phần tử HTML cụ thể (vd như 1 thẻ div hoặc 1 thẻ img)
        - Text node : văn bản bên trong các phần tử HTML
        - Attribute node : node thuộc tính (href, src, ...)
        - Comment node : chứa các comment trong mã HTML

    API (Application Programming Interface) : giao diện lập trình ứng dụng, là công cụ giúp các phần mềm hoặc ứng dụng giao tiếp với nhau
*/

//          CÁC PHƯƠNG THỨC CỦA DOM API

// 1. innerHTML : cho phép xem hoặc sửa nội dung HTML bên trong 1 phần tử, textContent : trả về nội dung nằm bên trong phần tử bao gồm cả khoảng trắng, tab xuống dòng, innerText : trả về văn bản mà người dùng thấy trên trình duyệt, loại bỏ các phần tử được ẩn bằng CSS
let heading = document.getElementById();
console.log(heading.innerHTML);
console.log(heading.textContent);
console.log(heading.innerText);

// 2. getElementsByTagName() : trả về 1 mảng chứa các phần tử có tagName đc chỉ định
let item = document.getElementsByTagName("li");
console.log(item);

// 3. getElementsByClassName() : trả về 1 mảng chứa các phần tử có className đc chỉ định
let li_item = document.getElementsByClassName("name");
console.log(li_item[2].innerHTML);

// 4. getElementById() : trả về 1 phần tử duy nhất có id trùng lặp (nếu có nhiều id trùng thì trả về id đầu tiên), nếu k thấy thì trả về null
let ele = document.getElementById("bio");
console.log(ele.innerHTML);

// 5. querySelector() : trả về phần tử đầu tiên trong document phù hợp với selector đc chỉ định (# : chọn bằng id, . : chọn bằng class, 'a' : chọn phần tử a trong danh sách)

// Chọn bằng id
let query_item1 = document.querySelector('#bio');
console.log(query_item1);
query_item1.innerHTML = "Nothing";
console.log(query_item1.innerHTML);

// Chọn bằng class
// let query_item2 = document.querySelector(".name");
// console.log(query_item2);
// query_item2.innerHTML = "Nathan";
// console.log(query_item2.innerHTML);

// Chọn phần tử
let query_item3 = document.querySelector("ul a");
console.log(query_item3);

let query_item4 = document.querySelector("input");
query_item4.checked = true;

// 6. querySelectorAll() : trả về danh sách các phần tử trong document phù hợp với selector đc chỉ định
let query_item5 = document.querySelectorAll("li");
console.log(query_item5[1].innerHTML);

// 7. getAttribute() : là phương thức trả về giá trị của thuộc tính nằm trên phần tử HTML, k thấy thì trả về null
let aTag = document.querySelector('a');
let linkHref = aTag.getAttribute("href");
console.log(linkHref);

// 8. setAttribute("target","_blank") : là phương thức thay đổi giá trị của thuộc tính nằm trên phần tử HTML
let browserLink = aTag.setAttribute("target","_blank");

const links = document.querySelectorAll("ul a");
console.log(links);

links.forEach((singleLink) => {
    singleLink.setAttribute("target","_blank");
});

// 9. hasAttribute() : ktra xem 1 phần tử có thuộc tính được chỉ định k
console.log(query_item1.hasAttribute("class"));

// 10. removeAttribute() : loại bỏ 1 thuộc tính khỏi 1 phần tử HTML
query_item1.removeAttribute("class");
console.log(query_item1);