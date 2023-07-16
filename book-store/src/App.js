import React from 'react'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import AddBook from './components/Book/AddBook';
import Home from './components/Home';
import Books from './components/Book/Books';
import AboutUs from './components/AboutUs';
import BookDetail from './components/Book/BookDetail'
function App() {
  return (
   <React.Fragment>
   <header>
     <Header></Header>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/add' element={<AddBook/>} exact />
        <Route path='/books' element={<Books />} exact/>
        <Route path='/about' element={<AboutUs/>} exact/>
        <Route path='/books/:id' element={<BookDetail/>} exact/>
      </Routes>
    </main>
     </React.Fragment>
   
  );
}

export default App;
