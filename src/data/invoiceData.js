// // ── Multiple sample datasets to demonstrate the invoice template ──

// const companyInfo = {
//   name: "F A M M DISTRICT GENERAL TRADING L.L.C S.O.C",
//   address: "Warehouse C, Plot No.32 Dubai Investment Park2",
//   trn: "105415908000003",
//   phone: "+971502409979",
//   email: "info@famm.ae",
//   supportEmail: "customerservice@famm.ae",
//   instagram: "@FAMM.ae",
//   website: "FAMM.ae",
// };

// const terms = [
//   "Delivery Times: Dubai and Abu Dhabi (5-7 business days)",
//   "Free shipping in Dubai & Abu Dhabi on orders above AED 350",
//   "The return or exchanges must be requested within 10 days from the delivery date",
//   "Returns, refunds and exchanges are processed in person only",
//   "For full details, please refer to our terms & policies at www.famm.ae",
// ];

// // ────────── Dataset 1: Single item (matches PDF exactly) ──────────
// const dataset1 = {
//   company: companyInfo,
//   invoice: { number: "INV003", date: "18-Aug-2026", currency: "AED" },
//   customer: {
//     name: "PRAVEEN",
//     address: "EMAR BUILDING",
//     area: "DOWN TOWN",
//     city: "DUBAI, UNITED ARAB EMIRATES.",
//     phone: "1234567890",
//     trn: "",
//   },
//   items: [
//     {
//       slNo: 1,
//       barcode: "6658135482532",
//       description: "3pcs bed sheet set",
//       hsCode: "6302",
//       countryOfOrigin: "China",
//       qty: 10,
//       price: 33.33,
//       taxableValue: 333.33,
//       vat: 16.67,
//       amount: 350.0,
//     },
//   ],
//   summary: {
//     totalInclVat: 350.0,
//     discount: 0.0,
//     subtotalExclVat: 333.33,
//     totalVat: 16.67,
//     netAmount: 350.0,
//     inWords: "THREE HUNDRED FIFTY AED",
//   },
//   terms,
// };

// // ────────── Dataset 2: 5 items ──────────
// const dataset2 = {
//   company: companyInfo,
//   invoice: { number: "INV017", date: "15-Sep-2026", currency: "AED" },
//   customer: {
//     name: "AHMED AL MAKTOUM",
//     address: "Tower B, Flat 1205",
//     area: "BUSINESS BAY",
//     city: "DUBAI, UNITED ARAB EMIRATES.",
//     phone: "0551234567",
//     trn: "100398765000003",
//   },
//   items: [
//     { slNo: 1, barcode: "6658135482532", description: "3pcs bed sheet set - King Size", hsCode: "6302", countryOfOrigin: "China", qty: 10, price: 33.33, taxableValue: 333.33, vat: 16.67, amount: 350.0 },
//     { slNo: 2, barcode: "6658135482549", description: "Premium cushion cover set (4pcs)", hsCode: "6304", countryOfOrigin: "India", qty: 5, price: 47.62, taxableValue: 238.10, vat: 11.90, amount: 250.0 },
//     { slNo: 3, barcode: "6658135482556", description: "Luxury bath towel - Large", hsCode: "6302", countryOfOrigin: "Turkey", qty: 8, price: 28.57, taxableValue: 228.57, vat: 11.43, amount: 240.0 },
//     { slNo: 4, barcode: "6658135482563", description: "Decorative throw blanket", hsCode: "6301", countryOfOrigin: "Portugal", qty: 3, price: 95.24, taxableValue: 285.71, vat: 14.29, amount: 300.0 },
//     { slNo: 5, barcode: "6658135482570", description: "Scented candle set (3pcs)", hsCode: "3406", countryOfOrigin: "UAE", qty: 12, price: 15.24, taxableValue: 182.86, vat: 9.14, amount: 192.0 },
//   ],
//   summary: {
//     totalInclVat: 1332.0,
//     discount: 0.0,
//     subtotalExclVat: 1268.57,
//     totalVat: 63.43,
//     netAmount: 1332.0,
//     inWords: "ONE THOUSAND THREE HUNDRED THIRTY TWO AED",
//   },
//   terms,
// };

