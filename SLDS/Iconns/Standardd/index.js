const React = require('react-native');

const {
  StyleSheet,
  Text,
  View
} = React;

const iconCodes = require('./iconCodes');

const getCodeAndColorByName = (iconName) => {
  let name = iconName.toLowerCase();
  name = name.replace(/_/g,'');
  console.log('name: ',name);
  const index = iconCodes.names.indexOf(name);
  return {code:iconCodes.codes[index], color:iconCodes.colors[index]};
};

const FONT_NAME = 'SalesforceDesignSystemIconsStandard';


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
    const iconConfig = getCodeAndColorByName(this.props.name)
    return {
      red: 255*iconConfig.color[0],
      green: 255*iconConfig.color[1],
      blue: 255*iconConfig.color[2]
    };
  },

  getIconGlyphStyle () {
    return {
      fontFamily: FONT_NAME,
      fontSize: this.props.size,
      color: 'white',
      textAlign:'center',
      backgroundColor:'transparent'

    };
  },

  getIconStyle () {
    const bgColor = this.getBGColor();
    return {
      borderRadius: this.props.size/10,
      height:this.props.size,
      width:this.props.size,
      backgroundColor:'rgb('+bgColor.red+','+bgColor.green+','+bgColor.blue+')'
    };
  },


  render () {
    const iconConfig = getCodeAndColorByName(this.props.name)
      return <View style={this.getIconStyle()}>
        <Text style={this.getIconGlyphStyle()}>
          {iconConfig.code}
        </Text>
      </View>;
  }

});