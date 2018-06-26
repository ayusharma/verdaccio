/**
 * Package Meta consist following three fields for collaborators infromation.
 * 1. author - object
 * 2. contributors - array of objects
 * 3. maintainers: array of human objects for people with permission to publish
 *    this package; not authoritative but informational
 *
 * @see https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classes from './style.scss';

import Module from '../../Module';
import showAll from './showAll';
import MaintainerInfo from './MaintainerInfo';

export default class Maintainers extends React.Component {
  static propTypes = {packageMeta: PropTypes.object.isRequired};

  state = {};

  constructor(props) {
    super(props);
    console.log(props);
  }

  /**
   * Get author information form package meta
   * @return {string}
   */
  get author() {
    return get(this, 'props.packageMeta.latest.author');
  }

  /**
   * List of contributors
   * @return {array}
   */
  get contributors() {
    // return get(this, 'props.packageMeta.latest.contributors', []);
    return [{
      name: 'Mayne',
      email: 'mdevitt0@mtv.com',
      avatar: 'https://robohash.org/quisquoperspiciatis.bmp?size=50x50&set=set1'
    }, {
      name: 'Brok',
      email: 'bvanshin1@freewebs.com',
      avatar: 'https://robohash.org/quiadelectuset.png?size=50x50&set=set1'
    }, {
      name: 'Nickola',
      email: 'ngerard2@tumblr.com',
      avatar: 'https://robohash.org/repellenduseaut.bmp?size=50x50&set=set1'
    }, {
      name: 'Antony',
      email: 'akolczynski3@wikia.com',
      avatar: 'https://robohash.org/consectetureosaut.png?size=50x50&set=set1'
    }, {
      name: 'Irving',
      email: 'ibohin4@ehow.com',
      avatar: 'https://robohash.org/quiaaperiamporro.jpg?size=50x50&set=set1'
    }, {
      name: 'Gavan',
      email: 'gonions5@utexas.edu',
      avatar: 'https://robohash.org/aspernaturimpeditest.bmp?size=50x50&set=set1'
    }, {
      name: 'Domenic',
      email: 'dsutherel6@canalblog.com',
      avatar: 'https://robohash.org/etperferendisiure.bmp?size=50x50&set=set1'
    }, {
      name: 'Bank',
      email: 'bviel7@reverbnation.com',
      avatar: 'https://robohash.org/quiaautipsam.jpg?size=50x50&set=set1'
    }, {
      name: 'Lucian',
      email: 'ldavidovitch8@goo.gl',
      avatar: 'https://robohash.org/voluptatibusquiillo.bmp?size=50x50&set=set1'
    }, {
      name: 'Aldin',
      email: 'ahof9@purevolume.com',
      avatar: 'https://robohash.org/dictasaepemaxime.bmp?size=50x50&set=set1'
    }];
  }

  /**
   * List of maintainers
   * @return {array}
   */
  get maintainers() {
    // return get(this, 'props.packageMeta.latest.maintainers', []);
    return [{
      name: 'Mayne',
      email: 'mdevitt0@mtv.com',
      avatar: 'https://robohash.org/quisquoperspiciatis.bmp?size=50x50&set=set1'
    }, {
      name: 'Brok',
      email: 'bvanshin1@freewebs.com',
      avatar: 'https://robohash.org/quiadelectuset.png?size=50x50&set=set1'
    }, {
      name: 'Nickola',
      email: 'ngerard2@tumblr.com',
      avatar: 'https://robohash.org/repellenduseaut.bmp?size=50x50&set=set1'
    }, {
      name: 'Antony',
      email: 'akolczynski3@wikia.com',
      avatar: 'https://robohash.org/consectetureosaut.png?size=50x50&set=set1'
    }, {
      name: 'Irving',
      email: 'ibohin4@ehow.com',
      avatar: 'https://robohash.org/quiaaperiamporro.jpg?size=50x50&set=set1'
    }, {
      name: 'Gavan',
      email: 'gonions5@utexas.edu',
      avatar: 'https://robohash.org/aspernaturimpeditest.bmp?size=50x50&set=set1'
    }, {
      name: 'Domenic',
      email: 'dsutherel6@canalblog.com',
      avatar: 'https://robohash.org/etperferendisiure.bmp?size=50x50&set=set1'
    }, {
      name: 'Bank',
      email: 'bviel7@reverbnation.com',
      avatar: 'https://robohash.org/quiaautipsam.jpg?size=50x50&set=set1'
    }, {
      name: 'Lucian',
      email: 'ldavidovitch8@goo.gl',
      avatar: 'https://robohash.org/voluptatibusquiillo.bmp?size=50x50&set=set1'
    }, {
      name: 'Aldin',
      email: 'ahof9@purevolume.com',
      avatar: 'https://robohash.org/dictasaepemaxime.bmp?size=50x50&set=set1'
    }];
  }

  render() {
    const {author, contributors, maintainers} = this;
    const ContributorSection = showAll(MaintainerInfo, contributors, 'contributors', 2);
    const MaintainerSection = showAll(MaintainerInfo, maintainers, 'maintainers', 2);
    return <Module title="Collaborators" className={classes.maintainersModule}>
      {author && <div>
        <p>
          <b>Author</b>
        </p>
        <MaintainerInfo title="Author" name={author.name} avatar={author.avatar} />
      </div>}
      {contributors.length && <div>
        <p>
          <b>Contributors</b>
        </p>
        {<ContributorSection />}
      </div>}
      {maintainers.length && <div>
        <p>
          <b>Maintainers</b>
        </p>
        {<MaintainerSection />}
      </div>}
    </Module>;
  }
}
