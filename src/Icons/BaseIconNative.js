const React = require('react-native');
const { 
  requireNativeComponent, 
  PropTypes, 
  NativeModules, 
  View
} = React;

const SalesforceBaseIcon = requireNativeComponent('SalesforceBaseIcon');

module.exports = React.createClass({
  propTypes: {
    iconScale: PropTypes.number,
    iconCode: PropTypes.string,
    iconColor: PropTypes.string,
  },
  render() {
    return <SalesforceBaseIcon 
              style={this.props.style}
              iconColor={this.props.iconColor}
              iconCode={this.props.iconCode}
              iconScale={this.props.iconScale}
              fontName={this.props.fontName}
            />;
  },
});
