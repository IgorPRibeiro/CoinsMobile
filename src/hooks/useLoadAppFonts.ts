import React, { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface IUseLoadAppFontsReturn {
  appIsReady: boolean
  onLayoutRootView: () => Promise<boolean | void > 
}

export default function useLoadAppFonts(): IUseLoadAppFontsReturn {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "Sora-Regular": require('../../assets/fonts/Sora-Regular.ttf'),
          "Sora-Bold": require('../../assets/fonts/Sora-Bold.ttf'),
          "Sora-Medium": require('../../assets/fonts/Sora-Medium.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);


  return {appIsReady,onLayoutRootView}


}