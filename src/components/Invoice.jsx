// // import React, { useState, useRef, useLayoutEffect } from "react";
// // import fammLogo from "../assets/fammlogo.jfif.jpeg";
// // import invoiceData from "../data/invoiceData";

// // const MM_TO_PX = 96 / 25.4;
// // const PAGE_CONTENT_HEIGHT_MM = 277; // A4 (297mm) minus 10mm top + 10mm bottom @page margin
// // const PAGE_CONTENT_HEIGHT_PX = PAGE_CONTENT_HEIGHT_MM * MM_TO_PX;

// // export default function Invoice() {
// //   const { company, invoice, customer, items, summary, terms } = invoiceData;
// //   const [pages, setPages] = useState(null);

// //   const measureFirstHeaderRef = useRef(null);
// //   const measureRepeatHeaderRef = useRef(null);
// //   const measureRowRef = useRef(null);
// //   const measureBottomRef = useRef(null);

// //   useLayoutEffect(() => {
// //     const firstHeaderH = measureFirstHeaderRef.current.getBoundingClientRect().height;
// //     const repeatHeaderH = measureRepeatHeaderRef.current.getBoundingClientRect().height;
// //     const rowH = measureRowRef.current.getBoundingClientRect().height;
// //     const bottomH = measureBottomRef.current.getBoundingClientRect().height;

// //     const builtPages = [];
// //     let rowsOnPage = [];
// //     let capacity = PAGE_CONTENT_HEIGHT_PX - firstHeaderH;
// //     let isFirst = true;

// //     items.forEach((item) => {
// //       if (rowH > capacity && rowsOnPage.length > 0) {
// //         builtPages.push({ items: rowsOnPage, isFirst });
// //         rowsOnPage = [];
// //         isFirst = false;
// //         capacity = PAGE_CONTENT_HEIGHT_PX - repeatHeaderH;
// //       }
// //       rowsOnPage.push(item);
// //       capacity -= rowH;
// //     });
// //     builtPages.push({ items: rowsOnPage, isFirst });

// //     const lastPage = builtPages[builtPages.length - 1];
// //     const lastHeaderH = lastPage.isFirst ? firstHeaderH : repeatHeaderH;
// //     const remainingOnLast = PAGE_CONTENT_HEIGHT_PX - (lastHeaderH + lastPage.items.length * rowH);

// //     const finalPages = builtPages.map((p) => ({ ...p, showBottom: false }));
// //     if (bottomH <= remainingOnLast) {
// //       finalPages[finalPages.length - 1].showBottom = true;
// //     } else {
// //       finalPages.push({ items: [], isFirst: false, showBottom: true });
// //     }

// //     setPages(finalPages);
// //   }, [items]);

// //   const handlePrint = () => window.print();

// //   const FirstHeader = () => (
// //     <div className="px-10 pt-8 pb-4">
// //       <div className="flex items-center gap-5">
// //         <img src={fammLogo} alt="FAMM Logo" className="h-24 w-24 rounded-full object-cover border-2 border-amber-700/20 shrink-0" />
// //         <div className="flex-1 text-center">
// //           <h1 className="text-[17px] font-bold text-amber-900 tracking-wide leading-tight">{company.name}</h1>
// //           <p className="mt-1 text-[13px] font-semibold text-amber-800/70">{company.address}</p>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-2 gap-4 pt-4 pb-1">
// //         <div className="text-[12px] leading-relaxed text-stone-700">
// //           <p className="mb-0.5"><span className="text-stone-500">To :</span> <span className="font-bold text-stone-800">{customer.name}</span></p>
// //           <div className="ml-4 text-stone-600">
// //             <p>{customer.address}</p>
// //             <p>{customer.area}</p>
// //             <p>{customer.city}</p>
// //             <p>{customer.phone}</p>
// //           </div>
// //           {customer.trn && <p className="mt-1"><span className="text-stone-500">TRN:</span> {customer.trn}</p>}
// //         </div>
// //         <div className="text-right text-[12px]">
// //           <p className="text-[18px] font-bold text-stone-800 tracking-wide mb-2">TAX INVOICE</p>
// //           <p className="text-stone-600"><span className="text-stone-400">TRN : </span><span className="font-semibold text-stone-700">{company.trn}</span></p>
// //           <table className="ml-auto mt-2 text-stone-600"><tbody>
// //             <tr><td className="pr-3 text-right text-stone-400">Invoice No</td><td className="px-1 text-stone-400">:</td><td className="font-bold text-stone-800">{invoice.number}</td></tr>
// //             <tr><td className="pr-3 text-right text-stone-400">Date</td><td className="px-1 text-stone-400">:</td><td className="text-stone-700">{invoice.date}</td></tr>
// //           </tbody></table>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const RepeatHeader = () => (
// //     <div className="px-10 pt-6 pb-3">
// //       <div className="flex items-center gap-5">
// //         <img src={fammLogo} alt="FAMM Logo" className="h-16 w-16 rounded-full object-cover border-2 border-amber-700/20 shrink-0" />
// //         <div className="flex-1 text-center">
// //           <h1 className="text-[15px] font-bold text-amber-900 tracking-wide leading-tight">{company.name}</h1>
// //           <p className="mt-0.5 text-[11px] font-semibold text-amber-800/70">{company.address}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const ColumnHeaderRow = () => (
// //     <tr className="bg-amber-900 text-white">
// //       <th className="border border-amber-800 px-2 py-2.5 text-center font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[32px]">Sl No</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-left font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[95px]">Barcode</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-left font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap">Description</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-center font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[46px]">HS Code</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-center font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[62px]">Origin</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[40px]">Qty</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[52px]">Price</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[68px]">Taxable Val</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[44px]">Vat</th>
// //       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[60px]">Amount</th>
// //     </tr>
// //   );

