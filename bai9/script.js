// Hàm cập nhật thời gian
function updateTime() {
    const curTime = new Date();
    const hours = String(curTime.getHours()).padStart(2,"0");
    const minutes = String(curTime.getMinutes()).padStart(2,"0");
    const seconds = String(curTime.getSeconds()).padStart(2,"0");
    
    const clockString = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").innerHTML = clockString;
}
setInterval(updateTime,1000);

// Hàm thay đổi màu
function changeClockColor() {
    const clockColor = document.getElementById("clock");
    clockColor.style.color = "blue";
}
changeClockColor();

//          DOM STYLE

// Thuộc tính .style cho phép truy cập và thay đổi thuộc tính CSS của 1 phần tử HTML

// 1. tên_phần_tử.style.tên_thuộc_tính = ""; : cách thay đổi từng thuộc tính (dòng 16)

// 2. Cách viết gọn nhiều thuộc tính
let clock = document.getElementById("clock"); 
Object.assign(
    clock.style, {
        backgroundColor: "cyan",
        fontWeight: 800,
    }
);

// 3. window.getComputedStyle() : phương thức để lấy giá trị của CSS sau khi trình duyệt xử lý tính toán
console.log(window.getComputedStyle(clock).fontFamily);