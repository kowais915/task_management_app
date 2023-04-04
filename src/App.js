import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BoardsArea from './components/BoardsArea';

function App() {
  return (
    

    <div className="App">
      
    <BrowserRouter>
    <Navbar />

    <div className="main_ui">
        <Sidebar/>

        <BoardsArea/>

    </div>
    

          {/* routes */}

            <Routes>
        

            </Routes>
      
            </BrowserRouter>
    
      
    </div>

    
  );
}

export default App;
