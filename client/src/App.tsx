import { Home, SignIn, SignUp, SingleProduct } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/product/:productId' element={<SingleProduct />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
