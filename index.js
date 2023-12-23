// 1-masala
// Massiv ichidan berilgan qiymatni qidiradigan agar mavjud bolsa uning indexlarining kvadratini aks holda mavjud emas degan yozuvni qaytaradigan funksiya yozing (IndexOf).



// 2-masala
// 3 ta massivni birlashtiradigan birinchi massivni oxirida, 2-sini boshida va 3-sini ortasida qoyib beradigan funksiya yozing. (concat)

// let massiv1 = [1, 2, 3, 4];
// let massiv2 = [5, 6, 7];
// let massiv3 = [8, 9, 10, 11, 12];

// let array = massiv2.concat(massiv3, massiv1);
// console.log(array);

// 3-masala
// Sonlardan tashkil topgan massivning ichidan shartga mos dastlabki elementning kvadratini qaytaradigan funksiya yozing (find)

// let massiv = [2, 3, 5, 1, 4, 6, 7, 9, 8, 11, 12];

// let a = massiv.find((value, index, massiv) => {
//     return value > 9
// });

// console.log(a ** 2);

// 4-masala
// Sonlardan tashkil topgan massiv elementlari orasidan toqlarining sonini topuvchi funksiya yozing (forEach)

// let massiv = [2, 3, 4, 5, 6, 7, 8, 9, 11];

// function oddNumbers(massiv) {
//     let counter = 0;

//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] % 2 == 1) {
//             counter++;
//         }
//     }

//     return counter;
// }

// let res = oddNumbers(massiv);

// console.log(res);


// 5-masala
// So'zlardan tashkil topgan massivning oxirgi harflaridan iborat yangi massiv hosil qiladigan funksiya yozing (forEach)

// let massiv = ["orange", "banana", "kiwi", "lemon"];
// let shortNewMassiv = [];

// function lastWordsMassiv(arg) {
//     for (let i = 0; i < arg.length; i++) {
//             let sozlar = arg[i];
//             let lastLetter = sozlar.charAt(sozlar.length - 1);

//             shortNewMassiv.push(lastLetter);
//         }
//         return shortNewMassiv;
// }

//     let yangiMassiv = lastWordsMassiv(massiv);
//     console.log(yangiMassiv);

// 6-masala
// Sonlardan tashkil topgan massiv elementlari orasidan tub larining yigindisini topuvchi funksiya yozing (for...of)

// let massiv = [2, 4, 3, 6, 5, 7, 9, 11, 10];

// function tubSonlar(arg){
//     let sum = 2;

//     for (const tubSon of arg) {
//         if (tubSon % 2 == 1){
//             sum += tubSon
//         }
//     }
//     return sum
// }

// console.log(tubSonlar(massiv));