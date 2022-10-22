import React from 'react'

function useEffecty() {

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
  
}

export default useEffecty


