import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Upload from "../pages/Upload";
import Collection from "../pages/Collection";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Gallery />}/>
            <Route path="/upload" element={<Upload />}/>
            <Route path="/collection/:id" element={<Collection />}/>
        </Routes>
        </BrowserRouter>
    );
}