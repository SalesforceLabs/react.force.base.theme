const React = require('react-native');

const {
  StyleSheet,
  Text,
  View
} = React;

const BaseIcon = require('../BaseIcon');
const BaseIconNative = require('../BaseIconNative');

const iconCodes = require('./iconCodes');


const FONT_NAME = 'SalesforceDesignSystemIconsAction';
const ICON_SCALE = 0.65;


const getCodeAndColorByName = (iconName) => {
  const name = iconName.toLowerCase().replace(/_/g,'');
  const index = iconCodes.names.indexOf(name);
  return {code:iconCodes.codes[index], color:iconCodes.colors[index]};
};


module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "white",
      name:'like'
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    iconName: React.PropTypes.string,
    iconColor: React.PropTypes.string
  },

  getBGColor (iconConfig) {
    return {
      red: 255*iconConfig.color[0],
      green: 255*iconConfig.color[1],
      blue: 255*iconConfig.color[2]
    };
  },

  render () {
    const iconConfig = getCodeAndColorByName(this.props.name)
    const bgColor = this.getBGColor(iconConfig);
      return <BaseIconNative 
        {... this.props}
        style={{width:30,height:30}}
        iconCode={iconConfig.code}
        iconColor='#ffffff'
//        iconScale={ICON_SCALE}
        fontName={FONT_NAME}
//        bgColor={'rgb('+bgColor.red+','+bgColor.green+','+bgColor.blue+')'}
      />
  }

});