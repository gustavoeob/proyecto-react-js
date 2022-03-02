import React from 'react'
import {CartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'
import useContext from 'react'
import PaymentMethods from '../Navbar/Img/payment-methods.jpeg'

const Checkout = () => {

    // const { cartData } = useContext(CartContext);

  return (
      <>
        <h2 className="checkout-title">Checkout</h2>
        <div className="checkout-container">
          <div className="payment-methods">
            <p className="payment-methods-text">Pay with cards of your choice</p>
            <img className="payment-methods-various"src={PaymentMethods} alt="payment methods"/>
          </div>
          <p className="first-notice">Items marked with * are mandatory</p>
          <div className="delivery-info-container">
            <p className="delivery-info-text">Where do we deliver?</p>
            <form>
              <div className='payment-name-container'>
                <div className="payment-name-input">
                  <label> Name* </label>
                  <input type="text" name="name"></input>
                </div>
                <div className="payment-surname-input">
                  <label> Surname* </label>
                  <input type="text" name="surname"></input>
                </div>
              </div>
              <div className='payment-contact-container'>
                <div className="payment-email-input">
                  <label> Email* </label>
                  <input type="email" name="email"></input>
                </div>
                <div className="payment-phone-number-input">
                  <label> Phone number* </label>
                  <input type="number" name="phone-number" placeholder="Ex. (+1) 123 4567 890"></input>
                </div>
              </div>
                <div className="payment-street-input">
                  <label> Street* </label>
                  <input className='street-input' type="text" name="street" placeholder="Ex. Whoopie St. 1234"></input>
                </div>
              <div className='payment-address-container'>
                <div className="address-details-container">
                  <div className="address-details delivery">
                    <label> Apt. Floor / Unit Number </label>
                    <input type="text" name="city" className='city-input' placeholder="Optional / If needed"></input>
                  </div>
                  <div className="address-city delivery">
                      <label> City* </label>
                      <input type="text" name="city" className='city-input' placeholder=""></input>
                  </div>
                </div>

              </div>

            </form>
          </div>
          <div className="payment-form">
            <p className="billing-address">Billing Address</p>
            <form>
              <div className='payment-name-container'>
                <div className="payment-name-input">
                  <label> Name* </label>
                  <input type="text" name="name"></input>
                </div>
                <div className="payment-surname-input">
                  <label> Surname* </label>
                  <input type="text" name="surname"></input>
                </div>
              </div>
              <div className='payment-contact-container'>
                <div className="payment-email-input">
                  <label> Email* </label>
                  <input type="email" name="email"></input>
                </div>
                <div className="payment-phone-number-input">
                  <label> Phone number* </label>
                  <input type="number" name="phone-number" placeholder="Ex. (+1) 123 4567 890"></input>
                </div>
              </div>
                <div className="payment-street-input">
                  <label> Street* </label>
                  <input className='street-input' type="text" name="street" placeholder="Ex. Whoopie St. 1234"></input>
                </div>
              <div className='payment-address-container'>
                <div className="payment-city-input">
                  <label> City* </label>
                  <input type="text" name="city" className='city-input' placeholder=""></input>
                </div>
                <div className="payment-postcode-input ">
                  <label> Postal Code* </label>
                  <input type="number" name="postcode" className='postcode-input city-input' placeholder=""></input>
                </div>
              </div>
              


            </form>
          </div>

        </div>
      </>
  )
}

export default Checkout;