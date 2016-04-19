const React = require('react-native');
const SLDSIconStandard = React.requireNativeComponent("SLDSIconStandard");

const iconCodes = require('./iconCodes');

const getCodeAndColorByName = (iconName) => {
  const name = iconName.toLowerCase().replace(/-/g,'').replace(/_/g,'');
  const index = iconCodes.names.indexOf(name);
  return {code:iconCodes.codes[index], color:iconCodes.colors[index]};
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
    name: React.PropTypes.string,
    iconName: React.PropTypes.string,
    iconCode: React.PropTypes.string,
    iconColor: React.PropTypes.string
  },

  render () {
    const iconConfig = getCodeAndColorByName(this.props.name)
    const bgColor = {
      r: iconConfig.color[0],
      g: iconConfig.color[1],
      b: iconConfig.color[2]
    };
    return <SLDSIconStandard 
      style={{
        width: this.props.size,
        height: this.props.size
      }} 
      iconCode={iconConfig.code}
      bgColorRed={bgColor.r}
      bgColorGreen={bgColor.g}
      bgColorBlue={bgColor.b} />;
  }

});