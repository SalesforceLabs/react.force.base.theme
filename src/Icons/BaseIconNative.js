const React = require('react-native');
const { 
  requireNativeComponent, 
  PropTypes, 
  NativeModules, 
  View
} = React;

const SLDSBaseIcon = requireNativeComponent('SLDSBaseIcon');

module.exports = React.createClass({
  propTypes: {
    iconScale: PropTypes.number,
    iconCode: PropTypes.string,
    iconColor: PropTypes.string,
  },
  render() {
    return <SLDSBaseIcon 
              style={this.props.style}
              iconColor={this.props.iconColor}
              iconCode={this.props.iconCode}
              iconScale={this.props.iconScale}
              fontName={this.props.fontName}
            />;
  },
});
