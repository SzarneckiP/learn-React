import React from 'react';
import Container from '../Container/Container';
import { pageData } from '../../data/dataStore';
import Hero from '../Hero/Hero';


class FAQ extends React.Component {


    render() {
        return (
            <Container>
                <Hero title={pageData.title} image={pageData.image} />
                <div>
                    <h2>{pageData.faqTitle}</h2>
                    <p>{pageData.faqDescription}</p>
                </div>
            </Container >
        );
    }
}


export default FAQ;