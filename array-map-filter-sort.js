// Array Map - does not change the Array structure itself
// map method will create new array
// will decide what array shall be generated with the Return function

let ages = [10, 203, 40, 30, 50];

ages.map((a) => {
  console.log(a);
});

ages.sort((a, b) => {
  return a - b;
});

console.log(ages);

let ages2 = [10, 203, 40, 30, 50];

let MaxValueFind = Math.max(...ages2);

console.log(MaxValueFind);

const Students = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 58, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Ulya", age: 20, grade: 55, gender: "female", balance: 14000 },
  { name: "Jasmine", age: 12, grade: 69, gender: "female", balance: 5000 },
  { name: "Sarah", age: 20, grade: 75, gender: "female", balance: 99000 },
];

function PushClassCode(classCode, Code) {
  NewClass = [];

  //Bodlogo #5

  for (i = 0; i < classCode.length; i++) {
    // NewClass.push({

    //     name: classCode[i].name,
    //     age: classCode[i].age,
    //     grade: classCode[i].grade,
    //     gender: classCode[i].gender,
    //     balance: classCode[i].balance,
    //     class: Code

    // })

    NewClass.push({
      ...classCode[i],

      class: Code,
    });
  }

  return NewClass;
}

console.log(PushClassCode(Students, "44A"));

//Bodlogo #6
// Function to Remove Gender Property

const Students2 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 58, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Ulya", age: 20, grade: 55, gender: "female", balance: 14000 },
  { name: "Jasmine", age: 12, grade: 69, gender: "female", balance: 5000 },
  { name: "Sarah", age: 20, grade: 75, gender: "female", balance: 99000 },
];

function RemoveGender(students) {
  return students.map(student => {
    const { gender, ...NewStudents } = student; 
    return NewStudents; 
  });
}

const studentsWithoutGender = RemoveGender(Students2);

console.log(studentsWithoutGender);









//Bodlogo #1

const Students3 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 58, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Ulya", age: 20, grade: 55, gender: "female", balance: 14000 },
  { name: "Jasmine", age: 12, grade: 69, gender: "female", balance: 5000 },
  { name: "Sarah", age: 20, grade: 75, gender: "female", balance: 99000 },
];

function FindByGender(data, gender) {
   
  const filteredData =  data.filter((student) => {
    return student.gender == gender;
  });

  return filteredData;
}

console.log(FindByGender(Students3, 'female'));

// Data is provided 


let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];


// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
// function getDiscountedProducts(products) {
//   // ...
// }

function getDiscountedProducts(products) {


    let DiscountedData = products.filter((product) => {

        return product.isDiscounted === true
    })

    return DiscountedData; 
}

console.log(getDiscountedProducts(data)); 


// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getOutOfStockProducts(products) {
//   // ...
// }

let data2 = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];
function getOutOfStockProducts(products) {

let OutofStockItems = products.filter ((product) => {

return product.stock === 0; 

})

return OutofStockItems; 

}

console.log(getOutOfStockProducts(data2)); 