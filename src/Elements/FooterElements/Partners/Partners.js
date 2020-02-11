import React from "react";
import partner1 from '../../../Assets/svgs/partner1.svg';
import partner2 from '../../../Assets/svgs/partner2.svg';
import partner3 from '../../../Assets/svgs/partner3.svg';
import partner4 from '../../../Assets/svgs/partner4.svg';
import partner5 from '../../../Assets/svgs/partner5.svg';
import partner6 from '../../../Assets/svgs/partner6.svg';
import partner7 from '../../../Assets/svgs/partner7.svg';
import partner8 from '../../../Assets/svgs/partner8.svg';
import partner9 from '../../../Assets/svgs/partner9.svg';
import partner10 from '../../../Assets/svgs/partner10.svg';
import partner11 from '../../../Assets/svgs/partner11.svg';
import './Partners.scss';

const Partners = () => {
    const partnerList = [
        partner1, partner2, partner3, partner4, partner5, partner6,
        partner7, partner8, partner9, partner10, partner11
    ];
    return(
        <div className='partner_list'>
            {
                partnerList.map( partner => {
                    return <img src={partner} alt={partner} />
                })
            }
        </div>
    );
}

export default Partners;