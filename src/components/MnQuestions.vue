<template>
  <div class="questions-wrapper">
    <div class="indicator">
      Question {{ currentQuestion + 1 }} of {{ questions.length }}
    </div>

    <transition
      name="slide"
      mode="out-in"
    >
      <div
        v-if="isReady"
        class="main-content">
        <div class="question">
          {{ questions[currentQuestion] }}
        </div>

        <div class="answerbox">
          <mn-radio-group
            v-model="currentAnswers[`answer${currentQuestion}`]"
          />
        </div>

        <div class="controls">
          <mn-button
            :is-arrow="true"
            color="yellow"
            text="Next question"
            @click="onNextClick"
          />

          <a
            href="javascript:;"
            class="prev-link"
            @click="onPrevClick"
          >
            Previous question
          </a>
        </div>

        <div class="speaker-image">
          <img
            src="@/assets/img/headphones.png"
            alt="speaker"
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import MnRadioGroup from '@/components/MnRadioGroup.vue'
import MnButton from '@/components/MnButton.vue'

export default {
  name: 'MnQuestions',

  components: {
    MnRadioGroup,
    MnButton,
  },

  props: {
    questions: {
      type: Array,
      required: true,
    },

    currentQuestion: {
      type: Number,
      default: 0,
    },

    answers: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isReady: true,
      currentAnswers: {},
    }
  },

  created() {
    this.currentAnswers = this.answers
  },

  methods: {
    onNextClick() {
      const self = this
      this.isReady = false
      this.$emit('onNextClick', this.currentAnswers)
      setTimeout(() => {
        self.isReady = true
      }, 100)
    },

    onPrevClick() {
      const self = this
      this.isReady = false
      this.$emit('onPrevClick', this.currentAnswers)
      setTimeout(() => {
        self.isReady = true
      }, 100)
    },
  },
}
</script>

<style scoped>
.indicator {
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: Orgon-Thin;
  position: relative;
}

.indicator::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-image: linear-gradient(to right, #febf10, #e49a16);
}

.main-content {
  padding-left: 21px;
  padding-right: 20px;
  text-align: center;
  position: relative;
}

.question {
  font-size: 29px;
  font-family: Orgon-Light;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls {
  margin-top: 28px;
}

.prev-link {
  display: block;
  color: white;
  text-decoration: none;
  font-family: Orgon-Thin;
  letter-spacing: .3px;
  font-size: 16px;
  line-height: 1.98;
  margin-top: 8px;
}

.speaker-image {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 71.2%;
  max-width: 214px;
  padding: 0 60px;
}
</style>

