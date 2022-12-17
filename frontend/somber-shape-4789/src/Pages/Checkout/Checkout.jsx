import React from 'react'
import "./checkout.css"

export default function Checkout() {
    return (
        <div className="mainscreen">
{/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg" className="bgimg " alt /> */}
            <div className="card">
                <div className="leftside">
                    <img src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png" className="product" alt="Shoes" />
                </div>
                <div className="rightside">
                    <form>
                        <h1>CheckOut</h1>
                        <h2>Payment Information</h2>
                        <p>Cardholder Name</p>
                        <input type="text" className="inputbox" name="name" required />
                        <p>Card Number</p>
                        <input type="number" className="inputbox" name="card_number" id="card_number" required />
                        <p>Card Type</p>
                        <select className="inputbox" name="card_type" id="card_type" required>
                            <option value>--Select a Card Type--</option>
                            <option value="Visa">Visa</option>
                            <option value="RuPay">RuPay</option>
                            <option value="MasterCard">MasterCard</option>
                        </select>
                        <div className="expcvv">
                            <p className="expcvv_text">Expiry</p>
                            <input type="date" className="inputbox" name="exp_date" id="exp_date" required />
                            <p className="expcvv_text2">CVV</p>
                            <input type="password" className="inputbox" name="cvv" id="cvv" required />
                        </div>
                        <p />
                        <button type="submit" className="button">CheckOut</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
