import React from 'react';
import Container from '../Container/Container';
import { pageData } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './FAQ.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

class FAQ extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        image: PropTypes.string,
    }

    render() {
        const { title, image } = this.props;
        return (
            <Container>
                <Hero title={title} image={image} />
                <header className={styles.component}>
                    <h2 className={styles.title}>{ReactHtmlParser(pageData.title)}</h2>
                    <img className={styles.image} src={pageData.image} alt="space"></img>
                </header>
                <div>
                    <h2>{pageData.faqTitle}</h2>
                    <p>{pageData.faqDescription}</p>
                </div>
            </Container >
        );
    }
}


export default FAQ;