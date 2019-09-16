export default  {
    state: {
      token: null,
      axios : null
    },
    setToken (token) {
      this.state.token = token;
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    }
  }
