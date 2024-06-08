
import { useEffect, useRef, useState } from "react";

export function Componentone() {
  const [start, setStart] = useState(false);
  const [Player, SetPlayer] = useState("");
  const [Counts, setCounts] = useState(30);
  const [array, SetArray] = useState(new Map());
  const [win, setWin] = useState("");
  const [First_Player, Choosef] = useState("O");
  const [Second_Player, Chooses] = useState("X");

  useEffect(() => {
    let stop = false;
    if (array.get("1") == array.get("5") && array.get("1") == array.get("9") && array.get("1") !== undefined) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);

    } else if ((array.get("3") == array.get("5") && array.get("3") == array.get("7")) && array.get("3") !== undefined) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if ((array.get("1") == array.get("2") && array.get("1") == array.get("3") && array.get("1") != undefined)) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if ((array.get("1") == array.get("4") && array.get("1") == array.get("7") && array.get("1") != undefined)) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if ((array.get("4") == array.get("5") && array.get("4") == array.get("6") && array.get("4") != undefined)) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if ((array.get("7") == array.get("8") && array.get("7") == array.get("9") && array.get("7") != undefined)) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if ((array.get("2") == array.get("5") && array.get("2") == array.get("8") && array.get("2") != undefined)) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if ((array.get("3") == array.get("6") && array.get("3") == array.get("9") && array.get("3") != undefined)) {
      setCounts(0);
      setWin(Player);
      console.log("good")
      stop = true;
      console.log(win);
    } else if (array.size == 9) {
      setCounts(0);
      setWin("Draw");
      console.log("good")
      stop = true;
      console.log(win);
    }
    console.log(stop);
    if (stop === false) {

      if (Player == "First Player") {
        SetPlayer("Second Player");
        setCounts(30);
      } else {
        SetPlayer("First Player");
        setCounts(30);
      }
    }
    console.log(array);
  }, [array]);


  const gamestart = () => {
    if (First_Player !== Second_Player) {
      setStart(true);
      SetPlayer("First Player");
      times();
    } else {
      alert("Player Chosse Either X or O");
    }
  };
  let audio = new Audio("rclick-13693.mp3");
  const touch = (r) => {
    if (win === "") {
      if (Player == "First Player") {
        document.getElementById(r).innerHTML = First_Player;
        const j = new Map(array);
        j.set(r, First_Player);
        audio.play();
        SetArray(j);


      } else {
        document.getElementById(r).innerHTML = Second_Player;
        const j = new Map(array);
        j.set(r, Second_Player);
        SetArray(j);
        audio.play();

      }
    }
    // let f = win_drow();
    // console.log(f);
    // if (f) {
    //   setCounts(0);
    // }
    // setCounts(30);
  };
  let timer;
  if (Counts == 0 && win === "" && array.size < 9) {
    if (Player == "First Player") {
      SetPlayer("Second Player");
    } else {
      SetPlayer("First Player");
    }
    setCounts(p => p = 30);
  }
  const times = () => {

    timer = setInterval(() => {
      setCounts((prev) => {
        if (prev == 0) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };
  const reset = () => {
    window.location.reload();
  }

  // const win_drow = () => {


  //   return false;
  // }
  console.log(First_Player);
  console.log(Second_Player);
  return (
    <>
      <div className="container mt-2">
        <div style={{ width: "50%", height: "auto" }}>
          <div className="row">
            <div className="col-md-3">
              <p className="text-white">Choose:</p>
            </div>
            <div className="col-md-3">
              <p className="text-white">First Player:</p>
              <select onChange={(e) => Choosef(e.target.value)}>
                <option>O</option>
                <option>X</option>
              </select>
            </div>
            <div className="col-md-3">
              <p className="text-white">Second Player:</p>
              <select onChange={(e) => Chooses(e.target.value)}>
                <option>X</option>
                <option>O</option>
              </select>
            </div>

          </div>
        </div>
        <div
          style={{
            width: "60%",
            height: "300px",
            position: "relative",
            margin: "auto",
            top: "100px",
          }}
        >
          {start && <p className="text-center fs-4 text-white">
            Player:
            <br />
            {Player !== "" ? (
              <span>
                {Player}
                <br />
                <span>{Counts}</span>
              </span>
            ) : (
              <span>Players</span>
            )}
            <br />
          </p>}
          <p className="text-center fs-4 text-white">{win !== "" && win !== "Draw" && <span> Win {win}  <br />play try again</span>}{win !== "" && win == "Draw" && <span> Match {win}  <br />play try again</span>}</p>
          <div
            style={{
              width: "70%",
              height: "300px",
              position: "relative",
              margin: "auto",
              backgroundColor: "rgb(150,111,51)",
            }}
          >
            <ComponenetTwo Start={start} functions={touch} Array={array} />
            <br />
            <br />
            <br />
            <br />
            {!start && (
              <button className="btn ms-lg-5" onClick={gamestart}>
                Start
              </button>
            )}
            <button className="btn me-lg-5" style={{ float: "right" }} onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function ComponenetTwo(props) {

  const { functions, Array } = props;

  useEffect(() => {

  }, [])
  return (
    <>
      <div
        style={{
          width: "50%",
          height: "50%",
          position: "relative",
          transform: "translate(50%, 50%)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", height: "100%", position: "absolute" }}>
          <tr style={{ borderBottom: "3px solid black" }}>
            <td
              style={{
                borderRight: "3px solid black",
                fontSize: "30px",
                height: "50px",
                width: "60px",
                textAlign: "center"

              }}
              id="1"
              onClick={props.Start == true && Array.get("1") == undefined ? ((e) => functions(e.target.id)) : null}
              readonly
            ></td>
            <td
              style={{
                borderRight: "3px solid black",
                fontSize: "30px",
                height: "50px", width: "60px",
                textAlign: "center"

              }} onClick={props.Start == true && Array.get("2") == undefined ? ((e) => functions(e.target.id)) : null}
              id="2" ></td>
            <td style={{
              fontSize: "30px", height: "50px", height: "50px", width: "60px",
              textAlign: "center"
            }} id="3" onClick={props.Start == true && Array.get("3") == undefined ? ((e) => functions(e.target.id)) : null}></td>
          </tr>
          <tr style={{ borderBottom: "3px solid black" }}>
            <td
              style={{
                borderRight: "3px solid black",
                fontSize: "30px",
                height: "50px",
                width: "60px",
                textAlign: "center"

              }} id="4" onClick={props.Start == true && Array.get("4") == undefined ? ((e) => functions(e.target.id)) : null}
            ></td>
            <td
              style={{
                borderRight: "3px solid black",
                fontSize: "30px",
                height: "50px", width: "60px",
                textAlign: "center"

              }} id="5" onClick={props.Start == true && Array.get("5") == undefined ? ((e) => functions(e.target.id)) : null}
            ></td>
            <td id="6" style={{
              fontSize: "30px", height: "50px", height: "50px", width: "60px",
              textAlign: "center"
            }} onClick={props.Start == true && Array.get("6") == undefined ? ((e) => functions(e.target.id)) : null}></td>
          </tr>
          <tr>
            <td
              style={{
                borderRight: "3px solid black",
                fontSize: "30px",
                height: "50px",
                width: "60px",
                textAlign: "center"

              }} id="7" onClick={props.Start == true && Array.get("7") == undefined ? ((e) => functions(e.target.id)) : null}
            ></td>
            <td
              style={{
                borderRight: "3px solid black",
                fontSize: "30px",
                height: "50px",
                width: "60px",
                textAlign: "center"

              }} id="8" onClick={props.Start == true && Array.get("8") == undefined ? ((e) => functions(e.target.id)) : null}
            ></td>
            <td style={{
              fontSize: "30px", height: "50px", width: "60px",
              textAlign: "center"
            }} id="9" onClick={props.Start == true && Array.get("9") == undefined ? ((e) => functions(e.target.id)) : null}></td>
          </tr>
        </table>
      </div>
    </>
  );
}



