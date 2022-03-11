// Nomer 1
// function changeWord (selectedText, changedText, text){
//     return text.replace(selectedText, changedText);
// }

// const kalimat1 = 'Andini sangat mencintai kamu selamanya';
// const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// console.log(changeWord('mencintai','membenci',kalimat1));
// console.log(changeWord('bromo','semeru',kalimat2));

// Nomer 2
// checkTypeNumber = (givenNumber) => {
//     if (givenNumber == null){
//         return "Error: Bro where is the parameter?"
//     } else if (typeof givenNumber !== 'number'){
//         return "Error: Invalid data type"
//     } else if (givenNumber % 2 == 0){
//         return "GENAP"
//     } else {
//         return "GANJIL"
//     }
// }

// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber(3));
// console.log(checkTypeNumber("3"));
// console.log(checkTypeNumber({}));
// console.log(checkTypeNumber([]));
// console.log(checkTypeNumber());

// Nomer Tiga
// function checkEmail(email) {
//   if (typeof email == "string" && email.length > 0) {
//     let validEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     if (email.match(validEmail)) {
//       return "Valid";
//     } else {
//       return "Invalid";
//     }
//   } else {
//     return "Email is Invalid";
//   }
// }

// console.log(checkEmail("apranata@binar.co.id"));
// console.log(checkEmail("apranata@binar.com"));
// console.log(checkEmail("apranata@binar"));
// console.log(checkEmail("apranata"));
// // console.log(checkTypeNumber(checkEmail(3322)));
// console.log(checkEmail(3322));
// console.log(checkEmail());

// Nomer Empat
// function isValidPassword(givenPassword) {
//   if (typeof givenPassword === "string" && givenPassword.length > 0) {
//     if (
//       /[A-Z]/.test(givenPassword) &&
//       /[a-z]/.test(givenPassword) &&
//       /[0-9]/.test(givenPassword) &&
//       givenPassword.length >= 8
//     ) {
//       return true;
//     } else if (
//       /[a-z]/.test(givenPassword) &&
//       /[0-9]/.test(givenPassword) &&
//       givenPassword.length >= 8
//     ) {
//       return false + " harus mengandung huruf kapital";
//     } else if (
//       /[A-Z]/.test(givenPassword) &&
//       /[a-z]/.test(givenPassword) &&
//       /[0-9]/.test(givenPassword) &&
//       givenPassword.length < 8
//     ) {
//       return false + " harus terdiri dari minimal 8 huruf";
//     } else if (/[a-z]/.test(givenPassword) && givenPassword.length < 8) {
//       return false + " harus mengandung angka & terdiri dari minimal 8 huruf";
//     }
//   } else {
//     return "Error: Input tidak sesuai!";
//   }
// }

// console.log(isValidPassword("Meong2021"));
// console.log(isValidPassword("meong2021"));
// console.log(isValidPassword("@eong"));
// console.log(isValidPassword("Meong2"));
// console.log(isValidPassword(0));
// console.log(isValidPassword());

// Nomer Lima
// function getSplitName(personName){
//     if (typeof personName == 'string'){
//         var names = personName.split(' ');
//         if (names.length == 3){
//             return `{firstName: ${names[0]}, middleName: ${names[1]}, lastName: ${names[2]}}`
//         } else if (names.length == 2){
//             return `{firstName: ${names[0]}, middleName: null, lastName: ${names[names.length-1]}}`;
//         } else if (names.length == 1){
//             return `{firstName: ${names[0]}, middleName: null, lastName: null}`;
//         } else{
//             return "Error: This function is only for 3 characters name"
//         }
//     } else{
//         return "Error: Invalid data type"
//     }
// }

// console.log(getSplitName("Aldi Daneila Pranata"));
// console.log(getSplitName("Dwi Kuncoro"));
// console.log(getSplitName("Aurora"));
// console.log(getSplitName("Aurora Aureliya Sukma Darma"));
// console.log(getSplitName(0));

// Nomer Enam
// function getAngkaTerbesarKedua (dataNumbers){
//     if (dataNumbers == null){
//         return "Error: Bro where is the parameter?"
//     } else if (dataNumbers instanceof Array){
//         let max = Math.max.apply(null, dataNumbers); //Get Angka Terbesar
//         dataNumbers.splice(dataNumbers.indexOf(max), 1); //Remove Angka Terbesar
//         return Math.max.apply(null, dataNumbers) //Angka Terbesar Kedua
//     } else{
//         return "Error: Not an array"
//     }
// }

// const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

// console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());

// Nomer Tujuh
// const dataPenjualanPakAldi = [
//     {
//         namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
//         hargaSatuan: 760000,
//         kategori: "Sepatu Sport",
//         totalTerjual: 90
//     },
//     {
//         namaProduct: 'Sepatu Warrior Tristan Black Brown High',
//         hargaSatuan: 960000,
//         kategori: "Sepatu Sneaker",
//         totalTerjual: 37
//     },
//     {
//         namaProduct: 'Sepatu Warrior Tristan Maroon High',
//         hargaSatuan: 360000,
//         kategori: "Sepatu Sport",
//         totalTerjual: 90
//     },
//     {
//         namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
//         hargaSatuan: 120000,
//         kategori: "Sepatu Sport",
//         totalTerjual: 90
//     }
// ]

//Nomor Delapan
// function hitungTotalPenjualan(dataPenjualan){
//     const totalPenjualan = dataPenjualan.map(jumlah => jumlah.totalTerjual).reduce((prevValue, currValue) => prevValue + currValue, 0);
//     return totalPenjualan;
// }

// console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// Nomer Delapan (Beloman)
// const dataPenjualanNovel = [
//     {
//       idProduct: 'BOOK002421',
//       namaProduk: 'Pulang - Pergi',
//       penulis: 'Tere Liye',
//       hargaBeli: 60000,
//       hargaJual: 86000,
//       totalTerjual: 150,
//       sisaStok: 17
//     },
//     {
//       idProduct: 'BOOK002351',
//       namaProduk: 'Selamat Tinggal',
//       penulis: 'Tere Liye',
//       hargaBeli: 75000,
//       hargaJual: 103000,
//       totalTerjual: 171,
//       sisaStok: 20
//     },
//     {
//       idProduct: 'BOOK002941',
//       namaProduk: 'Garis Waktu',
//       penulis: 'Fiersa Besari',
//       hargaBeli: 67000,
//       hargaJual: 99000,
//       totalTerjual: 213,
//       sisaStok: 5
//     },
//     {
//       idProduct: 'BOOK002941',
//       namaProduk: 'Laskar Pelangi',
//       penulis: 'Andrea Hirata',
//       hargaBeli: 55000,
//       hargaJual: 68000,
//       totalTerjual: 20,
//       sisaStok: 56
//     }
// ];

// function getInfoPenjualan(dataPenjualan){
