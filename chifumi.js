function chifumi(playerOneChoice, playerTwoChoice) {
  console.log(`player 1 joue ${playerOneChoice}`);

  if (
    playerOneChoice !== "pierre" &&
    playerOneChoice !== "feuille" &&
    playerOneChoice !== "ciseau"
  ) {
    console.log(
      `player 1 a fait n\'importe quoi, il a joué "${playerOneChoice}"`
    );
  }
  console.log(`player 2 joue ${playerTwoChoice}`);
  if (
    playerTwoChoice !== "pierre" &&
    playerTwoChoice !== "feuille" &&
    playerTwoChoice !== "ciseau"
  ) {
    console.log(
      `player 2 a fait n\'importe quoi, il a joué "${playerTwoChoice}"`
    );
  }
  if (playerOneChoice === playerTwoChoice) {
    console.log("égalité");
  } else if (playerOneChoice === "pierre") {
    switch (playerTwoChoice) {
      case "ciseau":
        console.log("player 1 gagne");
        break;
      case "feuille":
        console.log("player 2 gagne");
        break;
      default:
        `player 2 a fait n\'importe quoi, il a joué "${playerTwoChoice}"`;
    }
  } else if (playerOneChoice === "feuille") {
    if (playerTwoChoice === "pierre") {
      console.log("player 1 gagne");
    } else if (playerTwoChoice === "ciseau") {
      console.log("player 2 gagne");
    } else {
      console.log(
        `player 2 a fait n\'importe quoi, il a joué "${playerTwoChoice}"`
      );
    }
  } else if (playerOneChoice === "ciseau") {
    if (playerTwoChoice === "pierre") {
      console.log("player 2 gagne");
    } else if (playerTwoChoice === "feuille") {
      console.log("player 1 gagne");
    } else {
      console.log(
        `player 2 a fait n\'importe quoi, il a joué "${playerTwoChoice}"`
      );
    }
  }
}

chifumi("voiture", "ciseau");


