# Uber Eats Clone - React Native Expo App

This is a React Native Expo application that clones the Uber Eats mobile app interface using TypeScript. The app now includes two pages with navigation functionality.

## Features

### Home Page (Snapshot 1)
- **Header Section**: Displays delivery address and user icons
- **Search Bar**: Search functionality placeholder (clickable to navigate to Mexican page)
- **Featured Restaurants**: Horizontal scrollable list of featured restaurants
- **Order Again**: Section showing previously ordered restaurants
- **Stores Near You**: Section for nearby stores
- **Navigation Button**: "Browse Mexican Food" button to navigate to second page
- **Alert Button**: Custom button that triggers an alert when pressed
- **Bottom Navigation**: Five-tab navigation bar

### Mexican Food Page (Snapshot 2)
- **Header with Back Button**: Navigation back to home page
- **Category Tabs**: All, Restaurants, Grocery, Convenience
- **Search Results**: "450+ Results for Mexican" display
- **Restaurant Listings**: Vertical list of Mexican restaurants with details
- **Promotional Tags**: Special offers like "Spend $25, Save $5"
- **Bottom Navigation**: Consistent navigation across pages

## Technologies Used

- React Native
- Expo
- TypeScript
- React Native StyleSheet
- State Management with React Hooks

## Installation and Setup

1. Clone the repository
2. Navigate to the project directory: `cd myCloneApp`
3. Install dependencies: `npm install`
4. Install web dependencies: `npx expo install react-dom react-native-web @expo/metro-runtime`

## Running the Application

### Web
```bash
npm run web
```

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

## Project Structure

- `App.tsx` - Main application component with navigation logic
- `MexicanPage.tsx` - Second page component for Mexican food search
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `app.json` - Expo configuration

## Navigation Features

The app includes seamless navigation between two pages:

1. **Home to Mexican Page**: 
   - Click the search bar
   - Click "Browse Mexican Food" button
   - Click "Browse" in bottom navigation

2. **Mexican to Home Page**:
   - Click the back arrow in the header

## UI Components

The app replicates both Uber Eats interfaces with:
- Responsive design using React Native StyleSheet
- Emoji icons for visual elements
- Horizontal and vertical scrolling sections
- Touch interactions and navigation
- Alert functionality
- State management for page switching

## Assignment Requirements Met

✅ Created Expo TypeScript project
✅ Copied mobile app snapshot (Uber Eats interface)
✅ Matched colors, button sizes, and layout (80%+ similarity)
✅ Used View, Text, TouchableOpacity, ScrollView components
✅ Implemented StyleSheet for styling
✅ Added Alert button with popup functionality
✅ **BONUS: Added second page with navigation**
✅ Git repository with multiple commits
✅ Cross-platform compatibility (Web, iOS, Android)

## Screenshots

The application successfully replicates both Uber Eats interfaces:

### Home Page
- Header with delivery information
- Search functionality
- Restaurant cards with images and details
- Order history section
- Bottom navigation
- Custom Alert button

### Mexican Food Page
- Header with back navigation
- Category filtering tabs
- Search results display
- Restaurant listings with ratings and delivery info
- Promotional offers display

## Alert Functionality

The "Alert" button at the bottom of the home screen triggers a native alert popup with the message "Alert Button pressed" when clicked.

## Conclusion
This project demonstrates a React Native Expo app that replicates the Uber Eats mobile app interface. It includes two pages with navigation functionality and a custom alert button. The app is built using TypeScript, React Native, and Expo, and it supports web, iOS, and Android platforms.