// //   const ItemRow = React.forwardRef(({ item }, ref) => (
// //     <tr ref={ref} className="hover:bg-amber-50/40">
// //       <td className="border border-stone-200 px-2 py-1.5 text-center text-stone-500">{item.slNo}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-stone-600 font-mono text-[10px]">{item.barcode}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-stone-700">{item.description}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-center text-stone-500">{item.hsCode}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-center text-stone-500">{item.countryOfOrigin}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-600">{item.qty.toFixed(2)}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-600">{item.price.toFixed(2)}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-600">{item.taxableValue.toFixed(2)}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-500">{item.vat.toFixed(2)}</td>
// //       <td className="border border-stone-200 px-2 py-1.5 text-right font-semibold text-stone-800">{item.amount.toFixed(2)}</td>
// //     </tr>
// //   ));

// //   const BottomBlock = () => (
// //     <div>
// //       <section className="grid grid-cols-2 gap-4 px-10 pt-6 pb-2">
// //         <div className="text-[12px] text-stone-600 space-y-1 self-end">
// //           <p><span className="text-stone-400 font-medium">Currency : </span><span className="font-semibold text-stone-700">{invoice.currency}</span></p>
// //           <p><span className="text-stone-400 font-medium">In Words : </span><span className="font-semibold text-stone-700">{summary.inWords}</span></p>
// //         </div>
// //         <div className="text-[12px]">
// //           <table className="ml-auto"><tbody>
// //             {[
// //               { label: "Total (Incl VAT)", value: summary.totalInclVat },
// //               { label: "Discount", value: summary.discount },
// //               { label: "SubTotal (Excl. VAT)", value: summary.subtotalExclVat },
// //               { label: "Total VAT", value: summary.totalVat },
// //             ].map((row) => (
// //               <tr key={row.label}>
// //                 <td className="pr-3 py-0.5 text-right text-stone-500">{row.label}</td>
// //                 <td className="px-2 text-stone-400">:</td>
// //                 <td className="text-right font-semibold text-stone-700 tabular-nums pl-3">{row.value.toFixed(2)}</td>
// //               </tr>
// //             ))}
// //             <tr className="border-t border-stone-300">
// //               <td className="pr-3 pt-2 text-right font-bold text-stone-800">Net Amount</td>
// //               <td className="px-2 pt-2 font-bold text-stone-800">:</td>
// //               <td className="text-right pt-2 font-extrabold text-lg text-stone-900 tabular-nums pl-3">{summary.netAmount.toFixed(2)}</td>
// //             </tr>
// //           </tbody></table>
// //         </div>
// //       </section>
// //       <div className="mx-10 my-4 border-t border-stone-300" />
// //       <section className="px-10 pb-3">
// //         <p className="text-[12px] font-bold text-stone-700 mb-1.5">Terms &amp; Conditions:</p>
// //         <div className="text-[11px] text-stone-500 leading-relaxed space-y-0.5">
// //           {terms.map((t, i) => <p key={i}>{t}</p>)}
// //         </div>
// //       </section>
// //       <div className="mx-10 my-3 border-t border-stone-300" />
// //       <footer className="px-10 pb-6">
// //         <p className="text-[10px] text-stone-500 text-center leading-relaxed">
// //           Contact Number: {company.phone} &nbsp;|&nbsp; Email: {company.email} &nbsp; {company.supportEmail} &nbsp;|&nbsp; Instagram: {company.instagram} &nbsp;|&nbsp; Website: {company.website}
// //         </p>
// //       </footer>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/40 print:bg-white print:min-h-0">
// //       <style>{`
// //         @media print {
// //           @page { size: A4; margin: 10mm 8mm; }
// //           html, body { margin: 0 !important; padding: 0 !important; }
// //         }
// //         .a4-page {
// //           width: 794px;
// //           height: ${PAGE_CONTENT_HEIGHT_PX}px;
// //         }
// //         @media print {
// //           .a4-page {
// //             width: 100% !important;
// //             box-shadow: none !important;
// //             margin-bottom: 0 !important;
// //           }
// //           .a4-page:not(:last-child) {
// //             page-break-after: always;
// //           }
// //         }
// //       `}</style>

