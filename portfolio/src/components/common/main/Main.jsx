import React from 'react'
import "./Main.css"
import Android_icon from '../../../asset/main/androidstdio_icon.png'
import SpringBoot_icon from '../../../asset/main/SpringBoot_icon.png'
import Kotlin_icon from '../../../asset/main/Kotlin_icon.png'
import React_icon from '../../../asset/main/React-icon.png'
import Web_icon from '../../../asset/main/Web_icon.png'


const Main = (props) => {
    return (
     <div className='root'>

        <div className='home' ref={props.Refs.home}>
            <div className='AboutMe'>
                <h2>안녕하세요 :&#41;<br/>경험하며 레벨업하는 개발자 황주완 입니다</h2>
                <div className='BusinessCard'>
                    
                </div>
            </div>
            
        </div>

        <div className='page' ref={props.Refs.stacks}>
            <div className='stacksWrap'>
                <h2>Android</h2>
                <div className='imgWrap'>
                    <img src={Kotlin_icon} alt="Kotlin" />
                    <img src={Android_icon} alt="Android"/>
                </div>
            </div>

            <div className='stacksWrap'>
                <h2>Backend</h2>
                <div className='imgWrap'>
                <img src={Kotlin_icon} alt="Kotlin" />
                <img src={SpringBoot_icon} alt="SpringBoot" />
                </div>
            </div>

            <div className='stacksWrap'>
                <h2>Frontend</h2>
                <div className='imgWrap'>
                    <img src={Web_icon} alt="Web" className='img'/>
                    <img src={React_icon} alt="React" />
                </div>
            </div>
        </div>

        <div className='page' ref={props.Refs.project}>
            
        </div>

        <div className='page' ref={props.Refs.award}>
            
        </div>

        <div className='page' ref={props.Refs.activity}>
            
        </div>
        
     </div>
    )
}

export default Main