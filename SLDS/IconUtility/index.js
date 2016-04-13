'use strict';

const React = require('react-native');

const {
  StyleSheet,
  Text,
  View
} = React;

const iconCodes = require('./iconCodes');

const FONT_NAME = 'SalesforceDesignSystemIconsUtility';

const getCodeByName = (iconName) => {
  const name = iconName.toLowerCase();
  const index = iconCodes.names.indexOf(name);
  return iconCodes.codes[index];
};

const getDefaultStyle = () => {
  return {
    fontFamily: FONT_NAME
  };
};

module.exports = React.createClass({
  getDefaultProps (){
    return {
      name:'like',
      style: {}
    }
  },
  render () {
    return (
      <View {...this.props}>
        <Text style={getDefaultStyle()}>
          {getCodeByName(this.props.name)}
        </Text>
      </View>
    );
  }
});
