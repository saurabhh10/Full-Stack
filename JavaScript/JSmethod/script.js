const str = "saurabh kumar";

//charAt and at

console.log(str.charAt(3));
console.log(str.at(6));

// const arr = [10, 24, 32, 53, 46, 76, 89, 25, 15];
// console.log(arr.at[2]);
// console.log(arr.charAt[2]);                 not usefull

//slice

const str2 = str.slice(2, 6);
console.log(str2);

//substring

const S_str = str.substring(2, 5);
console.log(S_str);

//indexOf()

const str3 = str.indexOf("kumar");
console.log(str3);

//lastIndexOf()

const str4 = str.lastIndexOf("kumar");
console.log(str4);

//includes()

const str5 = str.includes("bh");
console.log(str5);

//startsWith() and endsWith()

const str6 = str.startsWith("saurabh");
const str7 = str.endsWith("singh");
console.log(str6);
console.log(str7);

//replace()

const str8 = str.replace("kumar", "singh");
console.log(str8);

//replaceAll()

const str9 = str.replaceAll("kumar", "singh");
console.log(str9);

//toUpperCase()

const str10 = str.toUpperCase();
console.log(str10);

//toLowerCase()

const str11 = str.toLowerCase();
console.log(str11);

//trim()

const name = "   Rahul Sharma   ";
console.log(name.trim());

//trimStart() and trimEnd()

const text = "   Hello   ";
console.log(text.trimStart());
console.log(text.trimEnd());

//concat()

const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));

//repeat()

console.log("Hi ".repeat(3));
console.log("*".repeat(5));

//split()

const subjects = "HTML,JavaScript,React";
console.log(subjects.split(","));

//