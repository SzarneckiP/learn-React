import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        cards: PropTypes.array,
        icon: PropTypes.node,
    };

    static defaultProps = {
        icon: settings.defaultColumnIcon,
    };


    render() {
        const { title, icon, cards } = this.props;
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{title}
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                </h3>
                {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                ))}
            </section>
        );
    }
}


export default SearchResults;