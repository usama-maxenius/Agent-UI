import React from 'react';

let Context = React.createContext();

let initVal = {
  expand: false,
  isSecurityDrawer: false,
  isHelperDrawer: false,
};

function countReducer(state, action) {
  switch (action.type) {
    case 'EXPAND': {
      return { expand: !state.expand };
    }
    case 'HELP_DRAWER': {
      return { ...state, isSecurityDrawer: false, isHelperDrawer: true };
    }
    case 'SECURITY_DRAWER': {
      return { ...state, isSecurityDrawer: true, isHelperDrawer: false };
    }
    case 'CLOSE_DRAWER': {
      return { ...state, isSecurityDrawer: false, isHelperDrawer: false };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, initVal);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useContextCustom() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useContextCustom must be used within a CountProvider');
  }
  return context;
}

export { ContextProvider, Context, useContextCustom };
