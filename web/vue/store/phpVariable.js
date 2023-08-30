export const phpVariable = {
  state: () => ({
    webpSupport: webp,
    test: testVersion,
    year: year,
    formHelicon: hideForm,
  }),
  getters: {
    getYear(state) {
      return state.year;
    },
    getWebp(state) {
      return state.webpSupport;
    },
    getMetric(state) {
      return state.formHelicon;
    },
    isTest(state) {
      return state.test;
    },
    getModalSuccess(state) {
      return state.modalSuccess;
    },
  },
};
