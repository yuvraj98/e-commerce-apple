import React from 'react';
import styled from 'styled-components'; // Replace with your CSS-in-JS library
import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import applemobileVideo from '../assets/video.mp4'; // Import your video asset
import img1 from '../assets/airpods.jpg';
import img2 from '../assets/iMac1.webp';
import img3 from '../assets/Air-3.webp';
import img4 from '../assets/images/applewatch.png';
import img5 from '../assets/images/mac.png';

import img6 from '../assets/images/iPhone14ProHeader.png'
import img7 from '../assets/images/watch1.jpeg'
import img8 from '../assets/images/apple1.jpeg'
import img9 from '../assets/images/WatchSeries8Header.jpg'
import img10 from '../assets/desktop.jpg'
import Footer from '../components/Footer';
import ImageLayout from '../components/ImageLayout';

const FullScreenVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover; /* Ensures video covers entire viewport */
  top: 0;
  left: 0;
  z-index: -1; /* Ensures other content is on top */
`;

const FullWidthContainer = styled.div`
  width: 100%;
`;

const contentData = [
  {
    imageSrc: img1,
    description: `Experience the unmatched speed and power with the new MacBook Pro. Equipped with the latest M1 chip, it's perfect for both professionals and creatives.`,
    side: 'left',
  },
  {
    imageSrc: img2,
    description: `Dive into the world of immersive sound with the new AirPods Pro. Featuring active noise cancellation and superior sound quality, they are your perfect audio companion.`,
    side: 'right',
  },
  {
    imageSrc: img3,
    description: `Revolutionize your fitness journey with the Apple Watch Series 7. Monitor your health metrics and stay connected on the go with this sleek and stylish wearable.`,
    side: 'left',
  },
  {
    imageSrc: img4,
    description: `Transform your living room with the Apple TV 4K. Enjoy stunning visuals and a vast selection of content, from movies to TV shows, all in one place.`,
    side: 'right',
  },
  {
    imageSrc: img5,
    description: `Capture every moment in exceptional detail with the new iPhone 15. Its advanced camera system and cutting-edge technology make it the ultimate smartphone experience.`,
    side: 'left',
  },
];

const Home = () => {
  return (
    <div className='overflow-x-hidden scree bg-richblue-25'>
      <FullScreenVideo src={applemobileVideo} autoPlay muted loop />
      <FullWidthContainer>
        <HeroSection />

          <ImageLayout img6 = {img6} img7 = {img7}></ImageLayout>
          
          <ImageLayout img6 = {img8} img7 = {img9}></ImageLayout>
          <ImageLayout img6 = {img1} img7 = {img10}></ImageLayout>




        {/* {contentData.map((content, index) => (
          <Container
            key={index}
            imageSrc={content.imageSrc}
            description={content.description}
            side={content.side}
          />
         
        ))} */}

        
         <Footer></Footer>
      </FullWidthContainer>
    </div>
  );
};

export default Home;
