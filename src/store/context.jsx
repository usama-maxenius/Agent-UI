import React from 'react';
import constant from './constant';
let Context = React.createContext();

let initVal = {
  expand: false,
  isSecurityDrawer: false,
  isHelperDrawer: false,
  isCallerDrawer: false,
};

function countReducer(state, action) {
  switch (action.type) {
    case constant.EXPAND: {
      return { expand: !state.expand };
    }
    case constant.HELP_DRAWER: {
      return {
        ...state,
        isSecurityDrawer: false,
        isHelperDrawer: true,
        isCallerDrawer: false,
      };
    }
    case constant.SECURITY_DRAWER: {
      return {
        ...state,
        isSecurityDrawer: true,
        isHelperDrawer: false,
        isCallerDrawer: false,
      };
    }
    case constant.CALLER_DETAILS_DRAWER: {
      return {
        ...state,
        isSecurityDrawer: false,
        isHelperDrawer: false,
        isCallerDrawer: true,
      };
    }
    case constant.CLOSE_DRAWER: {
      return {
        ...state,
        isSecurityDrawer: false,
        isHelperDrawer: false,
        isCallerDrawer: false,
      };
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
