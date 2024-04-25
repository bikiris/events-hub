import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Layout from './Pages/Layout';
import MainPage from './Pages/MainPage';
import Events from './Pages/Events';
import EventDetail from './Pages/EventDetail';
import CreateEvent from './Pages/CreateEvent';
import EditEvent from './Pages/EditEvent';

const RouterHelper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index={true} element={<MainPage />} />
                    <Route path='events' element={<Events />} />
                    <Route path='events/:id' element={<EventDetail />} />
                    <Route path='create' element={<CreateEvent />} />
                    <Route path='edit/:id' element={<EditEvent />} />
                </Route>
                <Route
                    path='*'
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There&apos;s nothing here!</p>
                            <Link style={{ color: "white" }} to='/'>
                                Back to Home
                            </Link>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )   
}

export default RouterHelper;