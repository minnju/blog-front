import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Blog from './component/common/Blog';
import SignInSide from './component/signIn/SignInSide';
import SignUp from './component/signIn/SignUp';

export const BlogRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInSide />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignInSide />} />
                <Route path="/main" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
};
