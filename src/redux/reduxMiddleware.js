export const nonSerializableMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'object' && typeof action.payload === 'function') {
      // If action payload is a function, invoke it and dispatch the result
      const result = action.payload(store.dispatch, store.getState);
      return next(result);
    }
  
    return next(action);
  };
  