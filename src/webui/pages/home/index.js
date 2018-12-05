import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../utils/api';
import PackageList from '../../components/PackageList';


class Home extends Component {
  static propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired
  };

  state = {
    packages: [],
  }

  componentDidMount() {
    this.loadPackages();
  }

  // eslint-disable-next-line no-unused-vars
  // componentDidUpdate(_, prevState) {
  //   if (prevState.isUserLoggedIn !== this.state.isUserLoggedIn) {
  //     this.loadPackages();
  //   }
  // }

  loadPackages = async () => {
    try {
      const response = await API.request('packages', 'GET');
      const transformedPackages = response.map(({ name, ...others }) => ({
        label: name,
        ...others
      }));
      this.setState({
        packages: transformedPackages,
        isLoading: false
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  render() {
    const { packages } = this.state;
    return (
      <div className="container content">
        <PackageList help={packages.length < 1} packages={packages} />
      </div>
    );
  }
}

export default Home;
