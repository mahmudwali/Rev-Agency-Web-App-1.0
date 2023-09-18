import React from 'react';
import AllProject from './../components/AllProject';
import HeroNav from './../components/HeroNav';
import Statictics from './../components/Statictics';
import Contacts from '@/components/Contacts';
import Brands from '@/components/Brands';

const page = () => {
  return (
    <div>
      <HeroNav/>
      <Statictics/>
      <AllProject/>
      <Contacts/>
      <Brands/>
    </div>
  );
};

export default page;