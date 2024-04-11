import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBook from "./component/CreateBook";
import AllBooks from './component/AllBooks';
import UpdateBook from './component/UpdateBook';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CreateBook/>}/>
      <Route exact path="/books" element={<AllBooks/>}/>
      <Route exact path="/updatebook/:bid" element={<UpdateBook/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
