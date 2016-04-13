'use strict';

const React = require('react-native');
const styles = require('../styles');
const Text = require('../Text');
const ImgView = require('../ImgView');
const View = React.View;
const Icon = require('../Icon');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      title:'',
      detail:''
    };
  },
  render: function() {
    return (
      <View style={styles.tiles['View slds-media slds-tile']}>
        <View style={styles.tiles['View slds-media__figure']}>
          <Icon.Standard style={styles.tiles['View slds-icon slds-icon-standard-groups']} icon='groups' />
        </View>
        <View style={styles.tiles['View slds-media__body']}>
          <View style={styles.tiles['View slds-tile__title slds-truncate']}>
            <Text style={styles.tiles['Text slds-tile__title slds-truncate']}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.tiles['View slds-tile__detail slds-text-body--small']}>
            <Text style={styles.tiles['Text slds-truncate']}>
              {this.props.detail}
            </Text>
          </View>
        </View>
      </View>
    );
  }
});