// //       {/* <div className="sticky top-0 z-50 print:hidden">
// //         <div className="bg-white/80 backdrop-blur-xl border-b border-stone-200 shadow-sm">
// //           <div className="flex items-center justify-end px-4 sm:px-6 py-3">
// //             <button
// //               onClick={handlePrint}
// //               className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 px-4 sm:px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-amber-900/20 transition-all duration-300 hover:shadow-amber-900/40 hover:scale-[1.03] active:scale-95 cursor-pointer whitespace-nowrap"
// //             >
// //               <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
// //               </svg>
// //               Print / PDF
// //             </button>
// //           </div>
// //         </div>
// //       </div> */}

// //             <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 print:hidden">
// //         <button
// //           onClick={handlePrint}
// //           className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 px-4 sm:px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-amber-900/20 transition-all duration-300 hover:shadow-amber-900/40 hover:scale-[1.03] active:scale-95 cursor-pointer whitespace-nowrap"
// //         >
// //           <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
// //           </svg>
// //           Print / PDF
// //         </button>
// //       </div>

// //       {/* Hidden measurement rig — real DOM, off-screen, used once to compute exact heights */}
// //       <div style={{ position: "absolute", top: -99999, left: -99999, visibility: "hidden", width: 794 }} aria-hidden="true">
// //         <div ref={measureFirstHeaderRef}>
// //           <FirstHeader />
// //           <table className="w-full border-collapse text-[11px]"><thead><ColumnHeaderRow /></thead></table>
// //         </div>
// //         <div ref={measureRepeatHeaderRef}>
// //           <RepeatHeader />
// //           <table className="w-full border-collapse text-[11px]"><thead><ColumnHeaderRow /></thead></table>
// //         </div>
// //         <table className="w-full border-collapse text-[11px]">
// //           <tbody><ItemRow ref={measureRowRef} item={items[0]} /></tbody>
// //         </table>
// //         <div ref={measureBottomRef}><BottomBlock /></div>
// //       </div>

// //       {/* Final paginated invoice */}
// //       <div className="py-8 px-4 print:p-0 print:py-0">
// //         {!pages && <div className="text-center text-stone-400 text-sm py-20">Preparing invoice…</div>}
// //         {pages && pages.map((page, pi) => (
// //           <div key={pi} className="a4-page mx-auto bg-white shadow-xl shadow-stone-300/50 ring-1 ring-stone-200/40 mb-8 flex flex-col">
// //             {page.isFirst ? <FirstHeader /> : <RepeatHeader />}
// //             {page.items.length > 0 && (
// //               <table className="w-full border-collapse text-[11px]">
// //                 <thead><ColumnHeaderRow /></thead>
// //                 <tbody>
// //                   {page.items.map((item) => <ItemRow key={item.slNo} item={item} />)}
// //                 </tbody>
// //               </table>
// //             )}
// //             {page.showBottom && (
// //               <div className="mt-auto">
// //                 <BottomBlock />
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// //kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// import React, { useState, useRef, useLayoutEffect } from "react";
// import fammLogo from "../assets/fammlogo.jfif.jpeg";
// import invoiceData from "../data/invoiceData";

// const MM_TO_PX = 96 / 25.4;
// const PAGE_CONTENT_HEIGHT_MM = 277; // A4 (297mm) minus 10mm top + 10mm bottom @page margin
// const PAGE_CONTENT_HEIGHT_PX = PAGE_CONTENT_HEIGHT_MM * MM_TO_PX;

// export default function Invoice() {
//   const { company, invoice, customer, items, summary, terms } = invoiceData;
//   const [pages, setPages] = useState(null);

//   const measureFirstHeaderRef = useRef(null);
//   const measureRepeatHeaderRef = useRef(null);
//   const measureRowRef = useRef(null);
//   const measureBottomRef = useRef(null);

