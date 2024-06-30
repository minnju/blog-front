import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignInSide from './component/SignInSide';
import SignUp from './component/SignUp';

export const BlogRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInSide />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignInSide />} />
            </Routes>
        </BrowserRouter>
    );
};
