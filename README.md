## React Native Library for Simpl FingerPrint Sdk
This project serves as a Simpl FingerPrint Sdk wrapper for React Native.

## Installation

Using npm:

```shell
npm install --save react-native-simpl-fingerprint-sdk
```

or using yarn:

```shell
yarn add react-native-simpl-fingerprint-sdk
```

## Linking 
React-native from v0.60 supports auto linking so none of the folwing steps are required.

Run the following command to link the SDK to Android and iOS

```shell
react-native link react-native-simpl-fingerprint-sdk
```

## Add native SDK
### Android
Add the following to `android/app/build.gradle`:
  ```gradle
  ...

  repositories {
      maven { url "http://maven.getsimpl.com"}
  }

  dependencies {
      ...
      compile project(':react-native-simpl-fingerprint-sdk')
      compile "com.simpl.android:fingerprintSDK:+"
  }
  ```
### iOS

If you are using Cocoapods, Add FingerPrint SDK to your Podfile

`pod 'react-native-simpl-fingerprint-sdk', :podspec => '../node_modules/react-native-simpl-fingerprint-sdk/react-native-simpl-fingerprint-sdk.podspec`

Then run,

`pod install`

If you are not using Cocoapods, Link the Framework from [here](https://github.com/GetSimpl/simpl-fingerprint-sdk-ios) manually.

## Usage

`import/require` it by the name defined in your library's `package.json` and use it as follows:

```javascript
import Simpl from 'react-native-simpl-fingerprint-sdk';
//Get Payload
 Simpl.generateFingerprint('<client_id>','<phone_number>','<email>', (payload) => {
      console.log("Fingerprint", payload);
 });
```
