import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const NavigationContext = createContext(null);

const NavigationProvider = ({ children }) => {
  const [navigation, setNavigation] = useState(null);

  const getNavigation = (nav) => {
    if (!navigation) {
      setNavigation(nav);
    }
  };

  return (
    <NavigationContext.Provider value={{ navigation, getNavigation }}>
      <NavigationContainer ref={getNavigation}>
        {children}
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
