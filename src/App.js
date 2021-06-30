import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icons from "./components/Icons";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      //checking for match tie
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage("Match Tie");
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "smile";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-800 text-white items-center p-10">
      <ToastContainer position="bottom-center" />
      <h1 className="text-4xl">Tic Tac Game Build with ReactJS & Tailwind</h1>
      {winMessage ? (
        <div className="mt-4 mb-4 ">
          <h1 className="text-center text-2xl capitalize font-bold text-green-600">
            {winMessage}
          </h1>
          <button
            className="bg-blue-800 p-3 my-4 rounded-md font-bold"
            onClick={reloadGame}
          >
            Restart Game
          </button>
        </div>
      ) : (
        <h1 className="text-center text-red-500 text-xl mt-5">
          {isCross ? "Cross's" : "Smile's"} Turn
        </h1>
      )}
      <div className="grid grid-cols-3 grid-rows-3 mt-10 gap-5 ">
        {itemArray.map((item, index) => (
          <div
            onClick={() => changeItem(index)}
            className=" cursor-pointer flex h-20 w-20 bg-yellow-500 rounded-md justify-center items-center"
          >
            <Icons name={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
