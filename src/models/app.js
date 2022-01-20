const namespace = 'app';
const startLoading = loadingType => ({type: `startLoading`, loadingType});
const stopLoading = loadingType => ({type: `stopLoading`, loadingType});
export default {
  namespace,
  state: {},
  effects: {
    *effect(_, {put, select, call}) {},
  },
  subscriptions: {
    async Init({dispatch}) {},
  },
  reducers: {
    setState(state, newState) {
      return {...state, ...newState};
    },
    startLoading(state, {loadingType}) {
      return {...state, loading: {...state.loading, [loadingType]: true}};
    },
    stopLoading(state, {loadingType}) {
      return {...state, loading: {...state.loading, [loadingType]: false}};
    },
  },
};
