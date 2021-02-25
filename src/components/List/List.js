import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {
    //state = {
    //    columns: this.props.columns || [],
    //}

    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        image: PropTypes.string,
        addColumn: PropTypes.func,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    /*addColumn(title) {
        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: [],
                    },
                ],
            }
        ));
    }*/

    render() {
        const { title, image, description, columns, addColumn } = this.props;
        return (
            <section className={styles.Component}>
                <Hero titleText={title} image={image} />
                <div className={styles.description}>
                    {ReactHtmlParser(description)}
                </div>
                <div className={styles.columns}>
                    {columns.map(columnData => (
                        <Column key={columnData.id} {...columnData} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={addColumn} />
                </div>
            </section>
        );
    }
}

export default List;