// // ────────── Dataset 3: 15+ items (multi-page) ──────────
// const dataset3 = {
//   company: companyInfo,
//   invoice: { number: "INV042", date: "10-Sep-2026", currency: "AED" },
//   customer: {
//     name: "FATIMA HASSAN",
//     address: "Villa 8, Al Barsha South",
//     area: "AL BARSHA",
//     city: "DUBAI, UNITED ARAB EMIRATES.",
//     phone: "0509876543",
//     trn: "100567890000007",
//   },
//   items: [
//     { slNo: 1, barcode: "6658135482532", description: "3pcs bed sheet set - King Size", hsCode: "6302", countryOfOrigin: "China", qty: 4, price: 33.33, taxableValue: 133.33, vat: 6.67, amount: 140.0 },
//     { slNo: 2, barcode: "6658135482549", description: "Premium cushion cover set (4pcs)", hsCode: "6304", countryOfOrigin: "India", qty: 6, price: 47.62, taxableValue: 285.71, vat: 14.29, amount: 300.0 },
//     { slNo: 3, barcode: "6658135482556", description: "Luxury bath towel - Large", hsCode: "6302", countryOfOrigin: "Turkey", qty: 10, price: 28.57, taxableValue: 285.71, vat: 14.29, amount: 300.0 },
//     { slNo: 4, barcode: "6658135482563", description: "Decorative throw blanket", hsCode: "6301", countryOfOrigin: "Portugal", qty: 2, price: 95.24, taxableValue: 190.48, vat: 9.52, amount: 200.0 },
//     { slNo: 5, barcode: "6658135482570", description: "Scented candle set (3pcs)", hsCode: "3406", countryOfOrigin: "UAE", qty: 8, price: 15.24, taxableValue: 121.90, vat: 6.10, amount: 128.0 },
//     { slNo: 6, barcode: "6658135482587", description: "Velvet curtain panel - 2.5m", hsCode: "6303", countryOfOrigin: "India", qty: 4, price: 142.86, taxableValue: 571.43, vat: 28.57, amount: 600.0 },
//     { slNo: 7, barcode: "6658135482594", description: "Ceramic vase - Handcrafted", hsCode: "6913", countryOfOrigin: "Morocco", qty: 3, price: 66.67, taxableValue: 200.0, vat: 10.0, amount: 210.0 },
//     { slNo: 8, barcode: "6658135482600", description: "Cotton table runner - 180cm", hsCode: "6302", countryOfOrigin: "India", qty: 5, price: 19.05, taxableValue: 95.24, vat: 4.76, amount: 100.0 },
//     { slNo: 9, barcode: "6658135482617", description: "Silk pillowcase set (2pcs)", hsCode: "6302", countryOfOrigin: "China", qty: 6, price: 38.10, taxableValue: 228.57, vat: 11.43, amount: 240.0 },
//     { slNo: 10, barcode: "6658135482624", description: "Woven storage basket - Large", hsCode: "4602", countryOfOrigin: "Vietnam", qty: 4, price: 23.81, taxableValue: 95.24, vat: 4.76, amount: 100.0 },
//     { slNo: 11, barcode: "6658135482631", description: "Aroma diffuser with oils set", hsCode: "8516", countryOfOrigin: "China", qty: 3, price: 76.19, taxableValue: 228.57, vat: 11.43, amount: 240.0 },
//     { slNo: 12, barcode: "6658135482648", description: "Embroidered napkin set (6pcs)", hsCode: "6302", countryOfOrigin: "Egypt", qty: 5, price: 28.57, taxableValue: 142.86, vat: 7.14, amount: 150.0 },
//     { slNo: 13, barcode: "6658135482655", description: "Bamboo bath mat", hsCode: "4601", countryOfOrigin: "Indonesia", qty: 4, price: 33.33, taxableValue: 133.33, vat: 6.67, amount: 140.0 },
//     { slNo: 14, barcode: "6658135482662", description: "Wall art canvas print - Abstract", hsCode: "9701", countryOfOrigin: "UAE", qty: 2, price: 119.05, taxableValue: 238.10, vat: 11.90, amount: 250.0 },
//     { slNo: 15, barcode: "6658135482679", description: "Linen blend duvet cover - Queen", hsCode: "6302", countryOfOrigin: "Portugal", qty: 3, price: 161.90, taxableValue: 485.71, vat: 24.29, amount: 510.0 },
//     { slNo: 16, barcode: "6658135482686", description: "Rattan serving tray - Oval", hsCode: "4602", countryOfOrigin: "Philippines", qty: 6, price: 14.29, taxableValue: 85.71, vat: 4.29, amount: 90.0 },
//   ],
//   summary: {
//     totalInclVat: 3698.0,
//     discount: 50.0,
//     subtotalExclVat: 3471.90,
//     totalVat: 176.10,
//     netAmount: 3648.0,
//     inWords: "THREE THOUSAND SIX HUNDRED FORTY EIGHT AED",
//   },
//   terms,
// };

