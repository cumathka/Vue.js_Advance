// actions.js
export default {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context, '<----action increase');
      context.commit('increase', payload);
    },
  };
  