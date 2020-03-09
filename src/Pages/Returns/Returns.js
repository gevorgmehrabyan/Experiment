import React from "react";
//styles
import './Returns.scss';
//Elements
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import LeftSideText from "../../Elements/DesignPatterns/LeftSideText/LeftSideText";
import InfoDesk from "../../Elements/DesignPatterns/InfoDesk/InfoDesk";
import { connect } from "react-redux";

const Returns = (props) => {
    const {leftImage, howItWork, waysToReturns} = props;
    return(
        <div className='return'>
            <NameOfPage name='Returns' />
            <div className='container'>
                <div className='return__main'>
                    <LeftSideText img={leftImage.image} text={leftImage.text} />
                    <InfoDesk infos={howItWork} name={'How it works'} top={'72px'} />
                    <InfoDesk infos={waysToReturns} name={'Ways of returns'} top={'72px'} />
                    <div className='for_questions'>For more information about how it workks and everything else please <a href='#'>contact us.</a></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        leftImage: state.returns.leftImage,
        howItWork: state.returns.howItWork,
        waysToReturns: state.returns.waysToReturns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Returns); 