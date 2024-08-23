import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <div className="noteContainer">
        <Note key={1} title="Note title" content="Note content" /> 
      </div>
      <Footer /> 
    </div>
  );
}

export default App;