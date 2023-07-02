import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import WritePost from "./Pages/WritePost/WritePost";

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <WritePost/>
    </div>
  );
}

export default App;
