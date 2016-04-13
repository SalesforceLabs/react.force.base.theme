'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../Text');
const ImgView = require('../ImgView');
const View = React.View;
const Icons = require('../Icons');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      title:'Title',
      detail:'',
      icon:'account'
    };
  },
  render: function() {
    return (
      <View style={styles['View slds-page-header']}>
        <View style={[styles['View slds-media'],{
            flex: 1,
            flexDirection:'row'}]}>
          <View style={styles['View slds-media__figure']}>
            <Icons.Standard style={styles['View slds-icon slds-icon--large slds-icon-standard-opportunity']} icon={this.props.icon} />
          </View>
          <View style={styles['View slds-media__body']}>
              <Text style={styles['Text slds-page-header__title slds-truncate slds-align-middle']}>
                { this.props.title }
              </Text>
              <Text style={styles['Text slds-text-body--small slds-page-header__info']}>
                { this.props.detail }
              </Text>
          </View>
        </View>
      </View>
    );
  }
});