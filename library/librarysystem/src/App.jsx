import React from 'react'
import NavebarCompont from './Component/NavebarCompont'
import { Route, Routes } from 'react-router-dom'
import AuthorComponent from './Component/AuthorComponent'
import AddAuthorComponent from './Component/AddAuthorComponent'
import AddCatogoryComponent from './Component/AddCatogoryComponent'


const App = () => {
  return (
    <div>
       <NavebarCompont />

<Routes>
  <Route path='/author' element={<AuthorComponent />}></Route>
  <Route path='/addauthor' element={<AddAuthorComponent />}></Route>
  <Route path='/addcatogory' element={<AddCatogoryComponent />}></Route>

 
  
</Routes>
    </div>
  )
}

export default App
