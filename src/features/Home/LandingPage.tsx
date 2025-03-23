import React, { useEffect, useRef, useState } from 'react';
import generateStars, { StarProps } from './utils/generateStars';
import Star from './components/Star';
import CouchImage from '../../assets/couch.png';
import PlantImage from '../../assets/plant.png';
import CoffeeTableImage from '../../assets/coffeeTable.png';
import Hero from './components/Hero';
import './LandingPage.css';

const LandingPage = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const starFieldRef = useRef<HTMLDivElement>(null);

  const regenerateStars = () => {
    const generatedStars = generateStars();
    const starElements = generatedStars.map((star: StarProps, index: number) => (
      <Star key={index} top={star.top} left={star.left} size={star.size} duration={star.duration} />
    ));
    setStars(starElements);
  };

  useEffect(() => {
    // Generate stars when the component mounts
    regenerateStars();

    // Add event listener for window resize
    window.addEventListener('resize', regenerateStars);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', regenerateStars);
    };
  }, []);

  return (
    <div className='landing-page' ref={starFieldRef}>
      <div className='stars'>{stars}</div>
      <Hero></Hero>
      <div className='moon' />
      <img className='couch' src={CouchImage} alt='Couch' />
      <img className='plant' src={PlantImage} alt='Plant' />
      <img className='coffee-table' src={CoffeeTableImage} alt='Coffee Table' />
    </div>
  );
};

export default LandingPage;
