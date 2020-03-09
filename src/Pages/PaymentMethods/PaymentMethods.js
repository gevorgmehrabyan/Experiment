import React from "react";
import './PaymentMethods.scss';
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import payment1 from '../../Assets/images/payment1.png';
import payment2 from '../../Assets/images/payment2.png';
import payment3 from '../../Assets/images/payment3.png';
import visa from '../../Assets/svgs/visa.svg';
import master from '../../Assets/svgs/master.svg';
import arca from '../../Assets/svgs/arca.svg';

const PaymentMethods = () => {
    return(
        <div className='payment__methods'>
            <NameOfPage name='Payment methods' />
            <div className='container'>
                <div className='payment__methods__main'>
                    <div className='payment__methods__row'>
                        <div className='payment__methods__column'>
                            <h1>Credit card</h1>
                            <p>You can pay with your credit card.</p>
                            <div>
                                <img src={visa} alt='visa' />
                                <img src={master} alt='master' />
                                <img src={arca} alt='arca' />
                            </div>
                        </div>
                        <div>
                            <img src={payment1} alt='payment__images' />
                        </div>
                    </div>
                    <div className='payment__methods__row'>
                        <div>
                            <img src={payment2} alt='payment__images' />
                        </div>
                        <div className='payment__methods__column'>
                            <h1>Cash</h1>
                            <p>Or you can pay in cash when your package is DELIVERED or when you arrive to pick up.</p>
                        </div>
                    </div>
                    <div className='payment__methods__row'>
                        <div className='payment__methods__column'>
                            <h1>Gift card</h1>
                            <p>Also, you can pay with Gift card using 8 digit number on the card and pin code only you should know.</p>
                        </div>
                        <div>
                            <img src={payment3} alt='payment__images' />
                        </div>
                    </div>
                    <div className='questions'>For more information about how it workks and everything else please <a href='#'>contact us.</a></div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods;