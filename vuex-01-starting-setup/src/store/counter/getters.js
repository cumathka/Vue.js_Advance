// getters.js
export default {
    testAuth(state) {
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 3;
    },
    normalCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  };