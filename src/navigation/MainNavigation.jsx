import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import Header from '../sections/index/header/Header';
import Courses from '../sections/index/courses/Courses';
import Faqs from '../sections/index/faqs/Faqs';
import Navbar from '../sections/index/navbar/Navbar';
import Categories from '../sections/index/categories/Categories';
import Achievements from '../sections/about/achievement/Achievements';
import CreatorPage from '../sections/about/creatorPage/CreatorPage';

export const Index = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Courses />
            <Faqs />
            <Categories />
        </>
    )
}

export const About = () => {
    return (
        <>
            <Navbar />
            <Achievements/>
            <CreatorPage/>
        </>
    )
}

const MainNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation