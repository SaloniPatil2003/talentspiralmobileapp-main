import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'talent_spiral',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Show for 3 seconds
      launchAutoHide: false, // Manually hide for WelcomePage integration
      backgroundColor: '#ff0000', // Red to match WelcomePage
      showSpinner: false, // No loading spinner
      androidSplashResourceName: 'splash', // Default resource name
      splashFullScreen: true, // Cover status bar
      splashImmersive: true // Cover navigation bar
    }
  }
};

export default config;