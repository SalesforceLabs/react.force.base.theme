# react.force.base.theme

React Native components (iOS/Android) for Salesforce Basic UI Theme. 


## Setup

1. add to an existing React Native project:

  ```

  npm install git+ssh://git@github.com:ForceDotComLabs/react.force.base.theme.git --save

  ```
2. if [RNPM](http://facebook.github.io/react-native/releases/0.24/docs/linking-libraries-ios.html#automatic-linking) is not yet installed:

  ```

  npm install rnpm -g

  ```
3. link the library: 

  ```

  rnpm link

  ```
  
## Usage

Import statement:

```jsx
import Theme from 'react.force.base.theme';
```

Button Brand JSX code:

```jsx
<Theme.Buttons.Base.Brand 
  label="Button Brand" 
  onPress={()=>{
    alert('Clicked!')
  }} />
```

Result:

![Branded Button](/README_files/button-small.png?raw=true)


Utility Icon JSX code:

```jsx
<Theme.Icons.Utility name="like" />
```
Result:

![Utility Icon](/README_files/icon-small.png?raw=true)


