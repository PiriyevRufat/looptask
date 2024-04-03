// for (let i = 0; ; i++) {
//     const number = parseInt(prompt("Nomrevi yaz:"));
//     if (!isNaN(number)){
//         let temp;
//         for (temp = number; temp % 3 === 0; temp /= 3) {}
//         if (temp === 1) {
//             alert("3 quvvesidir");
//             break;
//         } else {
//             alert("Gede bilersen!");
//         }
//     } else {
//         alert("Duzgun deyil");
//     }
// }

//task

// let poly = prompt("Vvedi string ili number");
// let isPalindrome = true;

// for (let i = 0; i < poly.length / 2; i++) {
//     if (poly[i] !== poly[poly.length - i - 1] ) {
//         isPalindrome = false; 
//         break;
//     }
// }
// if (isPalindrome) {
//     console.log(poly + " is a palindrome.");
// } else {
//     console.log(poly + " is not a palindrome.");
// }

//task

// let eded= parseInt(prompt('Eded daxil edin:'));
// let num1 = eded / 2;
// let num2;

// for (num2 = (num1 + (eded / num1)) / 2; num1 !== num2; num2= (num1 + (eded / num1)) / 2) {
//     num1 = num2;
// }

// console.log(num1);

//task

// arr=[12,55,34,27,85,11,22,58,41]

// let umumicem = 0;

// for (let i = 0; i < arr.length; i++) {
//     let reqemcemi = 0;
//     let number = arr[i];
//     while (number > 0) {
//         reqemcemi += number % 10;
//         number = (number/10) | 0;
//     }
//     if (reqemcemi < 10) {
//         umumicem ++
//     }
// }
// console.log("Verilmis array-deki reqemlerinin cemi 10-dan kicik olan ededlerin sayi:", umumicem);
