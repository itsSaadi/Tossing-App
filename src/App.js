import "./App.css";

function App() {
  const tossHandle = () => {
    let a = prompt("Select Heads or Tails");
    if (a) {
      const result = Math.floor(Math.random() * 2);
      if (result === 0) {
        alert("Winner is Heads");
      } else {
        alert("Winner is Tails");
      }
    } else {
      alert("Please Select Heads or tails");
    }
  };
  return (
    <>
      <div className="container my-4">
        <h1>Welcome to Tossing app</h1>
        <button className="btn btn-primary" onClick={tossHandle}>
          Toss
        </button>
      </div>
    </>
  );
}

export default App;
