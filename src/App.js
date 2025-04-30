import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

import Constitution from './pages/DocumentsAndRules/Constitution';
import OptimistRules from './pages/DocumentsAndRules/OptimistRules';
import NewClubMembership from './pages/DocumentsAndRules/Forms/NewClubMembership';
import IssueOfOptiSailNumber from './pages/DocumentsAndRules/Forms/IssueOfOptiSailNumber';

import DomesticSailingCalendar from './pages/Event/DomesticSailingCalendar/DomesticSailingCalendar';
import NOR from './pages/Event/NOR/NOR';
import Results from './pages/Event/Results/Results';
import ViewCalendar from './pages/Event/ViewCalendar';

import Images from './pages/Multimedia/Images';
import Video from './pages/Multimedia/Video';

export default function App() {
  return (
    <>
      {/* <Banner /> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/constitution' element={<Constitution />} />
        <Route path='/optimist-rules' element={<OptimistRules />} />
        <Route path='/forms/new-club-membership' element={<NewClubMembership />} />
        <Route path='/forms/issue-opti-sail-number' element={<IssueOfOptiSailNumber />} />
        <Route path='/domestic-sailing-calendar' element={<DomesticSailingCalendar />} />
        <Route path='/nor' element={<NOR />} />
        <Route path='/results' element={<Results />} />
        <Route path='/view-calendar' element={<ViewCalendar />} />

        <Route path='/images' element={<Images />} />
        <Route path='/videos' element={<Video />} />
      </Routes>

      <Footer />
    </>
  );
}
