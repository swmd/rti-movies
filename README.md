## Screenshots

<img src="screenshots/discovery.png" width="300" alt="Discovery View" title="Discovery Screen"> &nbsp;&nbsp;&nbsp;&nbsp; <img src="screenshots/detail.png" width="300" alt="Detail View" title="Detail Screen">

# Running the app

**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Set Environment Variables

You need to add environment variables to _.env_ file. You can find examples in _.env.example_.

## Step 2: Install dependencies

```bash
# using npm
npm install

# OR using Yarn
yarn install

# For iOS
npx pod-install
```

## Step 3: Start the Metro Server

Now, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
