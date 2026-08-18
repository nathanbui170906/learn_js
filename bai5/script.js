//          DATE TIME

const curDate = new Date();

// 1. Lấy năm, tháng, giờ, phút, giây
const year = curDate.getFullYear();
const month = curDate.getMonth() + 1; // tháng trong js bắt đầu từ 0
const day = curDate.getDate();
const hours = curDate.getHours();
const minutes = curDate.getMinutes();
const seconds = curDate.getSeconds();
console.log(`Năm: ${year} Tháng: ${month} Ngày: ${day} Giờ: ${hours} Phút: ${minutes} Giây: ${seconds}`);

// 2. Timestamp : là đại diện cho 1 điểm cụ thể trong thời gian, tính từ mốc 0 (00:00:00 01/01/1970)
let timestamp = new Date(0);
console.log(timestamp);

let curTimeStamp = curDate.getTime();
console.log(curTimeStamp);

// 3. Định dạng và hiển thị ngày tháng
// Cách 1 : new Date(year,monthIdx,day,hours,minutes,seconds,miliseconds)
const myDate1 = new Date(2006,8,17);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

// Cách 2 : new Date(dateString), trong dateString dùng T để ngăn cách giữa ngày và giờ
const myDate2 = new Date("2006-09-17T18:36:36");
console.log(myDate2.toLocaleDateString());

// Cách 3 : dùng setFullYear, setMonth, setDate
const myDate3 = new Date();
myDate3.setFullYear(1945);
myDate3.setMonth(8);
myDate3.setDate(2);
console.log(myDate3);



// 4. setTimeOut(function,miliseconds,param1,param2,...,paramn) : dùng để thực hiện hàm sau 1 khoảng thời gian nhất định
let introduce = () => {
    console.log(`Hi, my name is Nathan`);
};
setTimeout(introduce,3000);

// 5. setInterval(function,miliseconds,param1,param2,...,paramn) : dùng để lặp lại hàm sau 1 khoảng thời gian nhất định
let counter = 0;
let count = () => {
    console.log(counter++);
    if (counter === 10) {
        clearInterval(stopInterval);
    }
};
let stopInterval = setInterval(count,1000);