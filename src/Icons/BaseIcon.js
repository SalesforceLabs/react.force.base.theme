const React = require('react-native');

const {
  StyleSheet,
  Text,
  View,
  PixelRatio
} = React;

module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "#54698d",
      bgColor: 'transparent',
      iconScale: 1,
      fontName: 'SalesforceDesignSystemIconsUtility'
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    iconScale: React.PropTypes.number,
    iconCode: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    fontName: React.PropTypes.string
  },

  getIconGlyphStyle () {
    const size = this.props.size*this.props.iconScale;
    return {
      fontFamily: this.props.fontName,
      fontSize: PixelRatio.roundToNearestPixel(size),
      color: this.props.iconColor,
      textAlign:'center',
      backgroundColor:'transparent',
      height: PixelRatio.roundToNearestPixel(size),
      alignSelf:'center',
      textAlignVertical:'bottom',
      lineHeight:Math.round(size),
    };
  },

  getIconStyle () {
    return {
      alignItems:'center',
      justifyContent:'center',
      borderRadius: this.props.size/10,
      height:this.props.size,
      width:this.props.size,
      backgroundColor:this.props.bgColor,
      alignSelf:'center',
      flex:1
    };
  },


  render () {
    return <View {... this.props} style={this.getIconStyle()} >
      <Text style={this.getIconGlyphStyle()}>
        {this.props.iconCode}
      </Text>
    </View>;
  }

});