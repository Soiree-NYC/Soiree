import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import Home from './components/pages/Home';
import VenueDetails from './components/pages/VenueDetails';
import VenueIngestion from './components/pages/VenueIngestion';

import Test from './components/pages/Test';

import { checkExcludedPaths } from './utils/checkExcludedPaths';
import { homePageExclusions } from './shared/exclusionLists';

function App() {
  const [listItems, setListItems] = useState<number>(0);
  const { pathname } = useLocation();

  return (
    <div className='bg-gradient-to-b from-[#587ac1] via-[#587ac1] to-[#f5a97f] flex justify-center overflow-auto'>
      <div className='flex flex-col w-screen
        md:max-w-screen-xl md:pt-10
      '>
        {checkExcludedPaths(homePageExclusions, pathname) && <NavBar listItems={listItems} />}

        <Routes>
          <Route path='/' element={<Home venues={{getter: listItems, setter: setListItems}}/>} />
          <Route path='/venue/:id' element={<VenueDetails />} />
          <Route path='/addvenue' element={<VenueIngestion />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
