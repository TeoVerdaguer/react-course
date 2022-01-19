// imports
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // Here is the place where you can write normal js
  const name = "Dev Teo";
  const message = "I went to sleep today wow";
  // Functions
  const sayHelloHanlder = (user) => {
    console.log(`Hello there ${user}`);
  };

  return (
    <div>
      {/* <CreateTweet/>
      <TweetList name={name} message={message}/> */}
      <h1>Hello React</h1>
      <button onClick={() => sayHelloHanlder('Mike')}>Click</button>
    </div>
  );
}

export default App;
