const renderRow = (names, row) => {
    // console.log(names, 'names', row, 'row')

    if (major) {
      return (
        <View style={{ margin: "auto", height: 22 }}>
          {row < 10 ? (
            <div
              style={{
                marginRight: "11px",
                marginRight: 270,
                marginBottom: -22,
                fontWeight: "bold",
              }}
            >
              {" "}
              {row}{" "}
            </div>
          ) : (
            <div
              style={{
                marginRight: "0px",
                marginRight: 270,
                marginBottom: -22,
                fontWeight: "bold",
              }}
            >
              {row}
            </div>
          )}
          {names.map((theName, index) =>
            theName == majorScale[0] ||
            theName == majorScale[1] ||
            theName == majorScale[2] ||
            theName == majorScale[3] ||
            theName == majorScale[4] ||
            theName == majorScale[5] ||
            theName == majorScale[6] ? (
              <button
                style={{ width: 40, border: "solid 2px" }}
                onClick={() => {
                  press(index, row, theName);
                }}
              >
                {" "}
                <div>
                  {theName.charAt(1) == "_" ? theName.charAt(0) + "_" : theName}

                  {majorScale.indexOf(theName) + mode == -6
                    ? "1"
                    : majorScale.indexOf(theName) + mode == -5
                    ? "2"
                    : majorScale.indexOf(theName) + mode == -4
                    ? "3"
                    : majorScale.indexOf(theName) + mode == -3
                    ? "4"
                    : majorScale.indexOf(theName) + mode == -2
                    ? "5"
                    : majorScale.indexOf(theName) + mode == -1
                    ? "6"
                    : majorScale.indexOf(theName) + mode == 0
                    ? "7"
                    : majorScale.indexOf(theName) + mode}
                </div>
              </button>
            ) : (
              <button
                style={{ width: 40, opacity: 0 }}
                onClick={() => {
                  console.log(index, row, theName);
                }}
              >
                <div>__</div>
              </button>
            )
          )}{" "}
        </View>
      );
    } else if (minor) {
      return (
        <View style={{ margin: "auto", height: 22 }}>
          {row < 10 ? (
            <div
              style={{
                marginRight: "11px",
                marginRight: 270,
                marginBottom: -22,
                fontWeight: "bold",
              }}
            >
              {" "}
              {row}{" "}
            </div>
          ) : (
            <div
              style={{
                marginRight: "0px",
                marginRight: 270,
                marginBottom: -22,
                fontWeight: "bold",
              }}
            >
              {row}
            </div>
          )}
          {names.map((theName, index) =>
            theName == minorScale[0] ||
            theName == minorScale[1] ||
            theName == minorScale[2] ||
            theName == minorScale[3] ||
            theName == minorScale[4] ||
            theName == minorScale[5] ||
            theName == minorScale[6] ? (
              <button
                style={{ width: 40, position: "relative", border: "solid 2px" }}
                onClick={() => {
                  press(index, row, theName);
                }}
              >
                <div>
                  {theName.charAt(1) == "_" ? theName.charAt(0) + "_" : theName}

                  {minorScale.indexOf(theName) + mode == -6
                    ? "1"
                    : minorScale.indexOf(theName) + mode == -5
                    ? "2"
                    : minorScale.indexOf(theName) + mode == -4
                    ? "3"
                    : minorScale.indexOf(theName) + mode == -3
                    ? "4"
                    : minorScale.indexOf(theName) + mode == -2
                    ? "5"
                    : minorScale.indexOf(theName) + mode == -1
                    ? "6"
                    : minorScale.indexOf(theName) + mode == 0
                    ? "7"
                    : minorScale.indexOf(theName) + mode}
                </div>
              </button>
            ) : (
              <button
                style={{ width: 40, opacity: 0 }}
                onClick={() => {
                  console.log(index, row, theName);
                }}
              >
                <div>__</div>
              </button>
            )
          )}{" "}
        </View>
      );
    } else if (harmMinor) {
      return (
        <View style={{ margin: "auto", height: 22 }}>
          {row < 10 ? (
            <div
              style={{
                marginRight: "11px",
                marginRight: 270,
                marginBottom: -22,
                fontWeight: "bold",
              }}
            >
              {" "}
              {row}{" "}
            </div>
          ) : (
            <div
              style={{
                marginRight: "0px",
                marginRight: 270,
                marginBottom: -22,
                fontWeight: "bold",
              }}
            >
              {row}
            </div>
          )}
          {names.map((theName, index) =>

            theName == harmMinorScale[0] ||
            theName == harmMinorScale[1] ||
            theName == harmMinorScale[2] ||
            theName == harmMinorScale[3] ||
            theName == harmMinorScale[4] ||
            theName == harmMinorScale[5] ||
            theName == harmMinorScale[6] ? (

              theName == "F_" && harmMinorScale[6] == "F_" ?   <button
              style={{ width: 40, position: "relative", border: "solid 2px" }}
              onClick={() => {
                press(index, row, theName);
              }}
            >
              <div>
                E##7
              </div>
            </button> : theName == "C_" && harmMinorScale[6] == "C_" ?   <button
              style={{ width: 40, position: "relative", border: "solid 2px" }}
              onClick={() => {
                press(index, row, theName);
              }}
            >
              <div>
                B#7
              </div>
            </button> : theName == "G_" && harmMinorScale[6] == "G_" ?   <button
              style={{ width: 40, position: "relative", border: "solid 2px" }}
              onClick={() => {
                press(index, row, theName);
              }}
            >
              <div>
              F##7
              </div>
            </button> :

              <button
                style={{ width: 40, position: "relative", border: "solid 2px" }}
                onClick={() => {
                  press(index, row, theName);
                }}
              >
                <div>
                  {theName}

                  {/* { harmMinorScale[0].charAt(0) == harmMinorScale[6].charAt(0) ? theName + "#" : theName }
                   */}

                  {harmMinorScale.indexOf(theName) + mode == -6
                    ? "1"
                    : harmMinorScale.indexOf(theName) + mode == -5
                    ? "2"
                    : harmMinorScale.indexOf(theName) + mode == -4
                    ? "3"
                    : harmMinorScale.indexOf(theName) + mode == -3
                    ? "4"
                    : harmMinorScale.indexOf(theName) + mode == -2
                    ? "5"
                    : harmMinorScale.indexOf(theName) + mode == -1
                    ? "6"
                    : harmMinorScale.indexOf(theName) + mode == 0
                    ? "7"
                    : harmMinorScale.indexOf(theName) + mode}
                </div>
              </button>
            ) : (
              <button
                style={{ width: 40, opacity: 0 }}
                onClick={() => {
                  console.log(index, row, theName);
                }}
              >
                <div>__</div>
              </button>
            )
          )}{" "}
        </View>
      );
    } else {
      return <Text>no</Text> ;
    }
  };