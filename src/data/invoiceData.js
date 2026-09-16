

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

  { slNo: 11, barcode: "6658135482570", description: "Scented candle set (3pcs)", hsCode: "3406", countryOfOrigin: "UAE", qty: 8, price: 15.24, taxableValue: 121.90, vat: 6.10, amount: 128.0 },

  { slNo: 12, barcode: "6658135482587", description: "Velvet curtain panel - 2.5m", hsCode: "6303", countryOfOrigin: "India", qty: 4, price: 142.86, taxableValue: 571.43, vat: 28.57, amount: 600.0 },

  { slNo: 13, barcode: "6658135482594", description: "Ceramic vase - Handcrafted", hsCode: "6913", countryOfOrigin: "Morocco", qty: 3, price: 66.67, taxableValue: 200.0, vat: 10.0, amount: 210.0 },

  { slNo: 14, barcode: "6658135482600", description: "Cotton table runner - 180cm", hsCode: "6302", countryOfOrigin: "India", qty: 5, price: 19.05, taxableValue: 95.24, vat: 4.76, amount: 100.0 },

  { slNo: 15, barcode: "6658135482617", description: "Silk pillowcase set (2pcs)", hsCode: "6302", countryOfOrigin: "China", qty: 6, price: 38.10, taxableValue: 228.57, vat: 11.43, amount: 240.0 },

  { slNo: 16, barcode: "6658135482624", description: "Woven storage basket - Large", hsCode: "4602", countryOfOrigin: "Vietnam", qty: 4, price: 23.81, taxableValue: 95.24, vat: 4.76, amount: 100.0 },

  { slNo: 17, barcode: "6658135482570", description: "Scented candle set (3pcs)", hsCode: "3406", countryOfOrigin: "UAE", qty: 8, price: 15.24, taxableValue: 121.90, vat: 6.10, amount: 128.0 },

  { slNo: 18, barcode: "6658135482587", description: "Velvet curtain panel - 2.5m", hsCode: "6303", countryOfOrigin: "India", qty: 4, price: 142.86, taxableValue: 571.43, vat: 28.57, amount: 600.0 },

  { slNo: 19, barcode: "6658135482594", description: "Ceramic vase - Handcrafted", hsCode: "6913", countryOfOrigin: "Morocco", qty: 3, price: 66.67, taxableValue: 200.0, vat: 10.0, amount: 210.0 },

  { slNo: 20, barcode: "6658135482600", description: "Cotton table runner - 180cm", hsCode: "6302", countryOfOrigin: "India", qty: 5, price: 19.05, taxableValue: 95.24, vat: 4.76, amount: 100.0 },

  { slNo: 21, barcode: "6658135482617", description: "Silk pillowcase set (2pcs)", hsCode: "6302", countryOfOrigin: "China", qty: 6, price: 38.10, taxableValue: 228.57, vat: 11.43, amount: 240.0 },

  { slNo: 22, barcode: "6658135482624", description: "Woven storage basket - Large", hsCode: "4602", countryOfOrigin: "Vietnam", qty: 4, price: 23.81, taxableValue: 95.24, vat: 4.76, amount: 100.0 },


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