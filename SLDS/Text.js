'use strict';

const React = require('react-native');

const {
  StyleSheet,
  Text,
} = React;


const getDefaultStyle = () => {
  return {
    fontFamily: 'SalesforceSans-Bold',
  }
};

module.exports = React.createClass({
  getDefaultProps (){
    return {
      style: {}
    }
  },
  render () {
    return (
      <Text {...this.props} style={[this.props.style, getDefaultStyle()]}>
        ! {this.props.children}
      </Text>
    );
  }
});
