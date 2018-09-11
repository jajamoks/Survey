<template>
  <div id="app">
    <div class="white-line"/>

    <img
      src="@/assets/img/plane.png"
      class="bg-image big"
      alt="background"
    >

    <div class="wrapper">
      <img
        src="@/assets/img/bg-blue@2x.png"
        class="bg-image"
        alt="background"
      >

      <div class="header">
        <img
          src="@/assets/img/logo.svg"
          class="logo"
          alt="logo"
        >
      </div>

      <div class="content">
        <page-one
          v-if="currentStep === 0"
          @nextClick="goToNextStep"
        />

        <page-two
          v-if="currentStep === 1"
          @nextClick="goToNextStep"
          @exitClick="resetQuiz"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import firebase from 'firebase'
import PageOne from '@/components/MnPageOne.vue'
import PageTwo from '@/components/MnPageTwo.vue'

export default {
  name: 'App',
  components: {
    PageOne,
    PageTwo,
  },
  data() {
    return {
      currentStep: 0,
      currentAnswers: {
        answer0: '',
        answer1: '',
        answer2: '',
        answer3: '',
      },
    }
  },
  methods: {
    goToNextStep() {
      this.currentStep += 1
    },
    resetQuiz() {
      this.currentStep = 0
    },
    getAnswersLenht() {
      returnfirebase.database().ref('/answers').once('value').then((snapshot) => {
        console.log(snapshot.val())
      })
    },
  },
};
</script>

<style>

@font-face {
  font-family: Orgon-Regular;
  src: url('./assets/fonts/Orgon-Regular.otf');
}

@font-face {
  font-family: Orgon-Light;
  src: url('./assets/fonts/Orgon-Light.otf');
}

@font-face {
  font-family: Orgon-Thin;
  src: url('./assets/fonts/Orgon-Thin.otf');
}

@font-face {
  font-family: Orgon-Medium;
  src: url('./assets/fonts/Orgon-Medium.otf');
}

@font-face {
  font-family: Orgon-Bold;
  src: url('./assets/fonts/Orgon-Bold.otf');
}

html, body {
padding: 0;
margin: 0;
}

body {
  color: white;
  font-family: 'Orgon-Regular';
}

.small-text {
  font-size: 20px;
  line-height: 1.58;
  letter-spacing: .3px;
  font-family: 'Orgon-Thin';
  font-weight: 300;
}

.regular-text {
  font-family: 'Orgon-Light';
  font-size: 25px;
  line-height: 31.6px;
  letter-spacing: .3px;
}

#app {
  background: linear-gradient(to right, #027CC5 0%, #015282 100%);
  min-height: 100vh;
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
}

.wrapper {
  position: relative;
  z-index: 1;
  margin: auto;
  max-width: 425px;
  min-height: 812px;
}

.white-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 116px;
  background-color: white;
}

.bg-image {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.bg-image.big {
  display: none;
}

@media screen and (min-width: 426px) {
  .bg-image {
    display: none;
  }

  .bg-image.big {
    display: block;
    z-index: 0;
    max-width: unset;
  }
}

.header {
  width: 100%;
  height: 117px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
