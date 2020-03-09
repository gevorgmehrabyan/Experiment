import React from "react";
//Style
import './About.scss';
//Elements
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import LeftSideText from "../../Elements/DesignPatterns/LeftSideText/LeftSideText";
import RightSideText from "../../Elements/DesignPatterns/RightSideText/RightSideText";
//Redux
import { connect } from "react-redux";

const About = (props) => {
    const { rightImage, leftImage, circleContent, historyContent, missions} = props;
    return(
        <div className='about__us'>
            <NameOfPage name='Who are we'/>
            <div className='container'>
                <div className='who_are_we_contain'>
                    <RightSideText img={rightImage.image} text={rightImage.text1}/>
                    <div className="about_content">
                        <p>{missions.mission1}</p>
                        <span>{missions.subMission1}</span>
                        <div className='circle-wrapper'>
                            {
                                circleContent.map((item , index) => {
                                    return(
                                        <div key={index}>
                                            <h1>{item.stat1}</h1>
                                            <h3>{item.stat2}</h3>
                                            <h5>{item.stat3}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <span>{missions.subMission2}</span>
                        <p>{missions.mission2}</p>
                    </div>
                    <LeftSideText img={leftImage.image} text={leftImage.text}/>
                </div>
            </div>
            <NameOfPage name='History'/>
            <div className='container'>
                <div className='history_wrapper'>
                    {
                        historyContent.map( (item, index) => {
                            return(
                                <div key={index} className='history_wrapper_column'>
                                    <div className='years'>
                                        <div>{item.year}</div>
                                        <img src={item.image} alt={item.alt}/>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state) =>{
    return {
        leftImage: state.about.leftImage,
        rightImage: state.about.rightImage,
        circleContent: state.about.circleContent,
        historyContent: state.about.historyContent,
        missions: state.about.missions
    }
}

const mapDispatchToProps = ( dispatch ) =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);