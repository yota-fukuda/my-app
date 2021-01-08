import React from 'react';
import styled from 'styled-components';
import SliderData from '../SliderData/SliderData'

const Layout = styled.div`
  margin: 0 auto;
  width: 1024px;
  background-color: #fff;
  @media (max-width: 1024px) {
    wdth: 100%;
}
    .font {
      padding: 75px 0;
      font-size: 6em;
      font-weight: bold;
      font-family: Helvetica;
      text-shadow: 
        0 1px 0 #ccc, 
        0 2px 0 #c9c9c9, 
        0 3px 0 #bbb, 
        0 4px 0 #b9b9b9, 
        0 5px 0 #aaa, 
        0 6px 1px rgba(0,0,0,.1), 
        0 0 5px rgba(0,0,0,.1), 
        0 1px 3px rgba(0,0,0,.3), 
        0 3px 5px rgba(0,0,0,.2), 
        0 5px 10px rgba(0,0,0,.25), 
        0 10px 10px rgba(0,0,0,.2), 
        0 20px 20px rgba(0,0,0,.15);
      }
`;

const FirstPage = () => {
  return (
    <>
      <Layout>
        <div className="font">
          No Bike No Life!
        </div>
      <SliderData />
      </Layout>
    </>
  );
}

export default FirstPage;