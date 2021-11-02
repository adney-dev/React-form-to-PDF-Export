import React from "react";
import './pdf.css';

export default function PDFData() {
  return (
    <div id="pdf-element" className="container">
      <div className="title">
        First Bank of the Lake<br /> Small Loan Credit Memo
      </div>
      <div className="content" style={{ marginTop: "15px" }}>
        {/* Table 1 */}
        <table>
          <tr>
            <td width="50%" className="border-t-l">
              Borrower Name <br />
              <b>Snov Industries, LLC</b>
            </td>
            <td width="50%" className="border-t-l-r">
              Trade Name <br />
              <b>Snov</b>
            </td>
          </tr>
          <tr>
            <td width="50%" className="border-t-l-b">
              EPC Name / OC Name <br />
              <b>Snov Industries, LLC</b>
            </td>
            <td width="50%">
              Physical Address <br />
              <b>80 South Main St, Hanover New Hampshire, 03755</b>
            </td>
          </tr>
        </table>

        {/* Table 2 */}
        <table>
          <tr>
            <td width="25%" className="border-t-l">
              Date Established<br />
              <b>04/09/1977</b>
            </td>
            <td width="25%" className="border-t-l">
              SOP Version<br />
              <b>SOP 50 10 6</b>
            </td>
            <td width="25%" className="border-t-l">
              Prime Rate<br />
              <b>3.25g as of 3/16/20</b>
            </td>
            <td width="25%" className="border-t-l-r">
              E-Tran Score <br />
              <b>need api</b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">
              Aplication Date<br />
              <b>11/02/2021</b>
            </td>
            <td width="25%" className="border-t-l">
              Date Received<br />
              <b>11/03/2021</b>
            </td>
            <td width="25%" className="border-t-l">
              Loan Officer<br />
              <b>Annemarie Murphy</b>
            </td>
            <td width="25%" className="border-t-l-r">
              Underwriter <br />
              <b>Frank Isganitis</b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">
              Loan Amount Requested<br />
              <b>$750,000.00</b>
            </td>
            <td width="25%" className="border-t-l">
              SBA Guaranty (%)<br />
              <b>75% [Dropdown?]</b>
            </td>
            <td width="25%" className="border-t-l">
              Guaranteed Amount<br />
              <b>$562,500.00</b>
            </td>
            <td width="25%" className="border-t-l-r">
              Unguaranteed Amount <br />
              <b>$187,500.00</b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">
              Interest Rate<br />
              <b>6%</b>
            </td>
            <td width="25%" className="border-t-l">
              Adjustment Period<br />
              <b>What is this?</b>
            </td>
            <td width="25%" className="border-t-l">
              Term (Months)<br />
              <b>120</b>
            </td>
            <td width="25%" className="border-t-l-r">
              Monthly and Annual Payment <br />
              <b></b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">
              Prepayment Penalty<br />
              <b>1%</b>
            </td>
            <td width="25%" className="border-t-l">
              Cap / Floor<br />
              <b></b>
            </td>
            <td width="25%" className="border-t-l">
              Annual Servicing Fee<br />
              <b>2</b>
            </td>
            <td width="25%" className="border-t-l-r">
              SBA Guaranty Fee <br />
              <b>$19,687.50</b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">
              Veteran? See Addendum<br />
              <b>3</b>
            </td>
            <td width="25%" className="border-t-l">
              Bank Packagine Fee<br />
              <b>$2,500.00</b>
            </td>
            <td width="25%" className="border-t-l">
              SBA Submission<br />
              <b></b>
            </td>
            <td width="25%" className="border-t-l-r">
              Risk Rating <br />
              <b>risk_rating</b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">
              Referral Source <br />
              <b>Boefly</b>
            </td>
            <td width="25%" className="border-t-l">
              Referral Fees <br />
              <b>1%</b>
            </td>
            <td width="25%" className="border-t-l">
              Verified Sam.gov - Date<br />
              <b></b>
            </td>
            <td width="25%" className="border-t-l-r">
              Verified Sam.gov - Status <br />
              <b></b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l-b">
              Adherence to Loan Policy <br />
              <b>-</b>
            </td>
            <td width="25%" className="border-t-l-b">
              Collateral Codes <br />
              <b>-</b>
            </td>
            <td width="25%" className="border-t-l-b">
              Class Code <br />
              <b>-</b>
            </td>
            <td width="25%">
              Purpose Code <br />
              <b>-</b>
            </td>
          </tr>
        </table>

        {/* Table 3 */}
        <table>
          <tr>
            <td width="50%" className="border-t-l-b">
              Type of Operation - Primary <br />
              <b>NAICS: 336991</b>
            </td>
            <td width="50%">
              SBA 7(a) Statistics for NAICS <br />
              <b>-</b>
            </td>
          </tr>
        </table>

        {/* Table 4 */}
        <table>
          <tr>
            <td width="33%" className="border-t-l">
              Year: <br />
              <b>2015</b>
            </td>
            <td width="34%" className="border-t-l">
              Year: <br />
              <b>2016</b>
            </td>
            <td width="33%" className="border-t-l-r">
              Year:  <br />
              <b>2017</b>
            </td>
          </tr>
          <tr>
            <td width="33%" className="border-t-l">
              BDSCR <br />
              <b>-</b>
            </td>
            <td width="34%" className="border-t-l">
              BDSCR <br />
              <b>-</b>
            </td>
            <td width="33%" className="border-t-l-r">
              BDSCR <br />
              <b>-</b>
            </td>
          </tr>
          <tr>
            <td width="33%" className="border-t-l-b">
              GDSCR <br />
              <b>-</b>
            </td>
            <td width="34%" className="border-t-l-b">
              GDSCR <br />
              <b>-</b>
            </td>
            <td width="33%">
              GDSCR <br />
              <b>-</b>
            </td>
          </tr>
        </table>

        {/* Table 5 */}
        <table>
          <tr>
            <td width="33%" className="border-t-l-b">
              Loan Committee Action <br />
              <b></b>
            </td>
            <td width="34%" className="border-t-l-b">
              Date: <b>10/30/2021</b>
            </td>
            <td width="33%">
              <br />
              <b></b>
            </td>
          </tr>
        </table>

        {/* Table 6 */}
        <table>
          <tr>
            <td width="25%" className="border-t-l">
              Motion: <b>Motion</b>
            </td>
            <td width="25%" className="border-t-l"></td>
            <td width="25%" className="border-t-l">
              Declined: <b></b>
            </td>
            <td width="25%" className="border-t-l-r">
              Abstained: <b></b>
            </td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l-b">
              Approval: <b></b>
            </td>
            <td width="25%" className="border-t-l-b"></td>
            <td width="25%" className="border-t-l-b"></td>
            <td width="25%"></td>
          </tr>
        </table>

        {/* Table 7 */}
        <table>
          <tr>
            <td width="85%" className="border-t-l">
              Business Income has been verified via a review of the IRS Tax Transcript
            </td>
            <td width="15%" className="border-t-l-r">
              calculation8
            </td>
          </tr>
          <tr>
            <td width="85%" className="border-t-l">
              This application meets all guidelines and is Approved per bank policy
            </td>
            <td width="15%" className="border-t-l-r">
              calculation9
            </td>
          </tr>
          <tr>
            <td width="85%" className="border-t-l">
              The application DOES NOT meet all guidelines. The Underwriter recomments override policy
            </td>
            <td width="15%" className="border-t-l-r">
              calculation10
            </td>
          </tr>
          <tr>
            <td width="85%" className="border-t-l">
              Reason for Override:
            </td>
            <td width="15%" className="border-t-l-r">
              calculation11
            </td>
          </tr>
          <tr>
            <td width="85%" className="border-t-l">
              Mitigating Factors:
            </td>
            <td width="15%" className="border-t-l-r">
              calculation12
            </td>
          </tr>
          <tr>
            <td width="85%" className="border-t-l-b">
              Override Signature:
            </td>
            <td width="15%">
              calculation13
            </td>
          </tr>
        </table>

        <div className="score-title">
          SBA Small Business Score
        </div>

        {/* Table 8 */}
        <table>
          <tr>
            <td width="33%" className="border-t-l-b text-center">
              Business <br />
              <b>Advantage Capital</b>
            </td>
            <td width="34%" className="border-t-l-b text-center">
              Score <br />
              <b>master_score</b>
            </td>
            <td width="33%" className="text-center">
              Acceptable <br />
              <b>calculation15</b>
            </td>
          </tr>
        </table>

        <h5 style={{ marginTop: "15px", lineHeight: 1.3 }}>
          Per the SBAP SOP 50 10 5(J), all application for SBA 7(a) small loans up to and including $350,000 will be entered into E-Tran and an SBA Credit Score will be issued. The subject SBA 7(a) loan request for Advantage Capital received an SBA credit score of calculation14, higher than the SBA minimum score of 140. <br /><br /><br /><br />

          This acceptable SBA credit score satisfies the SBA requirements to consider the following: <br />
          - The credit history of the application Advantage Capital its Associates, and Guarantors including historical performance as well as the potential for long term success
          - The strength of the business <br />
          - Past earnings, projected cash flow, and future prospects <br />
          - The applicant's ability to repay the loan with earnings from the business <br />
        </h5>

        {/* Table 9 */}
        <table>
          <tr>
            <td width="30%" className="border-r">
              <center><b><u>Compliance and Tracking</u></b></center>
            </td>
            <td className="no-border">
              <table style={{ marginTop: 0 }}>
                <tr>
                  <td width="33%" className="border-t-l">
                    <b>MSA Code</b> <br />
                    <b>-</b>
                  </td>
                  <td width="34%" className="border-t-l">
                    <b>State Code</b> <br />
                    <b>-</b>
                  </td>
                  <td width="33%" className="border-tl-r">
                    <b>Country Code</b> <br />
                    <b>-</b>
                  </td>
                </tr>
                <tr width="100%">
                  <td width="33%" className="border-t-l-b">
                    <b>Tract Code</b> <br />
                    <b>-</b>
                  </td>
                  <td width="34%" className="border-t-l-b">
                    <b>Branch</b> <br />
                    <b>-</b>
                  </td>
                  <td width="33%">
                    <b>Call</b> <br />
                    <b>-</b>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        {/* <table>
          <tr>
            <td width="100%" className="border-bottom"><b>Use of Proceeds</b></td>
          </tr>
        </table> */}

        {/* Table 10 */}
        <table>
          <tr>
            <td width="20%" className="border-t-l header-text">Use of Proceeds</td>
            <td width="16%" className="border-t-l header-text">Advantage Capital</td>
            <td width="16%" className="border-t-l header-text">Borrower Cash Equity Injection</td>
            <td width="16%" className="border-t-l header-text">Seller Note</td>
            <td width="16%" className="border-t-l header-text">Other</td>
            <td width="16%" className="border-t-l-r header-text">Total</td>
          </tr>
          <tr>
            <td width="20%" className="border-t-l header-text">Payoff Debt</td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="20%" className="border-t-l header-text">SBA Guaranty Fee</td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="20%" className="border-t-l header-text">Closing Costs & Working Capital</td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="20%" className="border-t-l header-text"><b>Totals</b></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l"></td>
            <td width="16%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="20%" className="border-t-l-b header-text"><b>Percentage</b></td>
            <td width="16%" className="border-t-l-b"></td>
            <td width="16%" className="border-t-l-b"></td>
            <td width="16%" className="border-t-l-b"></td>
            <td width="16%" className="border-t-l-b"></td>
            <td width="16%"></td>
          </tr>
        </table>

        {/* Table 11 */}
        <table>
          <tr>
            <td width="25%" className="border-t-l header-text"><b>Bank SBA Guidelines:</b></td>
            <td width="25%" className="border-t-l header-text">Minimum Criteria</td>
            <td width="25%" className="border-t-l header-text">Actual</td>
            <td width="25%" className="border-t-l-r header-text">Meets Minimum Criteria</td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">E-Tran</td>
            <td width="25%" className="border-t-l header-text">140</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Global DSCR (X.XX:1)</td>
            <td width="25%" className="border-t-l header-text">1.25X</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Guarantor(s) FICO (avg. of all guarantors)</td>
            <td width="25%" className="border-t-l header-text">650 (weighted avg.)</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Years in Business</td>
            <td width="25%" className="border-t-l header-text">2 years</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Guarantor Tax Lien Check</td>
            <td width="25%" className="border-t-l header-text">Clear/Satisfied</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Business Liability Insurance</td>
            <td width="25%" className="border-t-l header-text">Required</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Business Personal Property Insurance</td>
            <td width="25%" className="border-t-l header-text">Required</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l header-text">Worker's Comp.Insurance</td>
            <td width="25%" className="border-t-l header-text">Required(if applicable)</td>
            <td width="25%" className="border-t-l header-text"></td>
            <td width="25%" className="border-t-l-r header-text"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l-b header-text">Franchise</td>
            <td width="25%" className="border-t-l-b header-text">Addendum Needed?</td>
            <td width="25%" className="border-t-l-b header-text"></td>
            <td width="25%" className="header-text"></td>
          </tr>
        </table>

        <div className="score-title">
          SBA Eligibility Review
        </div>

        {/* Table 12 */}
        <table>
          <tr>
            <td width="50%" className="border-t-l">
              NAICS Code:
            </td>
            <td width="50%" className="border-t-l-r">
              336991
            </td>
          </tr>
          <tr>
            <td width="50%" className="border-t-l-b">
              NAICS Name:
            </td>
            <td width="50%"></td>
          </tr>
        </table>

        {/* Table 13 */}
        <table>
          <tr>
            <td width="25%" className="border-t-l">7(a)</td>
            <td width="25%" className="border-t-l">Size Limit</td>
            <td width="25%" className="border-t-l">Subject Business</td>
            <td width="25%" className="border-t-l-r">Including Affiliates</td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">Average Revenue</td>
            <td width="25%" className="border-t-l"></td>
            <td width="25%" className="border-t-l"></td>
            <td width="25%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l-b">Employees</td>
            <td width="25%" className="border-t-l-b"></td>
            <td width="25%" className="border-t-l-b">50</td>
            <td width="25%"></td>
          </tr>
        </table>

        {/* Table 14 */}
        <table>
          <tr>
            <td width="25%" className="border-t-l">504</td>
            <td width="25%" className="border-t-l">Size Limit</td>
            <td width="25%" className="border-t-l">Subject Business</td>
            <td width="25%" className="border-t-l-r">Including Affiliates</td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l">Average Net Income</td>
            <td width="25%" className="border-t-l"></td>
            <td width="25%" className="border-t-l"></td>
            <td width="25%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="25%" className="border-t-l-b">Tangible Net Worth</td>
            <td width="25%" className="border-t-l-b"></td>
            <td width="25%" className="border-t-l-b"></td>
            <td width="25%"></td>
          </tr>
        </table>

        {/* Table 15 */}
        <table>
          <tr>
            <td width="50%" className="border-t-l">
              Which size standard will be used to evaluate the subject business and affiliates?
            </td>
            <td width="50%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="50%" className="border-t-l">
              Business meets compliance with SBA Size Standard?
            </td>
            <td width="50%" className="border-t-l-r"></td>
          </tr>
          <tr>
            <td width="50%" className="border-t-l-b">
              Business & Affiliates meet compliance with SBA Size Standard?
            </td>
            <td width="50%"></td>
          </tr>
        </table>

        <div className="score-title">
          Benefit to Borrower
        </div>
      </div>
    </div>
  );
};