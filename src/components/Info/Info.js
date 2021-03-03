import React from 'react';
import Container from '../Container/Container';
import { pageData } from '../../data/dataStore';
import Hero from '../Hero/Hero';


const Info = () => (
    <Container>
        <Hero title={pageData.infoTitle} image={pageData.image} />
        <div>
            <h2>{pageData.infoTitle}</h2>
            <p>{pageData.infoDescription}</p>
        </div>
    </Container>
);

export default Info;