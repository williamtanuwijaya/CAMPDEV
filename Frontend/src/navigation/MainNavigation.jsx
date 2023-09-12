import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import Header from '../sections/index/header/Header';
import Courses from '../sections/index/courses/Courses';
import Faqs from '../sections/index/faqs/Faqs';
import Navbar from '../sections/index/navbar/Navbar';
import Categories from '../sections/index/categories/Categories';
import Achievements from '../sections/about/achievement/Achievements';
import CreatorPage from '../sections/about/creatorPage/CreatorPage';
import Testimonial from '../sections/index/testimonial/Testimonial';
import Footer from '../sections/index/footer/Footer';
import Contact from '../sections/contact/Contact';
import Course from '../sections/course/Courses';

export const Index = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Categories />
            <Courses />
            <Faqs />
            {/* <Testimonial /> */}
            <Footer />
        </>
    )
}

export const About = () => {
    return (
        <>
            <Navbar />
            <Achievements />
            <CreatorPage />
            <Footer />
        </>
    )
}

export const Contac = () => {
    return (
        <>
            <Navbar />
            <Contact />
            <Footer />
        </>
    )
}

export const CoursePage = () => {
    return (
        <>
            <Navbar />
            <Course/>
            <Footer />
        </>
    )
}

const MainNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contac />} />
                <Route path="/Course" element={<CoursePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation