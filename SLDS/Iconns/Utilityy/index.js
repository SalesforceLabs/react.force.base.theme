const React = require('react-native');

const {
  StyleSheet,
  Text,
  View
} = React;

const iconCodes = require('./iconCodes');

const getCodeByName = (iconName) => {
  let name = iconName.toLowerCase();
  name = name.replace(/_/g,'');
  const index = iconCodes.names.indexOf(name);
  return {code:iconCodes.codes[index]};
};

const FONT_NAME = 'SalesforceDesignSystemIconsUtility';


module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "#54698d",
      name:'like'
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    name: React.PropTypes.string,
    iconName: React.PropTypes.string,
    iconCode: React.PropTypes.string,
    iconColor: React.PropTypes.string
  },

  getBGColor () {
    return {
      red: 50,
      green: 50,
      blue: 10
    };
  },

  getIconGlyphStyle () {
    return {
      fontFamily: FONT_NAME,
      fontSize: this.props.size,
      color: 'black',
      textAlign:'center',
      backgroundColor:'transparent'

    };
  },

  getIconStyle () {
    return {
      height:this.props.size,
      width:this.props.size,
    };
  },

  render () {
    const iconConfig = getCodeByName(this.props.name);
      return <View style={this.getIconStyle()}>
        <Text style={this.getIconGlyphStyle()}>
          {iconConfig.code}
        </Text>
      </View>;
  }

});