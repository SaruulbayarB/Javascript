// Нэг л products массив дээр ажиллана
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
function getDiscountedProducts(products) {
  // ...
}

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  // ...
}

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  // ...
}

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products) {
  // ...
}

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  // ...
}

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  // ...
}

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  // ...
}

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  // ...
}

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  // ...
}

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  // ...
}

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  // ...
}

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  // ...
}

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  // ...
}

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  // ...
}

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  // ...
}

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  // ...
}

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  // ...
}

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  // ...
}

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  // ...
}

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  // ...
}

 

// ------------------------------------------------------------------------------------------------------

let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

 // 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  // ...
}

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  // ...
}

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  // ...
}

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  // ...
}

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  // ...
}

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  // ...
}

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  // ...
}

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  // ...
}

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  // ...
}

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  // ...
}

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  // ...
}

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  // ...
}

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  // ...
}

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  // ...
}

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  // ...
}

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  // ...
}

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  // ...
}

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  // ...
}

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  // ...
}

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  // ...
}
 