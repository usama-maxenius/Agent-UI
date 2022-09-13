import React from 'react';

let Context = React.createContext();

let initVal = {
  expand: false,
};

function countReducer(state, action) {
  switch (action.type) {
    case 'EXPAND': {
      return { expand: !state.expand };
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

function useExpand() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useExpand must be used within a CountProvider');
  }
  return context;
}

export { ContextProvider, Context, useExpand };
