

import React, { useState, useRef, useLayoutEffect } from "react";
import fammLogo from "../assets/fammlogo.jfif.jpeg";
import invoiceData from "../data/invoiceData";
import "./Invoice.css";

const PAGE_WIDTH = 648;
const PAGE_HEIGHT = 842;

export default function Invoice() {
  const { company, invoice, customer, items, summary, terms } = invoiceData;



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
        {customer.address && <div>{customer.address}</div>} 
        {customer.area && <div>{customer.area}</div>} 
        {customer.city && <div>{customer.city}</div>} 
        {customer.phone && <div>{customer.phone}.</div>} 
      </div> 

      <div className="customer-trn"> 
        <span className="label">TRN:</span> 
        <span>{customer.trn || ''}</span> 
      </div> 
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
                {Number(summary.total).toFixed(2)}              </span>
            </div>

            <div className="total-row">
              <span>Discount</span>

              <span className="colon-total">:</span>

              <span className="total-value">
                {Number(summary.discount).toFixed(2)}              </span>
            </div>

            <div className="total-row">
              <span>SubTotal (Excl. VAT)</span>

              <span className="colon-total">:</span>

              <span className="total-value">
                {Number(summary.subTotal).toFixed(2)}              </span>
            </div>

            <div className="total-row">
              <span>Total VAT</span>

              <span className="colon-total">:</span>

              <span className="total-value">
                {Number(summary.vat).toFixed(2)}             </span>
            </div>

            {/* NET AMOUNT */}
            <div className="net-amount-row">
              <span className="net-label">Net Amount</span>

              <span className="net-colon">:</span>

              <span className="net-value">
                {Number(summary.netAmount).toFixed(2)}             </span>
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
              {/* BOTTOM + FOOTER GROUP (always pinned to bottom of page) */}
              <div className="page-bottom-group">
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
            </div>
          ))}
      </div>

      {/* ==================================================
          ALL STYLING
      ================================================== */}
    </div>
  );
}
