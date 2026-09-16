

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