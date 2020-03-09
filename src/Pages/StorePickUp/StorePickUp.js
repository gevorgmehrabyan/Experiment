import React from "react";
//Style
import './StorePickUp.scss';
//Elements
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import LeftSideText from "../../Elements/DesignPatterns/LeftSideText/LeftSideText";
import InfoDesk from "../../Elements/DesignPatterns/InfoDesk/InfoDesk";
import Iframe from "react-iframe";
//Redux
import { connect } from "react-redux";

const StorePickUp = (props) => {
    const {officeInfo, leftImage, workInfos, delInfos} = props;
    return(
        <div className='store__pick__up'>
            <NameOfPage name='Store Pickup' />
            <div className='container'>
                <div className='store__pick__up__main'>
                    <LeftSideText img={leftImage.image} text={leftImage.text}/>
                    <InfoDesk name={'How it works?'} infos={workInfos} top={'72px'}/>
                    <div className='map_info'>
                        <h2>Then visit our store at:</h2>
                        <div>
                            <img src={officeInfo.locationLogo} alt='location' />
                            {officeInfo.address}
                        </div>
                        <Iframe url={officeInfo.url}
                                width="100%"
                                height="568px"
                        />
                        <h3>During working ours: {officeInfo.workingOures}</h3>
                    </div>
                    <InfoDesk name={'How long does it take before your package is ready?'} infos={delInfos} top={'48px'}/>
                    <div className='for_questions'>If you have any questions <a href='#'>contact us</a> and we are happy to help you.</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        officeInfo: state.contact.officeInfo,
        leftImage: state.storepickup.leftImage,
        workInfos: state.storepickup.workInfos,
        delInfos: state.storepickup.delInfos
    }
}

export default connect(mapStateToProps)(StorePickUp); 