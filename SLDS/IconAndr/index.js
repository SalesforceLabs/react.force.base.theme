const React = require('react-native');
const MyBasicView = React.requireNativeComponent("MyBasicView");

const MyComponent = React.createClass({
  render: function() {
    style = {
      width: 50,
      height: 50
    };

    return <MyBasicView style={style} />;
  }
});

module.exports = MyComponent;