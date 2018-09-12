sc<template>
  <div class="questions-wrapper">
    <div class="indicator">
      Submit your survey
    </div>

    <div class="main-content">
      <div class="header">
        Almost there, <br > please agree with our<br >policy to participate
      </div>

      <div class="policy-wrapp">
        <div class="policy">
          Privacy policy <br >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum sed semper arcu. Donec posuere ultrices vehicula.
          Curabitur lacus metus, posuere nec risus eget, commodo cursus magna.
          Maecenas dignissim felis non sapien sollicitudin, ut sodales quam luctus.
          Nunc vitae lacus vel lorem consectetur tristique a bibendum erat. Nullam lobortis
          rutrum ullamcorper. Vestibulum tincidunt feugiat justo sed luctus.
          <br>
          <br>
          <br>
        </div>
      </div>

      <div class="checkbox">
        <mn-checkbox
          v-model="isAccepted"
        />
      </div>

      <div class="controls">
        <mn-button
          :is-arrow="false"
          :is-centered="true"
          color="yellow"
          text="Submit"
          @click="onSubmitClick"
        />

        <a
          href="javascript:;"
          class="prev-link"
          @click="onPrevClick"
        >
          Previous step
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import MnButton from '@/components/MnButton.vue'
import MnCheckbox from '@/components/MnCheckbox.vue'

export default {
  name: 'MnSubmit',

  components: {
    MnButton,
    MnCheckbox,
  },

  data() {
    return {
      isAccepted: false,
    }
  },

  methods: {
    onSubmitClick() {
      if (this.isAccepted) {
        this.$emit('onSubmitClick')
      }
    },

    onPrevClick() {
      this.$emit('onPrevClick')
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
  text-align: center;
  position: relative;
}

.header {
  height: 157px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 29px;
  font-family: Orgon-Light;
  position: relative;
}

.header::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-image: linear-gradient(to right, #febf10, #e49a16);
}

.controls {
  margin-top: 40px;
}

.prev-link {
  display: block;
  color: white;
  text-decoration: none;
  font-family: Orgon-Thin;
  letter-spacing: .3px;
  font-size: 20px;
  line-height: 1.58;
  margin-top: 28.1px;
}

.policy-wrapp {
  position: relative;
  height: 184px;
}

.policy {
  text-align: left;
  margin-top: 11px;
  margin-bottom: 14px;
  height: 180px;
  padding: 0 28px 0 23px;
  font-family: Orgon-Thin;
  letter-spacing: .4px;
  font-size: 16px;
  overflow: auto;
}

.policy-wrapp::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 63px;
  background-image: linear-gradient(to bottom, rgba(2, 96, 152, 0), #01629a);
}

.policy-wrapp::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-image: linear-gradient(to right, #febf10, #e49a16);
}

.checkbox {
  margin-top: 20px;
}
</style>

