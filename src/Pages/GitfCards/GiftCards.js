import React from "react";
//Styles
import './GiftCards.scss';
//Elements
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import RightSideText from "../../Elements/DesignPatterns/RightSideText/RightSideText";
//Redux
import { connect } from "react-redux";

const GiftCards = (props) => {
    const {rightImage, cardTypes, cardInfo} = props;
    return (
        <div className='gift__card'>
            <NameOfPage name='Gift cards' />
            <div className='container'>
                <div className='gift__card__main'>
                    <RightSideText img={rightImage.image} text={rightImage.text} />
                    <h1>Types of Gift cards</h1>
                    <div className='gift__card__images'>
                        {
                            cardTypes.map( (item, index) => {
                                return  <img key={index} src={item} alt='cards' />
                            })
                        }
                    </div>
                    <div className='information_part'>
                        {
                            cardInfo.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })    
                        }
                    </div>
                    <div className='for_questions'>For more information about how it workks and everything else please <a href='#'>contact us.</a></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rightImage: state.giftcards.rightImage,
        cardTypes: state.giftcards.cardTypes,
        cardInfo: state.giftcards.cardInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftCards); 