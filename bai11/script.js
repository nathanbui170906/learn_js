//          DOM PARENT/CHILD/SIBLINGS

let ele = document.querySelector("#myId");
// 1. parentElement : truy cập vào phần tử cha (duy nhất)
ele.parentElement.style.backgroundColor = "red";

// 2. children : truy cập vào phần tử con (có thể có nhiều)
console.log(ele.children);

// 3. nextElementSibling : chọn phần tử anh em kế tiếp
console.log(ele.children[0].nextElementSibling);

// 4. previousElementSibling : chọn phần tử anh em trước đó
console.log(ele.children[1].previousElementSibling);

// 5. Thêm 1 hoặc nhiều phần tử con vào trong phần tử cha
// B1: document.createElement("ele") : tạo element (ele : tên thẻ cần tạo)
const newImg = document.createElement("img");
const newP = document.createElement("p");
console.dir(newImg); // kiểm tra toàn bộ thuộc tính và phương thức của newImg
// B2: set attribute
newImg.src = "./gear-5-luffy-artwork-5k-3840x2160-18363.jpg";
newP.textContent = "Hi";
// B3: append/prepend : thêm vào 1 phần tử có sẵn (thêm vào cuối/đầu phần tử cha)
document.body.append(newImg);
newImg.style.width = "100%";
const firstP = document.querySelector("p");
firstP.prepend(newP);

// 6. appendChild() : gần giống với append, chỉ thêm được đối tượng Node (mỗi lần gọi chỉ thêm 1 phần tử, append thì thêm đc nhiều), trả về phần tử vừa đc thêm (append thì trả về undefined)
const pEle = document.createElement("p");
pEle.classList.add("phone-number");
pEle.textContent = "0838.088.480";
pEle.style.color = "green";
ele.appendChild(pEle);

const btn = document.createElement("button");
btn.textContent = "Click";
ele.appendChild(btn).addEventListener("click",function () {
    alert("you've been banned !!!");
});

function addButtons() {
    const parEle = document.querySelector(".myContent");
    for (let i = 0;i < 10;i++) {
        const btns = document.createElement("button");
        btns.innerText = "Button " + (i + 1);
        if ((i + 1) % 2 === 0) {
            btns.style.backgroundColor = "green";
        }
        parEle.appendChild(btns);
    }
}
addButtons();

// 7. parentElement.removeChild() : xóa phần tử con khỏi phần tử cha
const childEle = document.querySelector("#item3");
childEle.parentElement.removeChild(childEle);