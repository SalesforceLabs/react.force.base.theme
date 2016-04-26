# design-system-react-native

React Native components (iOS/Android) for [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/). 

Works is progress

![iOS Screenshot](/README_files/ios-screen-small.png?raw=true)

## Setup

1. add to existing React Native project:

  ```

  npm install git+ssh://git@github.com:madpotato/design-system-react-native.git --save

  ```
2. link libraries: ([RNPM](http://facebook.github.io/react-native/releases/0.24/docs/linking-libraries-ios.html#automatic-linking) installation and usage info)

  ```

  rnpm link

  ```
  
## Usage

import statement:

```
import SLDS from 'design-system-react-native';
```

Branded Button:

```
<SLDS.Buttons.Base.Branded 
  label="Click me!" 
  onPress={()=>{
    alert('Clicked!')
  }} />
```


## Demo
iOS/Android [Sample project repo](https://github.com/madpotato/ComponentsApp)
