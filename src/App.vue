<template>
  <div
    v-if="questions.length > 0"
    id="app"
  >
    <div class="white-line"/>

    <div
      v-if="isLoader"
      class="spinner">
      <breeding-rhombus-spinner
        :animation-duration="2000"
        :size="65"
        color="#febf10"
      />
    </div>

    <img
      src="@/assets/img/plane.png"
      class="bg-image big"
      alt="background"
    >

    <div
      :class="{'full-screen': currentStep === 11}"
      class="wrapper"
    >
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
          @click="goToLogin"
        >
      </div>

      <div class="content">
        <transition-group
          name="slide-page"
          mode="out-in"
        >
          <page-one
            v-if="currentStep === 0"
            key="pageOne"
            @nextClick="goToNextStep"
          />

          <page-two
            v-if="currentStep === 1"
            key="pageTwo"
            @nextClick="goToNextStep"
            @exitClick="goToPrevStep"
          />

          <questions
            v-if="currentStep === 2"
            key="questions"
            :current-question="currentQuestion"
            :questions="questions"
            :answers="answers"
            @onNextClick="onNextQuestionClick($event)"
            @onPrevClick="onPrevQuestionClick($event)"
          />

          <take-photo
            v-if="currentStep === 3"
            key="photo"
            @upload="onPhotoUpload($event)"
            @onNextClick="onPhotoNext"
            @onPrevClick="goToPrevStep"
          />

          <submit
            v-if="currentStep === 4"
            key="submit"
            :terms="terms"
            @onSubmitClick="onSubmitClick"
            @onPrevClick="goToPrevStep"
          />

          <last-page
            v-if="currentStep === 5"
            key="last page"
            :user-id="userId"
            @reset="resetQuiz"
          />

          <login
            v-if="currentStep === 10"
            key="login"
            @exitClick="onLoginExitClick"
            @loginClick="loginClick($event)"
          />

          <admin
            v-if="currentStep === 11"
            key="admin"
            :users="usersData"
            :answer-amount="questions.length"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import firebase from 'firebase'
import { BreedingRhombusSpinner } from 'epic-spinners'
import PageOne from '@/components/MnPageOne.vue'
import PageTwo from '@/components/MnPageTwo.vue'
import Questions from '@/components/MnQuestions.vue'
import TakePhoto from '@/components/MnTakePhoto.vue'
import Submit from '@/components/MnSubmit.vue'
import LastPage from '@/components/MnLastPage.vue'
import Login from '@/components/MnLogin.vue'
import Admin from '@/components/MnAdmin.vue'

export default {
  name: 'App',
  components: {
    PageOne,
    PageTwo,
    Questions,
    TakePhoto,
    Submit,
    LastPage,
    BreedingRhombusSpinner,
    Login,
    Admin,
  },

  data() {
    return {
      currentStep: 0,
      currentQuestion: 0,
      userId: null,
      isLoader: false,
      usersData: [],
      terms: null,
      answersLength: null,
      answers: {
        photo: '',
      },
      questions: [],
    }
  },

  created() {
    this.getAllQuestions()
    this.updateId()
    this.getTerms()
  },

  methods: {
    goToNextStep() {
      this.currentStep += 1
    },

    goToPrevStep() {
      this.currentStep -= 1
    },

    resetQuiz() {
      this.currentStep = 0
      this.currentQuestion = 0
      this.userId = null
      this.answers = {
        photo: '',
      }
      this.getAllQuestions()
    },

    getAllQuestions() {
      return firebase.database().ref('/questions').once('value').then((snapshot) => {
        this.questions = snapshot.val()
        this.questions.forEach((el, index) => {
          this.answers[`answer${index}`] = ''
        })
      })
    },

    onNextQuestionClick(e) {
      this.answers = { ...this.answers, ...e }
      if (this.currentQuestion === this.questions.length - 1) {
        this.goToNextStep()
      } else {
        this.currentQuestion += 1
      }
    },

    onPrevQuestionClick(e) {
      this.answers = { ...this.answers, ...e }
      if (this.currentQuestion === 0) {
        this.goToPrevStep()
      } else {
        this.currentQuestion -= 1
      }
    },

    onPhotoUpload(photo) {
      this.answers.photo = photo
    },

    getTerms() {
      firebase.database().ref('/terms').once('value').then((snapshot) => {
        this.terms = snapshot.val()
      })
    },

    onPhotoNext() {
      // photo validation goes here
      this.goToNextStep()
    },

    getAnswers() {
      return firebase.database().ref('/answers').once('value')
    },

    saveImageToStorage(id) {
      return firebase.storage().ref().child(`${id}`).put(this.answers.photo)
    },

    saveAnswersToDatabase(id, data, callback) {
      firebase.database().ref().child('answers').update({
        [id]: data,
      }, () => {
        callback()
      })
    },

    updateId() {
      firebase.database().ref('/answers').on('value', (snapshot) => {
        this.answersLength = snapshot.val().length
        this.usersData = snapshot.val()
      })
    },

    goToLogin() {
      if (this.currentStep === 0 || this.currentStep === 11) {
        this.currentStep = 10
      }
    },

    loginClick(data) {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(() => {
        this.currentStep = 11
      }).catch((err) => {
        alert(err.message)
      })
    },

    onLoginExitClick() {
      this.currentStep = 0
    },

    onSubmitClick() {
      this.isLoader = true
      const userPhotoId = new Date().valueOf() + Math.random()
      this.saveImageToStorage(userPhotoId).then((responce) => {
        if (responce.state === 'success') {
          this.answers.photo = userPhotoId
          this.userId = this.answersLength
          this.saveAnswersToDatabase(this.userId, this.answers, () => {
            this.isLoader = false
            this.goToNextStep()
          })
        }
      })
    },
  },
}
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

@font-face {
  font-family: HelveticaNeue-Medium;
  src: url('./assets/fonts/HelveticaNeue-Medium.ttf');
}

@font-face {
  font-family: HelveticaNeue-Bold;
  src: url('./assets/fonts/HelveticaNeue-Bold.ttf');
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
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .wrapper {
    height: 812px;
  }
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

.content {
  height: calc(100vh - 117px);
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

.slide-enter-active, .slide-leave-active,
.slide-page-enter-active, .slide-page-leave-active {
  transition: all .5s ease;
}
.slide-leave-to {
  transform: translateX(-400px);
  opacity: .3;
}

.slide-enter {
  transform: translateX(400px);
  opacity: .3;
}

.slide-page-leave-to {
  transform: translateX(-400px);
  opacity: .3;
  position: absolute;
  left: 0;
  right: 0;
}

.slide-page-enter {
  transform: translateX(400px);
  opacity: .3;
}

.spinner {
  position: absolute;
  opacity: .99;
  background-color: rgba(0,0,0, .7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-screen {
  max-width: 100vw;
  max-height: auto;
}
</style>
