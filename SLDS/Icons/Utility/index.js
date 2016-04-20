const React = require('react-native');

const {
  Text,
  View
} = React;

const BaseIcon = require('../BaseIcon');
const BaseIconNative = require('../BaseIconNative');


const iconCodes = require('./iconCodes');


const FONT_NAME = 'SalesforceDesignSystemIconsUtility';
const ICON_SCALE = 1;


const getCodeByName = (iconName) => {
  const name = iconName.toLowerCase().replace(/_/g,'');
  const index = iconCodes.names.indexOf(name);
  return iconCodes.codes[index].replace('\\','-');
};


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
    iconName: React.PropTypes.string,
    iconColor: React.PropTypes.string
  },

  render () {
      return <View style={{
                backgroundColor:'transparent',
                borderRadius:Math.floor(this.props.size/10)
              }}><BaseIconNative 
                  style={{width:this.props.size,height:this.props.size}}
                  iconCode={getCodeByName(this.props.name)}
                  iconColor={this.props.iconColor}
                  iconScale={ICON_SCALE}
                  fontName={FONT_NAME}
                />
              </View>;
  }

});