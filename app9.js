// เพิ่มค่า ลดค่า 
// ++a  prefix เพิ่มค่าก่อนนำไปใช้
// a++  postfix เพิ่มค่าก่อนนำไปใช้
// --b  prefix ลดค่าก่อนนำไปใช้
// b--  postfix ลดค่าก่อนนำไปใช้

let a = 5, b =6
console.log("ค่าปัจจุบัน", a);
console.log("postfix", a++);
console.log("prefix", ++a);

console.log("ค่าปัจจุบัน", b);
console.log("postfix", b--);
console.log("prefix", --b);
