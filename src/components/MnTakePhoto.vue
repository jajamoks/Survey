<template>
  <div class="questions-wrapper">
    <div class="indicator">
      Contact information
    </div>

    <div class="main-content">
      <div class="header">
        Take a photo of your <br > business card
      </div>

      <div class="inputs">
        <img
          v-if="photo.length > 0"
          :src="photo"
          class="user-photo"
          alt="card"
        >

        <label
          v-show="photo.length === 0"
          class="take-label only-desktop">
          <input
            ref="takeImage"
            type="file"
            accept="image/*;capture=camera"
            @change="upload"
          >

          <span class="checkmark">
            <img
              src="@/assets/img/camera.svg"
              alt="camera"
            >
            Take a Photo
          </span>
        </label>

        <label
          v-show="photo.length === 0"
          class="take-label">
          <input
            ref="uploadImage"
            type="file"
            accept="image/*"
            @change="upload"
          >

          <span class="checkmark">
            <img
              src="@/assets/img/photo.svg"
              alt="camera"
            >
            Upload Photo
          </span>
        </label>
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
          Previous step
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import MnButton from '@/components/MnButton.vue'

export default {
  name: 'MnTakePhoto',

  components: {
    MnButton,
  },

  data() {
    return {
      photo: '',
    }
  },

  methods: {
    onNextClick() {
      if (this.photo) {
        this.$emit('onNextClick')
      }
    },

    onPrevClick() {
      this.$emit('onPrevClick')
    },

    makePreview(file) {
      if (file) {
        const self = this
        const reader = new FileReader()
        reader.onload = (e) => {
          self.photo = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },

    upload(e) {
      const file = e.target.files[0]
      if (file && !file.type.includes('image')) {
        alert('Only images allowed')
      } else if (file) {
        this.makePreview(file)
        this.$emit('upload', file)
      }
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

.header {
  height: 117px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 29px;
  font-family: Orgon-Light;
}

.inputs {
  height: 190px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputs label {
  display: block;
  position: relative;
}

.inputs label:first-child {
  margin-bottom: 13.1px;
}

.inputs label input {
  opacity: 0;
  width: 233.1px;
  height: 53.9px;
}

.inputs label .checkmark {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: HelveticaNeue-medium;
  background-image: linear-gradient(to bottom, #027cc5, #015485);
  font-size: 18.2px;
  display: flex;
  letter-spacing: .5px;
  align-items: center;
  padding-left: 38px;
}

.inputs label .checkmark img {
  margin-right: 9px;
}

.user-photo {
  max-height: 100%;
}

.controls {
  margin-top: 65px;
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

@media screen and (min-width: 769px) {
  .only-desktop {
    display: none!important;
  }
}
</style>

