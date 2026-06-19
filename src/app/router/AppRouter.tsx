import React, {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
const Shop = lazy(() => import("../../pages/shop/Shop"));
const About = lazy(() => import("../../pages/about/About"));
const Play = lazy(() => import("../../pages/play/Play"));
const Work = lazy(() => import("../../pages/work/Work"));
const Book = lazy(() => import("../../pages/Book"));
const HyperCleanser = lazy(() => import("../../pages/work/HyperCleanser"));
const Local = lazy(() => import("../../pages/work/Local"));
const Branding = lazy(() => import("../../pages/work/Branding"));
const HyperSunscreen = lazy(() => import("../../pages/work/HyperSunscreen"));
export default function AppRouter(){
    return(
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path='/' element={<MainLayout />}>
            <Route index element={<Work />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="/book" element={<Book />} />
            <Route path="/work/hyper-sunscreen" element={<HyperSunscreen />} />
            <Route path="/work/hyper-cleanser" element={<HyperCleanser />} />
            <Route path="/work/local" element={<Local />} />
            <Route path="/work/branding" element={<Branding />} />
            </Route>
        </Routes>
    </Suspense>
    )
} 