// export const allDatasets = [
//   { id: "single", label: "1 Item (PDF Match)", data: dataset1 },
//   { id: "medium", label: "5 Items", data: dataset2 },
//   { id: "large", label: "16 Items (Multi-page)", data: dataset3 },
// ];

// export default dataset1;



//.......................................................................................................

// ── Invoice dataset ──

const companyInfo = {
  name: "F A M M DISTRICT GENERAL TRADING L.L.C S.O.C",
  address: "Warehouse C, Plot No.32 Dubai Investment Park2",
  trn: "105415908000003",
  phone: "+971502409979",
  email: "info@famm.ae",
  supportEmail: "customerservice@famm.ae",
  instagram: "@FAMM.ae",
  website: "FAMM.ae",
};

const terms = [
  "Delivery Times: Dubai and Abu Dhabi (5-7 business days)",
  "Free shipping in Dubai & Abu Dhabi on orders above AED 350",
  "The return or exchanges must be requested within 10 days from the delivery date",
  "Returns, refunds and exchanges are processed in person only",
  "For full details, please refer to our terms & policies at www.famm.ae",
];

const invoiceData = {
  company: companyInfo,
  invoice: { number: "INV042", date: "10-Sep-2026", currency: "AED" },
  customer: {
    name: "FATIMA HASSAN",
    address: "Villa 8, Al Barsha South",
    area: "AL BARSHA",
    city: "DUBAI, UNITED ARAB EMIRATES.",
    phone: "0509876543",
    trn: "100567890000007",
  },
 items: [
  { slNo: 1, barcode: "6658135482532", description: "3pcs bed sheet set - King Size", hsCode: "6302", countryOfOrigin: "China", qty: 4, price: 33.33, taxableValue: 133.33, vat: 6.67, amount: 140.0 },
  { slNo: 2, barcode: "6658135482549", description: "Premium cushion cover set (4pcs)", hsCode: "6304", countryOfOrigin: "India", qty: 6, price: 47.62, taxableValue: 285.71, vat: 14.29, amount: 300.0 },
  { slNo: 3, barcode: "6658135482556", description: "Luxury bath towel - Large", hsCode: "6302", countryOfOrigin: "Turkey", qty: 10, price: 28.57, taxableValue: 285.71, vat: 14.29, amount: 300.0 },
  { slNo: 4, barcode: "6658135482563", description: "Decorative throw blanket", hsCode: "6301", countryOfOrigin: "Portugal", qty: 2, price: 95.24, taxableValue: 190.48, vat: 9.52, amount: 200.0 },
  { slNo: 5, barcode: "6658135482570", description: "Scented candle set (3pcs)", hsCode: "3406", countryOfOrigin: "UAE", qty: 8, price: 15.24, taxableValue: 121.90, vat: 6.10, amount: 128.0 },
  { slNo: 6, barcode: "6658135482587", description: "Velvet curtain panel - 2.5m", hsCode: "6303", countryOfOrigin: "India", qty: 4, price: 142.86, taxableValue: 571.43, vat: 28.57, amount: 600.0 },
  { slNo: 7, barcode: "6658135482594", description: "Ceramic vase - Handcrafted", hsCode: "6913", countryOfOrigin: "Morocco", qty: 3, price: 66.67, taxableValue: 200.0, vat: 10.0, amount: 210.0 },
  { slNo: 8, barcode: "6658135482600", description: "Cotton table runner - 180cm", hsCode: "6302", countryOfOrigin: "India", qty: 5, price: 19.05, taxableValue: 95.24, vat: 4.76, amount: 100.0 },
  { slNo: 9, barcode: "6658135482617", description: "Silk pillowcase set (2pcs)", hsCode: "6302", countryOfOrigin: "China", qty: 6, price: 38.10, taxableValue: 228.57, vat: 11.43, amount: 240.0 },
  { slNo: 10, barcode: "6658135482624", description: "Woven storage basket - Large", hsCode: "4602", countryOfOrigin: "Vietnam", qty: 4, price: 23.81, taxableValue: 95.24, vat: 4.76, amount: 100.0 },
  { slNo: 11, barcode: "6658135482631", description: "Aroma diffuser with oils set", hsCode: "8516", countryOfOrigin: "China", qty: 3, price: 76.19, taxableValue: 228.57, vat: 11.43, amount: 240.0 },
  { slNo: 12, barcode: "6658135482648", description: "Embroidered napkin set (6pcs)", hsCode: "6302", countryOfOrigin: "Egypt", qty: 5, price: 28.57, taxableValue: 142.86, vat: 7.14, amount: 150.0 },
  { slNo: 13, barcode: "6658135482655", description: "Bamboo bath mat", hsCode: "4601", countryOfOrigin: "Indonesia", qty: 4, price: 33.33, taxableValue: 133.33, vat: 6.67, amount: 140.0 },
  { slNo: 14, barcode: "6658135482662", description: "Wall art canvas print - Abstract", hsCode: "9701", countryOfOrigin: "UAE", qty: 2, price: 119.05, taxableValue: 238.10, vat: 11.90, amount: 250.0 },
  { slNo: 15, barcode: "6658135482679", description: "Linen blend duvet cover - Queen", hsCode: "6302", countryOfOrigin: "Portugal", qty: 3, price: 161.90, taxableValue: 485.71, vat: 24.29, amount: 510.0 },
  { slNo: 16, barcode: "6658135482686", description: "Rattan serving tray - Oval", hsCode: "4602", countryOfOrigin: "Philippines", qty: 6, price: 14.29, taxableValue: 85.71, vat: 4.29, amount: 90.0 },

  // New items
  { slNo: 17, barcode: "6658135482693", description: "Microfiber cleaning cloth set (6pcs)", hsCode: "6307", countryOfOrigin: "India", qty: 10, price: 9.52, taxableValue: 95.24, vat: 4.76, amount: 100.0 },
  { slNo: 18, barcode: "6658135482709", description: "Premium table lamp - Modern", hsCode: "9405", countryOfOrigin: "China", qty: 3, price: 142.86, taxableValue: 428.57, vat: 21.43, amount: 450.0 },
  { slNo: 19, barcode: "6658135482716", description: "Handwoven cotton rug - 5x7ft", hsCode: "5705", countryOfOrigin: "Turkey", qty: 2, price: 238.10, taxableValue: 476.19, vat: 23.81, amount: 500.0 },
  { slNo: 20, barcode: "6658135482723", description: "Stainless steel cookware set", hsCode: "7323", countryOfOrigin: "India", qty: 1, price: 428.57, taxableValue: 428.57, vat: 21.43, amount: 450.0 },
  { slNo: 21, barcode: "6658135482730", description: "Decorative ceramic bowl set (3pcs)", hsCode: "6912", countryOfOrigin: "Portugal", qty: 4, price: 52.38, taxableValue: 209.52, vat: 10.48, amount: 220.0 },
  { slNo: 22, barcode: "6658135482747", description: "Cotton kitchen towel set (4pcs)", hsCode: "6302", countryOfOrigin: "Egypt", qty: 8, price: 17.86, taxableValue: 142.86, vat: 7.14, amount: 150.0 },
  { slNo: 23, barcode: "6658135482754", description: "Wooden photo frame - Large", hsCode: "4414", countryOfOrigin: "Indonesia", qty: 5, price: 38.10, taxableValue: 190.48, vat: 9.52, amount: 200.0 },
  { slNo: 24, barcode: "6658135482761", description: "Luxury scented reed diffuser", hsCode: "3307", countryOfOrigin: "UAE", qty: 6, price: 31.75, taxableValue: 190.48, vat: 9.52, amount: 200.0 },
  { slNo: 25, barcode: "6658135482778", description: "Faux indoor plant - Decorative", hsCode: "6702", countryOfOrigin: "Vietnam", qty: 3, price: 80.95, taxableValue: 242.86, vat: 12.14, amount: 255.0 },
  { slNo: 26, barcode: "6658135482785", description: "Premium fleece blanket - King", hsCode: "6301", countryOfOrigin: "China", qty: 4, price: 71.43, taxableValue: 285.71, vat: 14.29, amount: 300.0 },
],
  summary: {
    totalInclVat: 3698.0,
    discount: 50.0,
    subtotalExclVat: 3471.90,
    totalVat: 176.10,
    netAmount: 3648.0,
    inWords: "THREE THOUSAND SIX HUNDRED FORTY EIGHT AED",
  },
  terms,
};

export default invoiceData;