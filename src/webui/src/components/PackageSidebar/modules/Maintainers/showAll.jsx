import React, {Component} from 'react';
import uniqBy from 'lodash/uniqBy';
import classes from './style.scss';

const showAll = (ComposedComponent, data = [], type, threshold = 5) => {
    return class ShowAll extends Component {
        state = {
            data,
            type,
            threshold,
            showAll: false,
        };

        constructor(props) {
            super(props);
            this.generateDataToShow = this.generateDataToShow.bind(this);
            this.handleShowAll = this.handleShowAll.bind(this);
        }

        /**
         * Handle entries mentiond as threshold of list to show
         * @param {array} list
         * @return {array}
         */
        generateDataToShow(list) {
            const {threshold, showAll} = this.state;
            if (showAll) {
              return list;
            }
            return uniqBy(list, (element) => element.name).slice(0, threshold);
        }

        /**
         * Handle showAll.
         * Sets boolean value in state
         */
        handleShowAll() {
            const {showAll} = this.state;
            this.setState({showAll: !showAll});
        }

        render() {
            const {data, threshold} = this.state;
            return <div>
                {this.generateDataToShow(data).map((e, i) => (
                  <ComposedComponent
                    key={i}
                    title="Author"
                    name={e.name}
                    avatar={e.avatar}
                  />
                ))}
                {
                    data.length > threshold ? (<button onClick={this.handleShowAll} className={classes.showAllContributors}
                        title="Current list only show the author and first 5 contributors unique by name">
                        Show all {this.state.type}
                    </button>) : ''
                }
              </div>;
        }
    };
};

export default showAll;

