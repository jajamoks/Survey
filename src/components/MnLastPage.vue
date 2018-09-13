<template>
  <div class="last-wrapper">
    <div class="title">
      Thank you!
    </div>

    <div class="subtitle">
      Your ASE raffle <br >
      number is
    </div>

    <div class="number">
      <div class="num">{{ userId }}</div>
    </div>

    <div class="texts">
      <p>
        We will draw winning numbers<br >
        in ASE booth at 15:00 <br >
        on Monday, Tuesday and Wednesday <br >
        (16th, 17th and 18th September).
      </p>

      <p>
        Winning numbers will be <br >
        announced by email, <br >
        but you are also welcome to visit <br >
        our booth for information.
      </p>

      <p>
        Please note that prizes need to be <br >
        collected in ASE booth <br >
        before 12:00 on 20th September.
      </p>
    </div>

    <a
      class="reset-link"
      href="javascript:;"
      @click="resetQuiz"
    >
      Start over
    </a>
  </div>
</template>

<script>
export default {
  name: 'MnLastPage',

  props: {
    userId: {
      type: Number,
      required: true,
    },
  },

  mounted() {
    const self = this
    setTimeout(() => {
      self.resetQuiz()
    }, 5000)
  },

  methods: {
    resetQuiz() {
      this.$emit('reset')
    },
  },
}
</script>

<style scoped>
.last-wrapper {
  text-align: center;
  padding-top: 40px;
  font-size: 0;
}

.title {
  font-size: 42.8px;
  font-family: Orgon-Light;
  letter-spacing: .5px;
}

.subtitle {
  font-size: 26px;
  font-family: Orgon-Light;
  font-weight: 300;
  margin-top: 11px;
  letter-spacing: .5px;
  margin-bottom: 15px;
}

.number {
  width: 235px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 99px;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #febf10, #e49a16);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
}

.num {
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  font-size: 88.5px;
  line-height: 1;
  position: absolute;
  font-family: Orgon-Light;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 425px) {
  .num {
    top: 16px;
    transform: translateX(-50%);
  }
}

.texts {
  margin-top: 13px;
}

.texts p {
  font-size: 17px;
  font-family: Orgon-Thin;
  margin-bottom: 20px;
  margin-top: 0;
}

.reset-link {
  display: block;
  margin-top: 57px;
  font-size: 20px;
  text-decoration: none;
  color: white;
  letter-spacing: 1px;
}
</style>
