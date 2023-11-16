// import Friends from '../../assets/images/friends.webp'

// const GameInfo = ({ status, winner, xIsNext }) => {
//   return (
//     <section className="game-information">
//       {xIsNext && !winner ? (
//         <h3 className="player-x">It's your turn, player X</h3>
//       ) : !xIsNext && !winner ? (
//         <h3 className="player-o">Now you, player O! </h3>
//       ) : winner && status === 'Winner: X' ? (
//         <h3 className="player-x">Nice! I won! </h3>
//       ) : (
//         <h3 className="player-o">Wohoo! I made it!</h3>
//       )}
//       <img src={Friends} alt="Player X and Player O" />
//     </section>
//   )
// }

// export default GameInfo
import Friends from '../../assets/images/friends.webp';

const GameInfo = ({ status, winner, xIsNext }) => {
  let message;
  let dialogueBoxClassName;

  if (winner) {
    message = winner === 'X' ? 'Nice! Player X won!' : 'Wohoo! Player O made it!';
    dialogueBoxClassName = 'player-x'; // Set class for Player X
  } else if (status === "It's a tie!") {
    message = "It's a Tie";
    dialogueBoxClassName = 'player-x'; // Set class for Tie
  } else {
    message = xIsNext ? "It's your turn, player X" : "Now you, player O!";
    dialogueBoxClassName = xIsNext ? 'player-x' : 'player-o'; // Set class based on player turn
  }

  return (
    <section className="game-information">
      <div className={`dialogue-box ${dialogueBoxClassName}`}>
        <h3>{message}</h3>
      </div>
      <img src={Friends} alt="Player X and Player O" />
    </section>
  );
};

export default GameInfo;
