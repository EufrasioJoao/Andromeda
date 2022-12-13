import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Homepage } from "../pages/Homepage";


export function Router() { 

    

    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </BrowserRouter>
            </div>
            
    );
}
