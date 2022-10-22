import { TouchableOpacity } from "react-native";

<View style={{ margin: "auto" }}>
        <View style={{ marginTop: "1%", fontWeight: "bold" }}>
          {" "}
          Position: {position}, Key:{" "}
          {major
            ? majorScale[0]
            : minor
            ? minorScale[0]
            : harmMinor
            ? harmMinorScale[0]
            : null}
          {major ? " major" : minor ? " minor" : harmMinor ? " harmonic" : null}
        </View>
        {major ? (
          <>
            <View style={{ fontWeight: "bold" }}>Mode: {modeName}</View>
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
          {/* <div style={{fontWeight: 'bold'}}>Scale Number: {scaleNumber}</div>  */}

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
              >
                Position 🠗
              </TouchableOpacity>
              <TouchableOpacity
                style={{ borderRadius: "1rem", alignItems: "center" }}
                onPress={() => {
                  if (position < 19) setPosition((prevState) => prevState + 1);
                }}
              >
                Position 🠕
              </TouchableOpacity>
            </>
          ) : null}

          <TouchableOpacity
            style={{ borderRadius: "1rem", fontWeight: "bold", flex: 1 }}
            onPress={() => {
              if (scaleNumber > 0) setScaleNumber(scaleNumber - 1);
            }}
          >
            key 🠗
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1 }}
            onPress={() => {
              if (scaleNumber < 11) setScaleNumber(scaleNumber + 1);
            }}
          >
            key 🠕
          </TouchableOpacity>

          <TouchableOpacity
            style={{ borderRadius: "1rem", fontWeight: "bold", flex: 1 }}
            onPress={() => {
              setMode(mode - 1);
              console.log(mode, "new mode");
              checkMode();
            }}
          >
            Mode{" "}
          </TouchableOpacity>
        </View>
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
            Major{major}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1 }}
            onPress={() => {
              setMajor(false);
              setMinor(true);
              setHarmMinor(false);
            }}
          >
            Minor{major}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderRadius: "1rem", flex: 1, textAlign: "center" }}
            onPress={() => {
              setHarmMinor(true);
              setMinor(false);
              setMajor(false);
            }}
          >
            Harmonic{harmMinor}
          </TouchableOpacity>

          {/* <TouchableOpacity style={{borderRadius: '1rem'}} onPress={()=>{ if(modeName=="Ionian/Root"){return;} 
if(mode==0){setMode(0);checkMode()}
}}>mode 🠗</TouchableOpacity> */}

          <TouchableOpacity
            style={{ borderRadius: "1rem", textAlign: "center", flex: 1 }}
            onPress={() => {
              setFullFretBoard((prevState) => !prevState);
            }}
          >
            {fullFretBoard ? "Full" : "Position"}
          </TouchableOpacity>
          <br />
        </View>
      </View>