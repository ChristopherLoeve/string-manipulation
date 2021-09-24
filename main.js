Vue.createApp({
  data() {
    return {
      word: '',
      savedWord: '',
      shown: false
    }
  },
  methods: {
    show() {
      this.savedWord = this.word
      this.shown = true;
      this.word = ''
    }
  },
  computed: {
    lowerCase() {
      return this.savedWord.toLowerCase()
    },
    upperCase() {
      return this.savedWord.toUpperCase()
    }
  }












}).mount("#app")