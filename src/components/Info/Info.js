import React from 'react';
import Container from '../Container/Container';
import styles from './Info.scss';
import { pageData } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Info = () => (
    <Container>
        <header className={styles.component}>
            <h2 className={styles.title}>{ReactHtmlParser(pageData.title)}</h2>
            <img className={styles.image} src={pageData.image} alt="space"></img>
        </header>
        <div>
            <h2>{pageData.infoTitle}</h2>
            <p>{pageData.infoDescription}</p>
        </div>
    </Container>
);

export default Info;