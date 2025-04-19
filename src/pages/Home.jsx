import React from 'react';
import Banner from '../components/Banner/Banner';
import PhoneContainer from '../components/PhoneContainer/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const phones = useLoaderData();
  return (
    <div>
      <Banner />
      <PhoneContainer phones={phones} />
    </div>
  );
};

export default Home;
