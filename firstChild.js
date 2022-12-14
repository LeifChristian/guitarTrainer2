import React from "react"
import {Text, View,} from 'react-native'
import { useState, useEffect, TouchableOpacity} from "react"

import checkIsSharp from "./checkIsSharp"
// import {row0, row1, row2, row3, row4, row5, 
//     row6, row7, row8, row9, row10, row11, 
//     row12, row13, row14, row15, row16, row17, 
//     row18, row19, row20, base, base1,base2,
//     base3,base4,base5,base6,base7,base8,base9,
//     base10,base11,base12,base13,base14,base15,
//     base16,base17,base18,base19,base20} from "./initialVars"

let row0;
let row1;
let row2;
let row3;
let row4;
let row5;
let row6;
let row7;
let row8;
let row9;
let row10;
let row11;
let row12;
let row13;
let row14;
let row15;
let row16;
let row17;
let row18;
let row19;
let row20;

const row21 = ["C#", "F#", "B_", "E_", "G#", "C#"];
const row22 = ["D_", "G_", "C_", "F_", "A_", "D_"];

//base references the lowest pitch (E string) on a fret, i.e. fret 0 lowest pitch would be 40, fret 1, 41, etc.
//this gives a simple equation to compute the pitches in each row (base+5=A string, base+10= D string)

const base = 40;
const base1 = 41;
const base2 = 42;
const base3 = 43;
const base4 = 44;
const base5 = 45;
const base6 = 46;
const base7 = 47;
const base8 = 48;
const base9 = 49;
const base10 = 50;
const base11 = 51;
const base12 = 52;
const base13 = 53;
const base14 = 54;
const base15 = 55;
const base16 = 56;
const base17 = 57;
const base18 = 58;
const base19 = 59;
const base20 = 60;
const base21 = 61;
const base22 = 62;

