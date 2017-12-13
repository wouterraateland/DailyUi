import React from 'react'
import './styles.css'

const invoiceLines = [
  { description: "Marketing Research", price: 900, quantity: 1 },
  { description: "Design", price: 1200, quantity: 1 },
  { description: "Development", price: 2200, quantity: 1 },
  { description: "Deployment", price: 500, quantity: 1 },
]

const money = n => `€${n === Math.floor(n) ? n : n.toFixed(2)}`

const Project = () => (
  <div className="Project-046">
    <div className="Project-046-container shadow">
      <div className="Project-046-header row">
        <div className="col-8 nopadding">
          <div className="Project-046-logo">WRW</div>
          <div className="Project-046-invoice-title">Invoice #17.203</div>
          <div className="Project-046-invoice-date">December 12, 2017</div>
        </div>
        <div className="col-4 nopadding">
          <div className="Project-046-client right">
            <div className="Project-046-client-title">Invoice to</div>
            <div className="Project-046-client-info">
              Example Client<br />
              info@client.com<br />
              +31 6 12 34 56 78
            </div>
          </div>
        </div>
      </div>
      <div className="Project-046-body">
        <table className="Project-046-invoice-table">
          <thead className="Project-046-invoice-header">
            <tr>
              <th className="label l">Description</th>
              <th className="label l">Price</th>
              <th className="label c">QTY</th>
              <th className="label r">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {invoiceLines.map(({ description, price, quantity }) => (
              <tr className="Project-046-invoice-line" key={description}>
                <td className="l">{description}</td>
                <td className="l">{money(price)}</td>
                <td className="c">{quantity}</td>
                <td className="r">{money(price*quantity)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="Project-046-invoice-footer">
            <tr>
              <td />
              <td className="label l" colSpan={2}>Subtotal</td>
              <td className="r">{money(invoiceLines.reduce((acc, l) => acc + l.price * l.quantity, 0))}</td>
            </tr>
            <tr>
              <td />
              <td className="label l" colSpan={2}>VAT (21%)</td>
              <td className="r">{money(0.21 * invoiceLines.reduce((acc, l) => acc + l.price * l.quantity, 0))}</td>
            </tr>
            <tr className="Project-046-invoice-total">
              <td />
              <td className="label l" colSpan={2}>Total</td>
              <td className="r">{money(1.21 * invoiceLines.reduce((acc, l) => acc + l.price * l.quantity, 0))}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="Project-046-footer">
        <div className="Project-046-footer-text center">Thank you for ordering</div>
      </div>
    </div>
  </div>
)

export default Project