//   useLayoutEffect(() => {
//     const firstHeaderH = measureFirstHeaderRef.current.getBoundingClientRect().height;
//     const repeatHeaderH = measureRepeatHeaderRef.current.getBoundingClientRect().height;
//     const rowH = measureRowRef.current.getBoundingClientRect().height;
//     const bottomH = measureBottomRef.current.getBoundingClientRect().height;

//     const builtPages = [];
//     let rowsOnPage = [];
//     let capacity = PAGE_CONTENT_HEIGHT_PX - firstHeaderH;
//     let isFirst = true;

//     items.forEach((item) => {
//       if (rowH > capacity && rowsOnPage.length > 0) {
//         builtPages.push({ items: rowsOnPage, isFirst });
//         rowsOnPage = [];
//         isFirst = false;
//         capacity = PAGE_CONTENT_HEIGHT_PX - repeatHeaderH;
//       }
//       rowsOnPage.push(item);
//       capacity -= rowH;
//     });
//     builtPages.push({ items: rowsOnPage, isFirst });

//     const lastPage = builtPages[builtPages.length - 1];
//     const lastHeaderH = lastPage.isFirst ? firstHeaderH : repeatHeaderH;
//     const remainingOnLast = PAGE_CONTENT_HEIGHT_PX - (lastHeaderH + lastPage.items.length * rowH);

//     const finalPages = builtPages.map((p) => ({ ...p, showBottom: false }));
//     if (bottomH <= remainingOnLast) {
//       finalPages[finalPages.length - 1].showBottom = true;
//     } else {
//       finalPages.push({ items: [], isFirst: false, showBottom: true });
//     }

//     setPages(finalPages);
//   }, [items]);

//   const handlePrint = () => window.print();

//   const FirstHeader = () => (
//     <div className="px-10 pt-8 pb-4">
//       <div className="flex items-center gap-5">
//         <img src={fammLogo} alt="FAMM Logo" className="h-24 w-24 rounded-full object-cover border-2 border-amber-700/20 shrink-0" />
//         <div className="flex-1 text-center">
//           <h1 className="text-[17px] font-bold text-amber-900 tracking-wide leading-tight">{company.name}</h1>
//           <p className="mt-1 text-[13px] font-semibold text-amber-800/70">{company.address}</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4 pt-4 pb-1">
//         <div className="text-[12px] leading-relaxed text-stone-700">
//           <p className="mb-0.5"><span className="text-stone-500">To :</span> <span className="font-bold text-stone-800">{customer.name}</span></p>
//           <div className="ml-4 text-stone-600">
//             <p>{customer.address}</p>
//             <p>{customer.area}</p>
//             <p>{customer.city}</p>
//             <p>{customer.phone}</p>
//           </div>
//           {customer.trn && <p className="mt-1"><span className="text-stone-500">TRN:</span> {customer.trn}</p>}
//         </div>
//         <div className="text-right text-[12px]">
//           <p className="text-[18px] font-bold text-stone-800 tracking-wide mb-2">TAX INVOICE</p>
//           <p className="text-stone-600"><span className="text-stone-400">TRN : </span><span className="font-semibold text-stone-700">{company.trn}</span></p>
//           <table className="ml-auto mt-2 text-stone-600"><tbody>
//             <tr><td className="pr-3 text-right text-stone-400">Invoice No</td><td className="px-1 text-stone-400">:</td><td className="font-bold text-stone-800">{invoice.number}</td></tr>
//             <tr><td className="pr-3 text-right text-stone-400">Date</td><td className="px-1 text-stone-400">:</td><td className="text-stone-700">{invoice.date}</td></tr>
//           </tbody></table>
//         </div>
//       </div>
//     </div>
//   );

//   const RepeatHeader = () => (
//     <div className="px-10 pt-6 pb-3">
//       <div className="flex items-center gap-5">
//         <img src={fammLogo} alt="FAMM Logo" className="h-16 w-16 rounded-full object-cover border-2 border-amber-700/20 shrink-0" />
//         <div className="flex-1 text-center">
//           <h1 className="text-[15px] font-bold text-amber-900 tracking-wide leading-tight">{company.name}</h1>
//           <p className="mt-0.5 text-[11px] font-semibold text-amber-800/70">{company.address}</p>
//         </div>
//       </div>
//     </div>
//   );

//   const ColumnHeaderRow = () => (
//     <tr className="bg-amber-900 text-white">
//       <th className="border border-amber-800 px-2 py-2.5 text-center font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[32px]">Sl No</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-left font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[95px]">Barcode</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-left font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap">Description</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-center font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[46px]">HSsss Code</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-center font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[62px]">Origin</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[40px]">Qty</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[52px]">Price</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[68px]">Taxable Val</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[44px]">Vat</th>
//       <th className="border border-amber-800 px-2 py-2.5 text-right font-semibold text-[9px] uppercase tracking-wider whitespace-nowrap w-[60px]">Amount</th>
//     </tr>
//   );

