import React from "react";
//Style
import './Careers.scss';
//Elements
import NameOfPage from "../../Elements/DesignPatterns/NameOfPage/NameOfPage";
import RightSideText from "../../Elements/DesignPatterns/RightSideText/RightSideText";
import WorkForm from "./WorkForm/WorkForm";
import {Tabs} from 'antd';
//Redux
import { connect } from "react-redux";

const {TabPane} = Tabs;

const Careers = (props) => {
    const {rightImage, workList} = props;
    return (
        <div className='careers'>
            <NameOfPage name='Careers'/>
            <div className='container'>
                <div className='careers__main'>
                    <RightSideText img={rightImage.image} text={rightImage.text}/>
                    <Tabs defaultActiveKey="1">
                        {
                            workList.map( (item) => {
                                return(
                                    <TabPane tab={
                                        <div className='tab__header__style'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                                <path d={item.path} fill="#656565"/>
                                            </svg>
                                            <p>{item.workName}</p>
                                        </div>
                                    } key={item.id}>
                                        <WorkForm requiresQualify={item.requiresQualify} responsibility={item.responsibility} jobDescription={item.jobDescription}/>
                                    </TabPane>
                                )
                            })
                        }

                    </Tabs>
                    <div className='for_questions'>For more information about how it workks and everything else please <a href='#'>contact us.</a></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workList: state.careers.workList,
        rightImage: state.careers.rightImage 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Careers);