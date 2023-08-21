import React from 'react'
import "./Main.css"



const Main = (props) => {
    return (
     <div className='root'>

        <div className='home' ref={props.Refs.home}>
         <h1 className='text'>경험하며 레벨업하는 개발자</h1>
        </div>

        <div className='stacks' ref={props.Refs.stacks}>
            
        </div>

        <div className='project' ref={props.Refs.project}>
            
        </div>

        <div className='contest' ref={props.Refs.contest}>
            
        </div>

        <div className='activity' ref={props.Refs.activity}>
            
        </div>
        
     </div>
    )
}

export default Main