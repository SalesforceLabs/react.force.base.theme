'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../Text');
const View = React.View;

module.exports = React.createClass({
  getDefaultProps () {
    return {
      label: '',
      theme:'default'
    };
  },
  getClassName () {
    let classNames = ['slds-badge'];
    if(this.props.theme){
      classNames.push('slds-theme--'+this.props.theme);
    }
    console.log(classNames);
    return classNames.join(' ');
  },
  render () {
    const className = this.getClassName();
    return (
      <View style={{flexDirection:'row'}}>
        <View style={styles['View '+className]}>
          <Text style={styles['Text '+className]}>
            {this.props.label}
          </Text>
        </View>
      </View>
    );
  }
});