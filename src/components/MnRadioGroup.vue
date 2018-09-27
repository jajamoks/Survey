<template>
  <div class="radio-wrapper">
    <label class="item">
      YES
      <input
        v-model="selected"
        value="Yes"
        type="radio"
      >
      <span
        :style="getRadioBg('Yes')"
        class="checkmark"
      />
    </label>

    <label class="item">
      NO
      <input
        v-model="selected"
        value="No"
        type="radio"
      >
      <span
        :style="getRadioBg('No')"
        class="checkmark"
      />
    </label>

    <label class="item">
      NOT SURE
      <input
        v-model="selected"
        value="Not Sure"
        type="radio"
      >
      <span
        :style="getRadioBg('Not Sure')"
        class="checkmark"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'MnRadioGroup',

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selected: '',
    }
  },

  watch: {
    selected() {
      this.$emit('input', this.selected)
    },
  },

  created() {
    this.selected = this.value
  },

  methods: {
    getRadioBg(expected) {
      const BG = this.selected === expected ? 'checked.svg' : 'un-checked.svg'
      return {
        backgroundImage: `url('/${BG}')`,
      }
    },
  },
}
</script>

<style scoped>
.radio-wrapper {
  display: flex;
  justify-content: space-around;
  height: 101px;
  background-color: white;
  padding: 10px 10px 0 10px;
}

.item {
  display: block;
  flex-basis: 33.333%;
  position: relative;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  font-weight: bold;
  color: #035384;
}

.item input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>
