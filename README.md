## Steps used to generate example
### Initialize a new project
```shell
npx create-expo-app expo-image-onlayout
cd expo-image-onlayout
```
### Install web dependendcies
```shell
npx expo install react-dom react-native-web @expo/metro-runtime
```
### Install Expo image
```shell
npx expo install expo-image
```
### Code
Add the example code from https://docs.expo.dev/versions/latest/sdk/image/#usage and include the onLayout callback: 
```
<Image
  onLayout={(event) => {
    console.log("Doesn't work on web", event);
  }}
  ...
/>
```

## Running the project
```shell
npm install
npx expo start --web
```

The error can be seen in the developer console `Unknown event handler property 'onLayout'. It will be ignored.`
