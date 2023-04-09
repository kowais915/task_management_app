import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BoardsArea from './components/BoardsArea';
import {useState} from 'react';

function App() {
  const [modal, setModal ] = useState(false); 
  const [taskModal, setTaskModal ] = useState(false);
  const [columns, setColumns ] = useState(false);
  const [boardColumns, setBoardColumns] = useState([]);




  // functions
const handleBoardColumns = (event)=>{
  setBoardColumns((prevBoardColumns) => {
    return [...prevBoardColumns, event]
  })
}

const modalHandler = () => {
    setModal(!modal);
}


const taskModalHandler = () => {
  setTaskModal(!taskModal);
}

const columnsHandler = () => {
  setColumns(!columns);
}




  return (
    

    <div className="App">
      
    <BrowserRouter>
    <Navbar taskModal={taskModal} taskModalHandler={taskModalHandler} />

    <div className="main_ui">
        <Sidebar modalHandler={modalHandler} handleBoardColumns = {handleBoardColumns} modal={modal}/>

        <BoardsArea boardColumns = {boardColumns} columns={columns} columnsHandler = {columnsHandler} />

    </div>
    

          {/* routes */}

            <Routes>
        

            </Routes>
      
            </BrowserRouter>
    
      
    </div>

    
  );
}

export default App;