//   const ItemRow = React.forwardRef(({ item }, ref) => (
//     <tr ref={ref} className="hover:bg-amber-50/40">
//       <td className="border border-stone-200 px-2 py-1.5 text-center text-stone-500">{item.slNo}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-stone-600 font-mono text-[10px]">{item.barcode}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-stone-700">{item.description}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-center text-stone-500">{item.hsCode}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-center text-stone-500">{item.countryOfOrigin}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-600">{item.qty.toFixed(2)}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-600">{item.price.toFixed(2)}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-600">{item.taxableValue.toFixed(2)}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-right text-stone-500">{item.vat.toFixed(2)}</td>
//       <td className="border border-stone-200 px-2 py-1.5 text-right font-semibold text-stone-800">{item.amount.toFixed(2)}</td>
//     </tr>
//   ));

//   const BottomBlock = () => (
//     <div>
//       <section className="grid grid-cols-2 gap-4 px-10 pt-6 pb-2">
//         <div className="text-[12px] text-stone-600 space-y-1 self-end">
//           <p><span className="text-stone-400 font-medium">Currency : </span><span className="font-semibold text-stone-700">{invoice.currency}</span></p>
//           <p><span className="text-stone-400 font-medium">In Words : </span><span className="font-semibold text-stone-700">{summary.inWords}</span></p>
//         </div>
//         <div className="text-[12px]">
//           <table className="ml-auto"><tbody>
//             {[
//               { label: "Total (Incl VAT)", value: summary.totalInclVat },
//               { label: "Discount", value: summary.discount },
//               { label: "SubTotal (Excl. VAT)", value: summary.subtotalExclVat },
//               { label: "Total VAT", value: summary.totalVat },
//             ].map((row) => (
//               <tr key={row.label}>
//                 <td className="pr-3 py-0.5 text-right text-stone-500">{row.label}</td>
//                 <td className="px-2 text-stone-400">:</td>
//                 <td className="text-right font-semibold text-stone-700 tabular-nums pl-3">{row.value.toFixed(2)}</td>
//               </tr>
//             ))}
//             <tr className="border-t border-stone-300">
//               <td className="pr-3 pt-2 text-right font-bold text-stone-800">Net Amount</td>
//               <td className="px-2 pt-2 font-bold text-stone-800">:</td>
//               <td className="text-right pt-2 font-extrabold text-lg text-stone-900 tabular-nums pl-3">{summary.netAmount.toFixed(2)}</td>
//             </tr>
//           </tbody></table>
//         </div>
//       </section>
//       <div className="mx-10 my-4 border-t border-stone-300" />
//       <section className="px-10 pb-3">
//         <p className="text-[12px] font-bold text-stone-700 mb-1.5">Terms &amp; Conditions:</p>
//         <div className="text-[11px] text-stone-500 leading-relaxed space-y-0.5">
//           {terms.map((t, i) => <p key={i}>{t}</p>)}
//         </div>
//       </section>
//       <div className="mx-10 my-3 border-t border-stone-300" />
//       <footer className="px-10 pb-6">
//         <p className="text-[10px] text-stone-500 text-center leading-relaxed">
//           Contact Number: {company.phone} &nbsp;|&nbsp; Email: {company.email} &nbsp; {company.supportEmail} &nbsp;|&nbsp; Instagram: {company.instagram} &nbsp;|&nbsp; Website: {company.website}
//         </p>
//       </footer>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/40 print:bg-white print:min-h-0">
//       <style>{`
//         @media print {
//           @page { size: A4; margin: 10mm 0mm; }
//           html, body { margin: 0 !important; padding: 0 !important; }
//         }
//         .a4-page {
//           width: 794px;
//           height: ${PAGE_CONTENT_HEIGHT_PX}px;
//         }
//         @media print {
//           .a4-page {
//             width: 210mm !important;
//             box-shadow: none !important;
//             margin-bottom: 0 !important;
//           }
//           .a4-page:not(:last-child) {
//             page-break-after: always;
//           }
//         }
//       `}</style>

//       <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 print:hidden">
//         <button
//           onClick={handlePrint}
//           className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 px-4 sm:px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-amber-900/20 transition-all duration-300 hover:shadow-amber-900/40 hover:scale-[1.03] active:scale-95 cursor-pointer whitespace-nowrap"
//         >
//           <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
//           </svg>
//           Print / PDF
//         </button>
//       </div>

