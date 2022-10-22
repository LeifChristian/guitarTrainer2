import React from "react"
import { useState } from "react";

const hooks = function () {
const [sharp, setSharp] = useState(true);
 const [majorScale, setMajorScale] = useState([]); // app starts in E major scale
 const [minorScale, setMinorScale] = useState([]);
 const [harmMinorScale, setHarmMinorScale] = useState([]);
 const [major, setMajor] = useState(true);
 const [minor, setMinor] = useState(false);
 const [harmMinor, setHarmMinor] = useState(false);
 const [mode, setMode] = useState(1); // mode 1=Ionian, 0=dorian, -1=phrygian, -2=lydian, -3=Mixolydian, -4=Aeolian, -5=locrian

 const [modeName, setModeName] = useState("Ionian/Root");
 const [position, setPosition] = useState(1);
 const [scaleNumber, setScaleNumber] = useState(0); //scale numbers begin with E=0, F=1, etc until 11
 const [fullFretBoard, setFullFretBoard] = useState(true);
}

export const myHooks = () => {
    const { sharp, setSharp,  
        majorScale, setMajorScale,  // app starts in E major scale
        minorScale, setMinorScale, 
        harmMinorScale, setHarmMinorScale, 
        major, setMajor,  
        minor, setMinor, 
        harmMinor, setHarmMinor, 
        mode, setMode, // mode 1Ionian, 0dorian, -1phrygian, -2lydian, -3Mixolydian, -4Aeolian, -5locrian
        modeName, setModeName,  
        position, setPosition,
        scaleNumber, setScaleNumber, //scale numbers begin with E0, F1, etc until 11
        fullFretBoard, setFullFretBoard  } = hooks();

    }