const FirstChild = () => {
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

    

    useEffect(() => {
        console.log("refresh");
    
        if (major) {
          switch (scaleNumber) {
            case 0: // E default
            setSharp(true)
              setMajorScale(["E_", "F#", "G#", "A_", "B_", "C#", "D#"]);
              break;
            case 1:
              setSharp(false)
              setMajorScale(["F_", "G_", "A_", "Bb", "C_", "D_", "E_"]);
              break;
            case 2:
              setSharp(true)
              setMajorScale(["F#", "G#", "A#", "B_", "C#", "D#", "F_"]);
              break;
            case 3:
              setSharp(true)
              setMajorScale(["G_", "A_", "B_", "C_", "D_", "E_", "F#"]);
              break;
            case 4:
              setSharp(false)
              setMajorScale(["Ab", "Bb", "C_", "Db", "Eb", "F_", "G_"]);
              break;
            case 5:
              setSharp(true)
              setMajorScale(["A_", "B_", "C#", "D_", "E_", "F#", "G#"]);
              break;
            case 6:
              setSharp(false)
              setMajorScale(["Bb", "C_", "D_", "Eb", "F_", "G_", "A_"]);
              break;
            case 7:
              setSharp(true)
              setMajorScale(["B_", "C#", "D#", "E_", "F#", "G#", "A#"]);
              break;
            case 8:
              setSharp(true)
              setMajorScale(["C_", "D_", "E_", "F_", "G_", "A_", "B_"]);
              break;
            case 9:
              setSharp(true)
              setMajorScale(["C#", "D#", "F_", "F#", "G#", "A#", "C_"]);
              break;
            case 10:
              setSharp(true)
              setMajorScale(["D_", "E_", "F#", "G_", "A_", "B_", "C#"]);
              break;
            case 11:
              setSharp(false)
              setMajorScale(["Eb", "F_", "G_", "Ab", "Bb", "C_", "D_"]);
    
              break;
          }
        }
    
        if (minor) {
          switch (scaleNumber) {
            case 0: // E default
            setSharp(true)
              setMinorScale(["E_", "F#", "G_", "A_", "B_", "C_", "D_"]);
              break;
            case 1:
              setSharp(false)
              setMinorScale(["F_", "G_", "Ab", "Bb", "C_", "Db", "Eb"]);
              break;
            case 2:
              setSharp(true)
              setMinorScale(["F#", "G#", "A_", "B_", "C#", "D_", "E_"]);
              break;
            case 3:
              setSharp(false)
              setMinorScale(["G_", "A_", "Bb", "C_", "D_", "Eb", "F_"]);
              break;
            case 4:
              setSharp(true)
              setMinorScale(["G#", "A#", "B_", "C#", "D#", "E_", "F#"]);
              break;
            case 5:
              setSharp(true)
              setMinorScale(["A_", "B_", "C_", "D_", "E_", "F_", "G_"]);
              break;
            case 6:
            setSharp(false)
              setMinorScale(["Bb", "C_", "Db", "Eb", "F_", "Gb", "Ab"]);
              break;
            case 7:
              setSharp(true)
              setMinorScale(["B_", "C#", "D_", "E_", "F#", "G_", "A_"]);
              break;
            case 8:
              setSharp(false)
              setMinorScale(["C_", "D_", "Eb", "F_", "G_", "Ab", "Bb"]);
              break;
            case 9:
              setSharp(true)
              setMinorScale(["C#", "D#", "E_", "F#", "G#", "A_", "B_"]);
              break;
            case 10:
              setSharp(false)
              setMinorScale(["D_", "E_", "F_", "G_", "A_", "Bb", "C_"]);
              break;
            case 11:
              setSharp(true)
              setMinorScale(["D#", "F_", "F#", "G#", "A#", "B_", "C#"]);
    
              break;
          }
        }
    
        if (harmMinor) {
          switch (scaleNumber) {
            case 0: // E default
            setSharp(true)
              setHarmMinorScale(["E_", "F#", "G_", "A_", "B_", "C_", "D#"]);
              break;
            case 1:
              setSharp(false)
              setHarmMinorScale(["F_", "G_", "Ab", "Bb", "C_", "Db", "E_"]);
              break;
            case 2:
              setSharp(true)
              setHarmMinorScale(["F#", "G#", "A_", "B_", "C#", "D_", "F_"]);
              break;
            case 3:
              setSharp(false)
              setHarmMinorScale(["G_", "A_", "Bb", "C_", "D_", "Eb", "F#"]);
              break;
            case 4:
              setSharp(true)
              setHarmMinorScale(["G#", "A#", "B_", "C#", "D#", "E_", "G_"]);
              break;
            case 5:
              setSharp(true)
              setHarmMinorScale(["A_", "B_", "C_", "D_", "E_", "F_", "G#"]);
              break;
            case 6:
              setSharp(false)
              setHarmMinorScale(["Bb", "C_", "Db", "Eb", "F_", "Gb", "A_"]);
              break;
            case 7:
              setSharp(true)
              setHarmMinorScale(["B_", "C#", "D_", "E_", "F#", "G_", "A#"]);
              break;
            case 8:
              setSharp(false)
              setHarmMinorScale(["C_", "D_", "Eb", "F_", "G_", "Ab", "B_"]);
              break;
            case 9:
              setSharp(true)
              setHarmMinorScale(["C#", "D#", "E_", "F#", "G#", "A_", "C_"]);
              break;
            case 10:
              setSharp(false)
              setHarmMinorScale(["D_", "E_", "F_", "G_", "A_", "Bb", "Db"]);
              break;
            case 11:
              setSharp(false)
              setHarmMinorScale(["Eb", "F_", "F#", "Ab", "Bb", "B_", "D_"]);
              break;
          }
        }
      }, [position, scaleNumber, major, minor, harmMinor, modeName, sharp]);

    //   const renderRow = (names, row) => {
    //     // console.log(names, 'names', row, 'row')
    
    //     if (major) {
    //       return (
    //         <View style={{ margin: "auto", height: 22 }}>
    //           {row < 10 ? (
    //             <Text
    //               style={{
    //                 marginRight: "11px",
    //                 marginRight: 270,
    //                 marginBottom: -22,
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {" "}
    //               {row}{" "}
    //             </Text>
    //           ) : (
    //             <Text
    //               style={{
    //                 marginRight: "0px",
    //                 marginRight: 270,
    //                 marginBottom: -22,
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {row}
    //             </Text>
    //           )}
    //           {names?.map((theName, index) =>
    //             theName == majorScale[0] ||
    //             theName == majorScale[1] ||
    //             theName == majorScale[2] ||
    //             theName == majorScale[3] ||
    //             theName == majorScale[4] ||
    //             theName == majorScale[5] ||
    //             theName == majorScale[6] ? (
    //               <TouchableOpacity
    //                 style={{ width: 40, border: "solid 2px" }}
    //                 onClick={() => {
    //                   press(index, row, theName);
    //                 }}
    //               >
                    
    //                 <Text>
    //                   {theName.charAt(1) == "_" ? theName.charAt(0) + "_" : theName}
    
    //                   {majorScale.indexOf(theName) + mode == -6
    //                     ? "1"
    //                     : majorScale.indexOf(theName) + mode == -5
    //                     ? "2"
    //                     : majorScale.indexOf(theName) + mode == -4
    //                     ? "3"
    //                     : majorScale.indexOf(theName) + mode == -3
    //                     ? "4"
    //                     : majorScale.indexOf(theName) + mode == -2
    //                     ? "5"
    //                     : majorScale.indexOf(theName) + mode == -1
    //                     ? "6"
    //                     : majorScale.indexOf(theName) + mode == 0
    //                     ? "7"
    //                     : majorScale.indexOf(theName) + mode}
    //                 </Text>
    //               </TouchableOpacity>
    //             ) : (
    //               <TouchableOpacity
    //                 style={{ width: 40, opacity: 0 }}
    //                 onClick={() => {
    //                   console.log(index, row, theName);
    //                 }}
    //               >
    //                 <Text>__</Text>
    //               </TouchableOpacity>
    //             )
    //           )}
    //         </View>
    //       );
    //     } else if (minor) {
    //       return (
    //         <View style={{ margin: "auto", height: 22 }}>
    //           {row < 10 ? (
    //             <Text
    //               style={{
    //                 marginRight: "11px",
    //                 marginRight: 270,
    //                 marginBottom: -22,
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {" "}
    //               {row}{" "}
    //             </Text>
    //           ) : (
    //             <Text
    //               style={{
    //                 marginRight: "0px",
    //                 marginRight: 270,
    //                 marginBottom: -22,
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {row}
    //             </Text>
    //           )}
    //           {names?.map((theName, index) =>
    //             theName == minorScale[0] ||
    //             theName == minorScale[1] ||
    //             theName == minorScale[2] ||
    //             theName == minorScale[3] ||
    //             theName == minorScale[4] ||
    //             theName == minorScale[5] ||
    //             theName == minorScale[6] ? (
    //               <TouchableOpacity
    //                 style={{ width: 40, position: "relative", border: "solid 2px" }}
    //                 onClick={() => {
    //                   press(index, row, theName);
    //                 }}
    //               >
    //                 <Text>
    //                   {theName.charAt(1) == "_" ? theName.charAt(0) + "_" : theName}
    
    //                   {minorScale.indexOf(theName) + mode == -6
    //                     ? "1"
    //                     : minorScale.indexOf(theName) + mode == -5
    //                     ? "2"
    //                     : minorScale.indexOf(theName) + mode == -4
    //                     ? "3"
    //                     : minorScale.indexOf(theName) + mode == -3
    //                     ? "4"
    //                     : minorScale.indexOf(theName) + mode == -2
    //                     ? "5"
    //                     : minorScale.indexOf(theName) + mode == -1
    //                     ? "6"
    //                     : minorScale.indexOf(theName) + mode == 0
    //                     ? "7"
    //                     : minorScale.indexOf(theName) + mode}
    //                 </Text>
    //               </TouchableOpacity>
    //             ) : (
    //               <TouchableOpacity
    //                 style={{ width: 40, opacity: 0 }}
    //                 onClick={() => {
    //                   console.log(index, row, theName);
    //                 }}
    //               >
    //                 <Text>__</Text>
    //               </TouchableOpacity>
    //             )
    //           )}
    //         </View>
    //       );
    //     } else if (harmMinor) {
    //       return (
    //         <View style={{ margin: "auto", height: 22 }}>
    //           {row < 10 ? (
    //             <Text
    //               style={{
    //                 marginRight: "11px",
    //                 marginRight: 270,
    //                 marginBottom: -22,
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {" "}
    //               {row}{" "}
    //             </Text>
    //           ) : (
    //             <Text
    //               style={{
    //                 marginRight: "0px",
    //                 marginRight: 270,
    //                 marginBottom: -22,
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {row}
    //             </Text>
    //           )}
    //           {names?.map((theName, index) =>
    
    //             theName == harmMinorScale[0] ||
    //             theName == harmMinorScale[1] ||
    //             theName == harmMinorScale[2] ||
    //             theName == harmMinorScale[3] ||
    //             theName == harmMinorScale[4] ||
    //             theName == harmMinorScale[5] ||
    //             theName == harmMinorScale[6] ? (
    
    //               theName == "F_" && harmMinorScale[6] == "F_" ?   <TouchableOpacity
    //               style={{ width: 40, position: "relative", border: "solid 2px" }}
    //               onClick={() => {
    //                 press(index, row, theName);
    //               }}
    //             >
    //               <Text>
    //                 E##7
    //               </Text>
    //             </TouchableOpacity> : theName == "C_" && harmMinorScale[6] == "C_" ?   <TouchableOpacity
    //               style={{ width: 40, position: "relative", border: "solid 2px" }}
    //               onClick={() => {
    //                 press(index, row, theName);
    //               }}
    //             >
    //               <Text>
    //                 B#7
    //               </Text>
    //             </TouchableOpacity> : theName == "G_" && harmMinorScale[6] == "G_" ?   <TouchableOpacity
    //               style={{ width: 40, position: "relative", border: "solid 2px" }}
    //               onClick={() => {
    //                 press(index, row, theName);
    //               }}
    //             >
    //               <Text>
    //               F##7
    //               </Text>
    //             </TouchableOpacity> :
    
    //               <TouchableOpacity
    //                 style={{ width: 40, position: "relative", border: "solid 2px" }}
    //                 onClick={() => {
    //                   press(index, row, theName);
    //                 }}
    //               >
    //                 <Text>
    //                   {theName}
    
    //                   {/* { harmMinorScale[0].charAt(0) == harmMinorScale[6].charAt(0) ? theName + "#" : theName }
    //                    */}
    
    //                   {harmMinorScale.indexOf(theName) + mode == -6
    //                     ? "1"
    //                     : harmMinorScale.indexOf(theName) + mode == -5
    //                     ? "2"
    //                     : harmMinorScale.indexOf(theName) + mode == -4
    //                     ? "3"
    //                     : harmMinorScale.indexOf(theName) + mode == -3
    //                     ? "4"
    //                     : harmMinorScale.indexOf(theName) + mode == -2
    //                     ? "5"
    //                     : harmMinorScale.indexOf(theName) + mode == -1
    //                     ? "6"
    //                     : harmMinorScale.indexOf(theName) + mode == 0
    //                     ? "7"
    //                     : harmMinorScale.indexOf(theName) + mode}
    //                 </Text>
    //               </TouchableOpacity>
    //             ) : (
    //               <TouchableOpacity
    //                 style={{ width: 40, opacity: 0 }}
    //                 onClick={() => {
    //                   console.log(index, row, theName);
    //                 }}
    //               >
    //                 <Text>__</Text>
    //               </TouchableOpacity>
    //             )
    //           )}
    //         </View>
    //       );
    //     } else {
    //       return <Text>no</Text> ;
    //     }
    //   };

const renderRow = () => {return(<Text>ass</Text>)}

      const press = (index, row) => {
        console.log(row, index);
    
        switch (row) {
          case 0:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base + 24], 2.5);
                break;
            }
            break;
          case 1:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base1], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base1 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base1 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base1 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base1 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base1 + 24], 2.5);
                break;
            }
            break;
          case 2:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base2], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base2 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base2 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base2 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base2 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base2 + 24], 2.5);
                break;
            }
    
            break;
          case 3:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base3], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base3 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base3 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base3 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base3 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base3 + 24], 2.5);
                break;
            }
            break;
          case 4:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base4], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base4 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base4 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base4 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base4 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base4 + 24], 2.5);
                break;
            }
            break;
          case 5:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base5], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base5 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base5 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base5 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base5 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base5 + 24], 2.5);
                break;
            }
            break;
          case 6:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base6], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base6 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base6 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base6 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base6 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base6 + 24], 2.5);
                break;
            }
            break;
          case 7:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base7], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base7 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base7 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base7 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base7 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base7 + 24], 2.5);
                break;
            }
            break;
          case 8:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base8], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base8 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base8 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base8 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base8 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base8 + 24], 2.5);
                break;
            }
            break;
          case 9:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base9], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base9 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base9 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base9 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base9 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base9 + 24], 2.5);
                break;
            }
            break;
          case 10:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base10], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base10 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base10 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base10 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base10 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base10 + 24], 2.5);
                break;
            }
            break;
          case 11:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base11], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base11 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base11 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base11 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base11 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base11 + 24], 2.5);
                break;
            }
            break;
          case 12:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base12], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base12 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base12 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base12 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base12 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base12 + 24], 2.5);
                break;
            }
            break;
          case 13:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base13], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base13 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base13 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base13 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base13 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base13 + 24], 2.5);
                break;
            }
            break;
          case 14:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base14], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base14 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base14 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base14 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base14 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base14 + 24], 2.5);
                break;
            }
            break;
          case 15:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base15], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base15 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base15 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base15 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base15 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base15 + 24], 2.5);
                break;
            }
            break;
          case 16:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base16], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base16 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base16 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base16 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base16 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base16 + 24], 2.5);
                break;
            }
            break;
          case 17:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base17], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base17 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base17 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base17 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base17 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base17 + 24], 2.5);
                break;
            }
            break;
          case 18:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base18], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base18 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base18 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base18 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base18 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base18 + 24], 2.5);
                break;
            }
            break;
          case 19:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base19], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base19 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base19 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base19 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base19 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base19 + 24], 2.5);
                break;
            }
            break;
          case 20:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base20], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base20 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base20 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base20 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base20 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base20 + 24], 2.5);
                break;
            }
            break;
          case 21:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base21], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base21 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base21 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base21 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base21 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base21 + 24], 2.5);
                break;
            }
            break;
          case 22:
            switch (index) {
              case 0:
                midiSounds.playChordNow(2, [base22], 2.5);
                break;
              case 1:
                midiSounds.playChordNow(2, [base22 + 5], 2.5);
                break;
              case 2:
                midiSounds.playChordNow(2, [base22 + 10], 2.5);
                break;
              case 3:
                midiSounds.playChordNow(2, [base22 + 15], 2.5);
                break;
              case 4:
                midiSounds.playChordNow(2, [base22 + 19], 2.5);
                break;
              case 5:
                midiSounds.playChordNow(2, [base22 + 24], 2.5);
                break;
            }
            break;
        }
      };

      const checkMode = () => {
        console.log("the mode is", mode);
    
        if (major) {
          switch (mode) {
            case -5:
              setMode(1);
              setModeName("Ionian/Root");
              break;
            case -4:
              setModeName("Locrian");
              break;
            case -3:
              setModeName("Aeolian/Minor");
              break;
            case -2:
              setModeName("Mixolydian");
              break;
            case -1:
              setModeName("Lydian");
              break;
            case 0:
              setModeName("Phrygian");
              break;
            case 1:
              setModeName("Dorian");
              break;
            default:
              console.log("default reached by impossibility");
              break;
          }
        } else if (mode == -5) {
          setMode(1);
          setModeName(mode);
        } else setModeName(mode);
      };
    
      let rowrender1 = `row${position - 1}`;
      let rowrender2 = `row${position}`;
      let rowrender3 = `row${position + 1}`;
      let rowrender4 = `row${position + 2}`;
      let rowrender5 = `row${position + 3}`;


    return (

<View>
      <View className="App" style={{ marginTop: "10px", marginBottom: "2px" }}>
        <View style={{}}>
          {fullFretBoard
            ? [
                renderRow(row0, 0),
                renderRow(row1, 1),
                renderRow(row2, 2),
                renderRow(row3, 3),
                renderRow(row4, 4),
                renderRow(row5, 5),
                renderRow(row6, 6),
                renderRow(row7, 7),
                renderRow(row8, 8),
                renderRow(row9, 9),
                renderRow(row10, 10),
                renderRow(row11, 11),
                renderRow(row12, 12),
                renderRow(row13, 13),
                renderRow(row14, 14),
                renderRow(row15, 15),
                renderRow(row16, 16),
                renderRow(row17, 17),
                renderRow(row18, 18),
                renderRow(row19, 19),
                renderRow(row20, 20),
              ]
            : [
                renderRow(eval(rowrender1), position - 1),
                renderRow(eval(rowrender2), position),
                renderRow(eval(rowrender3), position + 1),
                renderRow(eval(rowrender4), position + 2),
                renderRow(eval(rowrender5), position + 3),
              ]}
        </View>
      </View>

      <View style={{ margin: "auto" }}>
        <View style={{ marginTop: "1%", fontWeight: "bold" }}>
<Text>

          {" "}
          Position: {position}, Key:{" "}
          {major
            ? majorScale[0]
            : minor
            ? minorScale[0]
            : harmMinor
            ? harmMinorScale[0]
            : null}
          {major ? " major" : minor ? " minor" : harmMinor ? " harmonic" : null}</Text>
        </View>
        {major ? (
          <>
            <View style={{ fontWeight: "bold" }}> <Text>   Mode: {modeName}</Text></View>
          </>
        ) : null}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "38%",
            margin: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: ".5%",
          }}
        >
          {/* <View style={{fontWeight: 'bold'}}>Scale Number: {scaleNumber}</View>  */}

          {!fullFretBoard ? (
            <>
              <TouchableOpacity
                style={{
                  textAlign: "center",
                  borderRadius: "1rem",
                  alignItems: "center",
                  marginBottom: "1%",
                }}
                onPress={() => {
                  if (position > 1) setPosition((prevState) => prevState - 1);
                }}
              ><Text>
                Position ????</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ borderRadius: "1rem", alignItems: "center" }}
                onPress={() => {
                  if (position < 19) setPosition((prevState) => prevState + 1);
                }}
              >
                <Text> Position ???? </Text>
              </TouchableOpacity>
            </>
          ) : null}

          <TouchableOpacity
            style={{ borderRadius: "1rem", fontWeight: "bold", flex: 1 }}
            onPress={() => {
              if (scaleNumber > 0) setScaleNumber(scaleNumber - 1);
            }}
          > <Text>
            key ???? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1 }}
            onPress={() => {
              if (scaleNumber < 11) setScaleNumber(scaleNumber + 1);
            }}
          >
            <Text> key ????</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ borderRadius: "1rem", fontWeight: "bold", flex: 1 }}
            onPress={() => {
              setMode(mode - 1);
              console.log(mode, "new mode");
              checkMode();
            }}
          >
           <Text> Mode{" "} </Text>
          </TouchableOpacity>
        </View>{" "}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "38%",
            margin: "auto",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1 }}
            onPress={() => {
              setMajor(true);
              setMinor(false);
              setHarmMinor(false);
            }}
          >
           <Text> Major{major}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1 }}
            onPress={() => {
              setMajor(false);
              setMinor(true);
              setHarmMinor(false);
            }}
          >
           <Text> Minor{major}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1, textAlign: "center" }}
            onPress={() => {
              setHarmMinor(true);
              setMinor(false);
              setMajor(false);
            }}
          >
           <Text> Harmonic{harmMinor} </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={{borderRadius: '1rem'}} onPress={()=>{ if(modeName=="Ionian/Root"){return;} 
if(mode==0){setMode(0);checkMode()}
}}>mode ????</TouchableOpacity> */}

          <TouchableOpacity
            style={{ borderRadius: "1rem", textAlign: "center", flex: 1 }}
            onPress={() => {
              setFullFretBoard((prevState) => !prevState);
            }}
          >
           <Text> {fullFretBoard ? "Full" : "Position"}</Text>
          </TouchableOpacity>
          
        </View>
      </View></View>
    )
}

export default FirstChild