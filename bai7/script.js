//          OOP (Object Oriented Programming)

/* 
    OOP có 4 tính chất sau:
        - Encapsulation (đóng gói) : chứa các thuộc tính bên trong
        - Polymorphism (đa hình) : 1 hàm có thể có nhiều chức năng khác nhau
        - Abstraction (trừu tượng) : 1 đối tượng có thể được xây dựng nhiều phương thức khác nhau
        - Inheritance (kế thừa) : lớp con có thể kế thừa các thuộc tính và phương thức của lớp cha
*/

// Object : là 1 CTDL cho phép lưu trữ và tổ chức thông tin dưới dạng cặp key-value, định nghĩa bằng cặp dấu {}, có thể khai báo key dưới dạng chuỗi, có thể truy cập bằng Dot Notation (tên_đối_tượng.tên_thuộc_tính) hoặc Bracket Notation (tên_đối_tượng["tên_key"]), nên dùng const để khai báo đối tượng thay vì let để tránh bị ghi đè giá trị
const curTime = new Date();
const footballPlayer = {
    name: "Messi",
    yearOfBirth: 1987,
    nation: "Argentina",
    club: "Barcelona",
    preferFoot: false,
    getAge() {
        return curTime.getFullYear() - this.yearOfBirth;
    }
};
// Thêm thuộc tính
footballPlayer.wife = "Antonella Rocuzzo";
footballPlayer.daughter = "Cristiano Ronaldo";
console.log(footballPlayer);
// Xóa thuộc tính
//delete footballPlayer.daughter;
console.log(footballPlayer);
console.log(footballPlayer.getAge());

// Các phương thức có sẵn của Object
// 1. Object.keys(tên_object) : trả về 1 mảng chứa tất cả các key của đối tượng
// 2. Object.values(tên_object) : trả về 1 mảng chứa tất cả các value của đối tượng
// 3. Object.entries(tên_object) : trả về 1 mảng chứa các cặp [key,value] của đối tượng
// 4. Object.assign(target,source) : sao chép các thuộc tính từ 1 hoặc nhiều đối tượng source vào 1 đối tượng target
// 5. Object.hasOwnProperty(prop) : kiểm tra xem đối tượng có 1 thuộc tính nào đó hay k, trả về true nếu có và ngược lại
// 6. Object.freeze(tên_object) : đóng băng đối tượng, k thể thêm, sửa, xóa
// 7. Object.seal(tên_object) : ngăn k cho thêm, xóa thuộc tính, chỉ cho sửa giá trị

// Class ES6
class Person {
    // Thuộc tính : # (private), _ (protected), k để gì là public
    #id;
    #fullName;
    #birthYear;
    #homeTown;
    #gender;

    // Constructor (hàm tạo) : khởi tạo giá trị cho đối tượng
    constructor(id,fullName,birthYear,homeTown,gender) {
        this.#id = id;
        this.#fullName = fullName;
        this.#birthYear = birthYear;
        this.#homeTown = homeTown;
        this.#gender = gender;
    }

    // Method (phương thức) : giúp truy cập và thao tác với các thuộc tính private
    // Setter (thay đổi giá trị thuộc tính private), Getter (trả về giá trị thuộc tính private)
    setId(id) {
        this.#id = id;
    }
    getId() {
        return this.#id;
    }
    setFullName(fullName) {
        this.#fullName = fullName;
    }
    getFullName() {
        return this.#fullName;
    }
    setBirthYear(birthYear) {
        this.#birthYear = birthYear;
    }
    getBirthYear() {
        return this.#birthYear;
    }
    setHomeTown(homeTown) {
        this.#homeTown = homeTown;
    }
    getHomeTown() {
        return this.#homeTown;
    }
    setGender(gender) {
        this.#gender = gender;
    }
    getGender() {
        return this.#gender;
    }

    introduce() {
        return `ID: ${this.getId()};Name: ${this.getFullName()};Birth: ${this.getBirthYear()};Hometown: ${this.getHomeTown()};Gender: ${this.getGender()};`;
    }
}

// Kế thừa
class Teacher extends Person {
    #faculty;
    
    constructor(id,fullName,birthYear,homeTown,gender,faculty) {
        // Lớp Teacher kế thừa các thuộc tính của lớp Person
        super(id,fullName,birthYear,homeTown,gender);
        this.#faculty = faculty;
    }

    setFaculty(faculty) {
        this.#faculty = faculty;
    }
    getFaculty() {
        return this.#faculty;
    }

    introduce() {
        // Lớp Teacher kế thừa hàm introduce của lớp Person
        return `${super.introduce()}Faculty: ${this.getFaculty()}`;
    }
}

class Student extends Person {
    #faculty;
    #gpa;
    
    constructor(id,fullName,birthYear,homeTown,gender,faculty,gpa) {
        super(id,fullName,birthYear,homeTown,gender);
        this.#faculty = faculty;
        this.#gpa = gpa;
    }

    setFaculty(faculty) {
        this.#faculty = faculty;
    }
    getFaculty() {
        return this.#faculty;
    }
    setGpa(gpa) {
        this.#gpa = gpa;
    }
    getGpa() {
        return this.#gpa;
    }

    introduce() {
        return `${super.introduce()}Faculty: ${this.getFaculty()};GPA: ${this.getGpa()}`;
    }
}