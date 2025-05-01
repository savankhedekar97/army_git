import React from "react";
import { Routes, Route } from "react-router-dom";

import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

import Constitution from "./pages/DocumentsAndRules/Constitution";
import OptimistRules from "./pages/DocumentsAndRules/OptimistRules";
import NewClubMembership from "./pages/DocumentsAndRules/Forms/NewClubMembership";
import IssueOfOptiSailNumber from "./pages/DocumentsAndRules/Forms/IssueOfOptiSailNumber";

import DomesticSailingCalendar from "./pages/Event/DomesticSailingCalendar/DomesticSailingCalendar";
import NOR from "./pages/Event/NOR/NOR";
import Results from "./pages/Event/Results/Results";
import ViewCalendar from "./pages/Event/ViewCalendar";

import Images from "./pages/Multimedia/Images";
import Video from "./pages/Multimedia/Video";

// 🆕 News-related pages
import News from "./pages/News/News";
import YouthNational from "./pages/News/YouthNational";
import WetAndWild from "./pages/News/WetAndWild";
import NotFound from "./components/Notfound/NotFound";

export default function App() {
  return (
    <>
      {/* <Banner /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/constitution" element={<Constitution page="non-home" />} />
        <Route path="/optimist-rules" element={<OptimistRules />} />
        <Route path="/forms/new-club-membership" element={<NewClubMembership />} />
        <Route path="/forms/issue-opti-sail-number" element={<IssueOfOptiSailNumber />} />

        <Route path="/domestic-sailing-calendar" element={<DomesticSailingCalendar page="non-home" />} />
        <Route path="/nor" element={<NOR />} />
        <Route path="/results" element={<Results />} />
        <Route path="/view-calendar" element={<ViewCalendar />} />

        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Video />} />

        {/* 🆕 News Sub-Routes */}
        <Route path="/news" element={<News />} />
        <Route path="/news/youth-national" element={<YouthNational />} />
        <Route path="/news/wet-and-wild" element={<WetAndWild />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