//       {/* Hidden measurement rig — real DOM, off-screen, used once to compute exact heights */}
//       <div style={{ position: "absolute", top: -99999, left: -99999, visibility: "hidden", width: 794 }} aria-hidden="true">
//         <div ref={measureFirstHeaderRef}>
//           <FirstHeader />
//           <table className="w-full border-collapse text-[11px]"><thead><ColumnHeaderRow /></thead></table>
//         </div>
//         <div ref={measureRepeatHeaderRef}>
//           <RepeatHeader />
//           <table className="w-full border-collapse text-[11px]"><thead><ColumnHeaderRow /></thead></table>
//         </div>
//         <table className="w-full border-collapse text-[11px]">
//           <tbody><ItemRow ref={measureRowRef} item={items[0]} /></tbody>
//         </table>
//         <div ref={measureBottomRef}><BottomBlock /></div>
//       </div>

//       {/* Final paginated invoice */}
//       <div className="py-8 px-4 print:p-0 print:py-0">
//         {!pages && <div className="text-center text-stone-400 text-sm py-20">Preparing invoice…</div>}
//         {pages && pages.map((page, pi) => (
//           <div key={pi} className="a4-page mx-auto bg-white shadow-xl shadow-stone-300/50 ring-1 ring-stone-200/40 mb-8 flex flex-col">
//             {page.isFirst ? <FirstHeader /> : <RepeatHeader />}
//             {page.items.length > 0 && (
//               <table className="w-full border-collapse text-[11px]">
//                 <thead><ColumnHeaderRow /></thead>
//                 <tbody>
//                   {page.items.map((item) => <ItemRow key={item.slNo} item={item} />)}
//                 </tbody>
//               </table>
//             )}
//             {page.showBottom && (
//               <div className="mt-auto">
//                 <BottomBlock />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

import React, { useState, useRef, useLayoutEffect } from "react";
import fammLogo from "../assets/fammlogo.jfif.jpeg";
import invoiceData from "../data/invoiceData";
import "./Invoice.css";

const PAGE_WIDTH = 648;
const PAGE_HEIGHT = 842;

