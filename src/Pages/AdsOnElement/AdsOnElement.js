import React from "react";
//Styles
import './AdsOnElement.scss';
//Elements
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import RightSideText from "../../Elements/DesignPatterns/RightSideText/RightSideText";
import InfoDesk from "../../Elements/DesignPatterns/InfoDesk/InfoDesk";
//Redux
import { connect } from "react-redux";
import {useLocalization} from '../../Hooks/useLocalization/useLocalization';

const AdsOnElement = (props) => {
    const {priceOfAdd, typesOfAdd, rightImage, currentLang} = props ;
    console.log('gnacox lang@', currentLang)
    const {translate} = useLocalization(currentLang);

    return (
        <div className='ads__on__element'>
            <NameOfPage name={'Your ad on ELEMENT '}/>
            <div className='container'>
                <div className='ads__on__element__main'>
                    <RightSideText img={rightImage.image} text={rightImage.adsElementText}/>
                    <InfoDesk name={'Types of ads'} top={'72px'} infos={typesOfAdd}/>
                    <InfoDesk name={'Pricing'} top={'48px'} infos={priceOfAdd}/>
                    <div className='for_questions'>{translate('gev')} <a href='#'>contact us.</a></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        priceOfAdd: state.adsonelement.priceOfAdd,
        typesOfAdd: state.adsonelement.typesOfAdd,
        rightImage: state.adsonelement.rightImage,
        currentLang: state.changelanguage.currentLang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdsOnElement);