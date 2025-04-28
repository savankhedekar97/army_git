import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Constitution from './pages/Documents and Rules/Constitution';
import OptimistRules from './pages/Documents and Rules/OptimistRules';
import DomesticSailingCalendar from './pages/Event/DomesticSailingCalendar';
import NOR from './pages/Event/NOR';
import Results from './pages/Event/Results';
import Images from './pages/Multimedia/Images';
import Videos from './pages/Multimedia/Videos';
import NewClubMembership from './pages/Documents and Rules/Forms/NewClubMembership';
import IssueOfOptiSailNumber from './pages/Documents and Rules/Forms/IssueOfOptiSailNumber';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/constitution' element={<Constitution />} />
        <Route path='/optimist-rules' element={<OptimistRules />} />
        <Route path='/domestic-sailing-calendar' element={<DomesticSailingCalendar />} />
        <Route path='/nor' element={<NOR />} />
        <Route path='/results' element={<Results />} />
        <Route path='/images' element={<Images />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/forms/new-club-membership' element={<NewClubMembership />} />
        <Route path='/forms/issue-opti-sail-number' element={<IssueOfOptiSailNumber />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
