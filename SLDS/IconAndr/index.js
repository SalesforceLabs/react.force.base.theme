const React = require('react-native');
const MyBasicView = React.requireNativeComponent("MyBasicView");

module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03"
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    iconName: React.PropTypes.string,
    iconCode: React.PropTypes.string
  },

  render () {
    return <MyBasicView 
      style={{
        width: this.props.size,
        height: this.props.size
      }} {...this.props} />
  }

});