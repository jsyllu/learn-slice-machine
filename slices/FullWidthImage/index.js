import React from 'react';
import { RichText } from 'prismic-reactjs';

const FullWidthImage = ({ slice }) => (
  <section className="container">
    <img src={slice.primary.image.url} atl={slice.primary.image.alt} />
  </section>
);

export default FullWidthImage;