export default function Invoice() {
  const { company, invoice, customer, items, summary, terms } = invoiceData;

const calculatedSubtotal = items.reduce(
  (total, item) => total + Number(item.taxableValue || 0),
  0
);

const calculatedVat = items.reduce(
  (total, item) => total + Number(item.vat || 0),
  0
);

const calculatedTotal = calculatedSubtotal + calculatedVat;

const calculatedDiscount = Number(summary.discount || 0);

const calculatedNetAmount = calculatedTotal - calculatedDiscount;

  const [pages, setPages] = useState(null);

  const firstHeaderRef = useRef(null);
  const repeatHeaderRef = useRef(null);
  const rowRef = useRef(null);
  const bottomRef = useRef(null);

  // --------------------------------------------------
  // PAGE CALCULATION
  // --------------------------------------------------

  useLayoutEffect(() => {
    if (
      !firstHeaderRef.current ||
      !repeatHeaderRef.current ||
      !rowRef.current ||
      !bottomRef.current
    ) {
      return;
    }

    const firstHeaderHeight =
      firstHeaderRef.current.getBoundingClientRect().height;

    const repeatHeaderHeight =
      repeatHeaderRef.current.getBoundingClientRect().height;

    const rowHeight = rowRef.current.getBoundingClientRect().height;

    const bottomHeight = bottomRef.current.getBoundingClientRect().height;

    const tableHeaderHeight = 33;

    // Gap between table and total calculation section
    const tableBottomGap = 20;

    const pagesArray = [];

    let currentItems = [];
    let currentHeight = firstHeaderHeight + tableHeaderHeight;

    let firstPage = true;

    // --------------------------------------------------
    // CALCULATE ITEM PAGES
    // --------------------------------------------------

    items.forEach((item) => {
      const isLastItem = item === items[items.length - 1];

      // Space required if this item is placed on the page
      let requiredHeight = rowHeight;

      // On the last data page, we also need:
      // gap + bottom section
      if (isLastItem) {
        requiredHeight += tableBottomGap + bottomHeight;
      }

      // Check if item fits
      if (
        currentHeight + requiredHeight > PAGE_HEIGHT &&
        currentItems.length > 0
      ) {
        // Finish current page
        pagesArray.push({
          items: currentItems,
          firstPage,
          showBottom: false,
        });

        // Start next page
        currentItems = [];
        firstPage = false;

        currentHeight = repeatHeaderHeight + tableHeaderHeight;
      }

      currentItems.push(item);
      currentHeight += rowHeight;
    });

    // --------------------------------------------------
    // ADD LAST DATA PAGE
    // --------------------------------------------------

    if (currentItems.length > 0) {
      pagesArray.push({
        items: currentItems,
        firstPage,
        showBottom: true,
      });
    }

    // --------------------------------------------------
    // NO DATA
    // --------------------------------------------------

    if (pagesArray.length === 0) {
      pagesArray.push({
        items: [],
        firstPage: true,
        showBottom: true,
      });
    }

    setPages(pagesArray);
  }, [items]);

  // --------------------------------------------------
  // DOWNLOAD / PRINT
  // --------------------------------------------------

  const handleDownloadPDF = () => {
    window.print();
  };

  // --------------------------------------------------
  // FIRST HEADER
  // --------------------------------------------------

  const FirstHeader = () => {
    return (
      <div className="invoice-first-header">
        {/* TOP COMPANY HEADER */}
        <div className="company-header">
          <div className="logo-wrapper">
            <img src={fammLogo} alt="FAMM" className="invoice-logo" />
          </div>

          <div className="company-info">
            <div className="company-name">{company.name}</div>

            <div className="company-address">{company.address}</div>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="header-line" />

        {/* CUSTOMER + INVOICE INFORMATION */}
        <div className="invoice-information">
          {/* CUSTOMER */}
          <div className="customer-section">
            <div className="customer-row">
              <span className="label">To :</span>

              <span className="customer-name">{customer.name}</span>
            </div>

            <div className="customer-address">
              <div>{customer.address}</div>

              <div>{customer.area}</div>

              <div>{customer.city}</div>

              <div>{customer.phone}</div>
            </div>

            {customer.trn && (
              <div className="customer-trn">
                <span className="label">TRN:</span>

                <span>{customer.trn}</span>
              </div>
            )}
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="vertical-divider" />

          {/* INVOICE DETAILS */}
          <div className="invoice-details">
            <div className="tax-invoice">TAX INVOICE</div>

            <div className="trn-row">
              <span className="details-label">TRN :</span>

              <span>{company.trn}</span>
            </div>

            <div className="details-table">
              <div className="details-row">
                <span className="details-title">Invoice No</span>

                <span className="colon">:</span>

                <span className="details-value bold">{invoice.number}</span>
              </div>

              <div className="details-row">
                <span className="details-title">Date</span>

                <span className="colon">:</span>

                <span className="details-value">{invoice.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --------------------------------------------------
  // REPEATED HEADER
  // --------------------------------------------------

  const RepeatHeader = () => {
    return (
      <div className="repeat-header">
        <img src={fammLogo} alt="FAMM" className="repeat-logo" />

        <div className="repeat-company">
          <div className="repeat-company-name">{company.name}</div>

          <div className="repeat-company-address">{company.address}</div>
        </div>
      </div>
    );
  };

  // --------------------------------------------------
  // TABLE HEADER
  // --------------------------------------------------

  const ColumnHeaderRow = () => {
    return (
      <tr className="table-header-row">
        <th className="sl-column">
          <span>Sl</span>
          <span>No</span>
        </th>

        <th className="barcode-column">Barcode</th>

        <th className="description-column">Description</th>

        <th className="hs-column">
          <span>HS</span>
          <span>Code</span>
        </th>

        <th className="origin-column">
          <span>Country of</span>
          <span>origin</span>
        </th>

        <th className="qty-column">Qty</th>

        <th className="price-column">Price</th>

        <th className="taxable-column">
          <span>Taxable</span>
          <span>Value</span>
        </th>

        <th className="vat-column">Vat</th>

        <th className="amount-column">Amount</th>
      </tr>
    );
  };

  // --------------------------------------------------
  // ITEM ROW
  // --------------------------------------------------

  const ItemRow = React.forwardRef(({ item }, ref) => {
    return (
      <tr ref={ref} className="item-row">
        <td className="center">{item.slNo}</td>

        <td className="barcode-cell">{item.barcode}</td>

        <td className="description-cell">{item.description}</td>

        <td className="center">{item.hsCode}</td>

        <td className="center">{item.countryOfOrigin}</td>

        <td className="right">{Number(item.qty).toFixed(2)}</td>

        <td className="right">{Number(item.price).toFixed(2)}</td>

        <td className="right">{Number(item.taxableValue).toFixed(2)}</td>

        <td className="right">{Number(item.vat).toFixed(2)}</td>

        <td className="right amount-cell">{Number(item.amount).toFixed(2)}</td>
      </tr>
    );
  });

  // --------------------------------------------------
  // BOTTOM SECTION
  // --------------------------------------------------

  const BottomBlock = () => {
    return (
      <div className="bottom-block">
        {/* SUMMARY */}
        <div className="summary-section">
          {/* LEFT */}
          <div className="currency-section">
            <div className="currency-row">
              <span className="bottom-label">Currency :</span>

              <span>{invoice.currency}</span>
            </div>

            <div className="words-row">
              <span className="bottom-label">In Words :</span>

              <span>{summary.inWords}</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="totals-section">
            <div className="total-row">
              <span>Total (Incl VAT)</span>

              <span className="colon-total">:</span>

              <span className="total-value">
{calculatedTotal.toFixed(2)}              </span>
            </div>

            <div className="total-row">
              <span>Discount</span>

              <span className="colon-total">:</span>

              <span className="total-value">
{calculatedDiscount.toFixed(2)}              </span>
            </div>

            <div className="total-row">
              <span>SubTotal (Excl. VAT)</span>

              <span className="colon-total">:</span>

              <span className="total-value">
{calculatedSubtotal.toFixed(2)}              </span>
            </div>

            <div className="total-row">
              <span>Total VAT</span>

              <span className="colon-total">:</span>

              <span className="total-value">
{calculatedVat.toFixed(2)}              </span>
            </div>

            {/* NET AMOUNT */}
            <div className="net-amount-row">
              <span className="net-label">Net Amount</span>

              <span className="net-colon">:</span>

              <span className="net-value">
{calculatedNetAmount.toFixed(2)}              </span>
            </div>
          </div>
        </div>

        {/* LINE */}
        <div className="section-line" />

        {/* TERMS */}
        <div className="terms-section">
          <div className="terms-title">Terms &amp; Conditions:</div>

          <div className="terms-list">
            {terms.map((term, index) => (
              <div key={index}>{term}</div>
            ))}
          </div>
        </div>

        {/* LINE */}
        <div className="section-line footer-line" />
      </div>
    );
  };

  //..........................................

  const InvoiceFooter = ({ pageNumber, totalPages }) => {
    return (
      <div className="invoice-footer">
        <div className="footer-top-line"></div>

        <div className="footer-content">
          <div className="footer-contact">
            Contact Number: +971502409979 | Email: info@famm.ae
            customerservice@famm.ae | Instagram: @FAMM.ae | Website: FAMM.ae
          </div>

          <div className="page-number">
            {pageNumber} of {totalPages}
          </div>
        </div>
      </div>
    );
  };

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------

  return (
    <div className="invoice-app">
      {/* DOWNLOAD BUTTON */}
      <div className="download-wrapper print-hidden">
        <button onClick={handleDownloadPDF} className="download-button">
          Download PDF
        </button>
      </div>

      {/* ------------------------------------------------
          MEASUREMENT AREA
      ------------------------------------------------ */}
      <div className="measurement-container" aria-hidden="true">
        <div ref={firstHeaderRef}>
          <FirstHeader />

          <table className="invoice-table">
            <thead>
              <ColumnHeaderRow />
            </thead>
          </table>
        </div>

        <div ref={repeatHeaderRef}>
          <RepeatHeader />

          <table className="invoice-table">
            <thead>
              <ColumnHeaderRow />
            </thead>
          </table>
        </div>

        <table className="invoice-table">
          <tbody>
            {items.length > 0 && <ItemRow ref={rowRef} item={items[0]} />}
          </tbody>
        </table>

        <div ref={bottomRef}>
          <BottomBlock />
        </div>
      </div>

      {/* ------------------------------------------------
          INVOICE PAGES
      ------------------------------------------------ */}
      <div className="invoice-preview">
        {!pages && <div className="loading">Preparing invoice...</div>}

        {pages &&
          pages.map((page, pageIndex) => (
            <div key={pageIndex} className="invoice-page">
              {/* HEADER */}
              {page.firstPage ? <FirstHeader /> : <RepeatHeader />}

              {/* TABLE */}
              {page.items.length > 0 && (
                <table className="invoice-table">
                  <thead>
                    <ColumnHeaderRow />
                  </thead>

                  <tbody>
                    {page.items.map((item) => (
                      <ItemRow key={item.slNo} item={item} />
                    ))}
                  </tbody>
                </table>
              )}

              {/* BOTTOM */}
              {page.showBottom && (
                <div className="bottom-wrapper">
                  <BottomBlock />
                </div>
              )}

              <InvoiceFooter
                pageNumber={pageIndex + 1}
                totalPages={pages.length}
              />
            </div>
          ))}
      </div>

      {/* ==================================================
          ALL STYLING
      ================================================== */}
    </div>
  );
}
