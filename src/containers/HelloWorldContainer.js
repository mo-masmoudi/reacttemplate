import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCryptosInfos } from "../actions/cryptosInfos.js";

class HelloWorldContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    cryptosInfos: PropTypes.array.isRequired,
    _getCryptosInfos: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  state = {
    errorMessage: null
  };

  componentDidMount() {
    this._getCryptosInfos();
  }

  _getCryptosInfos = () => {
    const { _getCryptosInfos } = this.props;
    return _getCryptosInfos().catch(err => {
      this.setState({ errorMessage: err });
      throw err;
    });
  };

  render = () => {
    const { Layout, isLoading, cryptosInfos } = this.props;

    const { errorMessage } = this.state;

    return (
      <Layout
        loading={isLoading}
        error={errorMessage}
        cryptosInfos={cryptosInfos}
      />
    );
  };
}

const mapStateToProps = state => ({
  isLoading: state.status.loading || false,
  cryptosInfos: state.cryptosInfos.cryptoInfos
});

const mapDispatchToProps = {
  _getCryptosInfos: getCryptosInfos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldContainer);
