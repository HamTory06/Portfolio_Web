import Main from "../components/common/main/Main";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import { useEffect, useState, useRef } from "react";
import React from "react";


function App() {
  const home = useRef(null)
  const stacks = useRef(null)
  const activity = useRef(null)
  const project = useRef(null)
  const award = useRef(null)

  const homeClick = () =>{
    home.current?.scrollIntoView({ behavior: "smooth" });
  }
  const stacksClick = () =>{
    stacks.current?.scrollIntoView({ behavior: "smooth" });
  }
  const activityClick = () =>{
    activity.current?.scrollIntoView({ behavior: "smooth" });
  }
  const projectClick = () =>{
    project.current?.scrollIntoView({ behavior: "smooth" });
  }
  const awardClick = () =>{
    award.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
    <Header
      homeClick={homeClick}
      stacksClick={stacksClick}
      activityClick={activityClick}
      projectClick={projectClick}
      awardClick={awardClick}
    />

     <Main
        Refs={{home :home, stacks: stacks, activity:activity, project:project, award:award}}/>
     <Footer/>
     </>
    );
}

export default App;
