import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Layout from "./components/layout/Layout";
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

// =======================================================
// ✅ Wrapper that hides Header on specific routes
// =======================================================
// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     return (
//         <>
//             {/* {!shouldHideHeader && <Header />} */}
//             {children}
//         </>
//     );
// };
// =======================================================

const App = () => (
    <div className="font-primarylw">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile/:handle" element={<Profile />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;
