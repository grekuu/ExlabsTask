import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import BeerDetail from './components/BeerDetail/BeerDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
    return (
        <>
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/details/:beerId" element={<BeerDetail />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
