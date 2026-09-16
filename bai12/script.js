//          DOM EVENTS

/*
    - Là chìa khóa để tạo ra bất kỳ trang web tương tác nào, giúp phản hồi lại những gì người dùng tương tác trên trang
    - Các loại sự kiện phổ biến như:
        + Mouse events : chuột
        + Keyboard events : bàn phím
        + Form events : form
        + Clipboard events : bản ghi
        + Focus events
        + Window/Document events
        + Drag & Drop events
        + Touch events
*/

// Inline Event là cách đơn giản để thêm sự kiện vào 1 phần tử HTML bằng cách dùng thuộc tính của nó, nhược điểm là khó quản lý và tái sử dụng kém

// DOM Level 0 Handling chỉ có thể thêm 1 sự kiện vào 1 phần tử

// element.addEventListener(event, function, options) : là phương thức gọi hàm khi sự kiện xảy ra, có thể thêm nhiều sự kiện lên 1 phần tử (sự kiện sau sẽ ghi đè lên sự kiện trước)
let ele1 = document.querySelector(".button1");
ele1.addEventListener("click", () => {
    alert("You've clicked the first button !!!");
});

let ele2 = document.querySelector(".button2");
ele2.addEventListener("dblclick", () => {
    alert("You've clicked the second button !!!");
});

let inpEle = document.querySelector("input[type='text']");
inpEle.addEventListener("input", (e) => {
    console.log(e.target.value);
});

let ele3 = document.querySelector("#myElement");
let originalText = ele3.textContent;
ele3.addEventListener("mouseover", () => {
    ele3.textContent = "Nothing";
});
ele3.addEventListener("mouseleave", () => {
    ele3.textContent = originalText;
});

// element.removeEventListener(event, function, options) : là phương thức xóa sự kiện

// preventDefault() : ngăn hành vi mặc định của phần tử

// stopProgation() : ngăn hành vi lan truyền của sự kiện nổi bọt từ con lên cha, k ngăn sự kiện của cùng 1 element

// stopImmediateProgation() : ngăn chặn sự kiện của cùng 1 element

// Ứng dụng đổi màu random khi nhấn nút bằng addEventListener
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};
let changeColorButton = document.querySelector(".button3");
changeColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
});

// Thêm thẻ li mới khi nhập form
const form = document.querySelector("#form");
const list_items = document.getElementById("list_items");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;
    const newLi = document.createElement("li");
    newLi.textContent = username + ":" + message;
    list_items.append(newLi);
    form.reset();
});

// Khi click vào thẻ li thì xóa chính nó
const lis = document.querySelectorAll("li");
console.log(lis);
for (let li of lis) {
    li.addEventListener("click", () => {
        li.remove();
    });
}

list_items.addEventListener("click", (e) => {
    const li = e.target;
    if (li.tagName === "LI") {
        li.remove();
    }
});