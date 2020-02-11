import React from "react";
import './Blocks.scss';

const Blocks = () => {
    const blocksList = [
        {
            title: 'We Are Simple',
            subtitles: ['About Us', 'Contact Us']
        },
        {
            title: 'Your Element',
            subtitles: ['Orders', 'Gift Cards']
        },
        {
            title: 'Our Policies',
            subtitles: ['Returns', 'Store Pickups', 'Payment Methods', 'Privacy Policy']
        },
        {
            title: 'Let’s Cooperate',
            subtitles: ['You Ads On Our Website', 'Carreers']
        },
    ];
    return(
        <div className='blocks_wraper'>
            {
                blocksList.map((item, index) => {
                    return(
                        <div key={index} className='footer_block'>
                            <h2>{item.title}</h2>
                            {item.subtitles.map( sub => {
                                return (
                                    <p>{sub}</p>
                                )
                            } )}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Blocks;