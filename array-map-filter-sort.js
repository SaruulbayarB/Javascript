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
  return students.map((student) => {
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
  const filteredData = data.filter((student) => {
    return student.gender == gender;
  });

  return filteredData;
}

console.log(FindByGender(Students3, "female"));

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
    return product.isDiscounted === true;
  });

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
  let OutofStockItems = products.filter((product) => {
    return product.stock === 0;
  });

  return OutofStockItems;
}

console.log(getOutOfStockProducts(data2));
// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getExpensiveProducts(products) {
//   // ...
// }

function GetMillionItem(products) {
  let MillionPricedItem = products.filter((product) => {
    return product.price >= 1000000;
  });
  return MillionPricedItem;
}

console.log(GetMillionItem(data2));

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getComputers(products) {
//   // ...
// }
let data3 = [
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
  let OutofStockItems = products.filter((product) => {
    return product.stock === 0;
  });

  return OutofStockItems;
}

function getComputers(products) {
  let computersOnly = products.filter((product) => {
    return product.category === "Computers";
  });

  return computersOnly;
}
console.log(getComputers(data3));

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
// function filterByBrand(products, brandName) {
//   // ...
// }

let data4 = [
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

function FilterByBrand(products, brandName) {
  const Brands = products.filter((product) => {
    return product.brand === brandName;
  });

  return Brands;
}
console.log(FilterByBrand(data4, "Dell"));

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
// function addIsHeavyFlag(products) {
//   // ...
// }

let data5 = [
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

function AddIsHeaveFlag(products) {
  let UpdatedData5 = products.map((product) => {
    return {
      ...product,
      isHeavy: product.weight > 1,
    };
  });
  return UpdatedData5;
}
console.log(AddIsHeaveFlag(data5));

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
// function increasePriceByTenPercent(products) {
//   // ...
// }

let data6 = [
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

function IncreasePriceByTenPercent(products) {
  let UpdatedPricedProducts = products.map((product) => {
    return { ...product, price: product.price * 1.1 };
  });

  return UpdatedPricedProducts;
}

console.log(IncreasePriceByTenPercent(data6));

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
// function addFinalPrice(products) {
//   // ...
// }

let data7 = [
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

function addFinalPrice(products) {
  let FinalPriceAfterDiscount = products.map((product) => {
    return {
      ...product,
      AfterDiscountPrice:
        product.price + (product.price * product.discountPercent) / 100,
    };
  });

  return FinalPriceAfterDiscount;
}
console.log(addFinalPrice(data7));

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
// function getTopRatedProduct(products) {
//   // ...
// }

let data8 = [
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
function getTopRatedProduct(products) {
  let TopRate = products.sort((a, b) => b.rating - a.rating);
  return TopRate[0];
}
console.log(getTopRatedProduct(data8));

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
// function getCheapestProduct(products) {
//   // ...
// }

let data9 = [
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

function getCheapestProduct(products) {
  let CheapestItem = products.sort((a, b) => a.price - b.price);
  return CheapestItem[0];
}

console.log(getCheapestProduct(data9));

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
// function getTotalStock(products) {
//   // ...
// }

let data10 = [
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

function getTotalStock(products) {
  let totalStock = 0;
  products.filter((product) => {
    return (totalStock += product.stock);
  });
  return totalStock;
}
console.log("Total Stock is: " + getTotalStock(data10) + " " + "pcs");
