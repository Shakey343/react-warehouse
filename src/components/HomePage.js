import React from 'react';
import './HomePage.scss';
import { MapBox } from './MapBox';
import Stack from 'react-bootstrap/Stack';

export const HomePage = () => {
  return (
    <>
    <Stack direction="horizontal" gap={3}>
    <div className="hp-content" >
      <p>Nestled in the cultural heart of London, The Warehouse Waterloo is a 4000 square feet studio complex, converted from two Victorian warehouses, just a few minutes walk from Waterloo Station. The Warehouse offers an exhaustive range of versatile facilities, appropriate for multi-purpose use by groups of various sizes. Clients range from orchestras, theatre productions, radio and television companies, and national and international corporations. The building has maintained all the charm of its original architecture to produce a unique space which is both beautiful and acoustically perfect.</p>
      <p>The Warehouse complex consists of two large studio spaces with adjoining kitchens, a courtyard and patio and recording facilities/ production office. These spaces can be hired singley or together as an exclusive corporate hub.</p>
      <p>Surrounded by many of London's landmark attractions, visiting and working at The Warehouse is always a treat. It is just a short walk to most of London's famous landmarks, however local, national and international transport hubs are just a few minutes away to get you there even faster.</p>
    </div>
    <MapBox />
    </Stack>
    </>
  );
}
