import React from "react";
import './Socials.scss';
import youtube from '../../../Assets/svgs/youtube.svg';
import twitter from '../../../Assets/svgs/twitter.svg';
import linkdin from '../../../Assets/svgs/linkdin.svg';
import instagram from '../../../Assets/svgs/instagram.svg';
import facebook from '../../../Assets/svgs/facebook.svg';

const Socials = () => {
    const siteList = [
        {name: twitter, url: 'https://twitter.com/'},
        {name: facebook, url: 'https://www.facebook.com/'},
        {name: instagram, url: 'https://www.instagram.com/'},
        {name: youtube, url: 'https://www.youtube.com/'},
        {name: linkdin, url: 'https://www.linkedin.com/'}
    ];
    return (
        <div className='social_wraper'>
            {
                siteList.map(item => {
                  return  <a href={item.url} target={'_blank'}>
                      <img className='socials' src={item.name} alt={item.name} />
                  </a>
                })
            }
        </div>
    );
}

export default Socials;