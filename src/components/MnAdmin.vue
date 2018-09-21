<template>
  <div class="admin-wrapper">
    <table>
      <tr>
        <th>User Id</th>
        <th>Date</th>
        <th
          v-for="(num, index) in answerAmount"
          :key="`head${index}`"
        >
          {{ `${num} Answer` }}
        </th>
        <th>Photo</th>
      </tr>

      <tr
        v-for="(user, index) in currentUsers"
        :key="index"
      >
        <td> {{ index }}</td>
        <td> {{ user.date }}</td>
        <td
          v-for="(num, index) in answerAmount"
          :key="`answer${index}`"
        >
          {{ user[`answer${index}`] }}
        </td>
        <td
          v-if="user.photo_url"
          class="image-holder"
        >
          <a
            :href="user.photo_url"
            target="_blank"
          >
            <img
              :src="user.photo_url"
              alt="photo"
            >
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MnAdmin',
  props: {
    users: {
      type: Array,
      default: () => ([]),
    },

    answerAmount: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentUsers: [],
    }
  },

  created() {
    this.currentUsers = this.users
    this.getImages()
  },

  methods: {
    getImage(imageId, index) {
      firebase.storage().ref().child(`${imageId}`).getDownloadURL()
        .then((url) => {
          this.$set(this.currentUsers[index], 'photo_url', url)
        })
        .catch(() => {
          this.$set(this.currentUsers[index], 'photo_url', null)
        })
    },

    getDate(imageId, index) {
      return firebase.storage().ref().child(`${imageId}`).getMetadata()
        .then((resp) => {
          this.$set(this.currentUsers[index], 'date', resp.timeCreated.slice(0, 10))
        })
        .catch(() => {
          this.$set(this.currentUsers[index], 'date', 'test')
        })
    },

    getImages() {
      this.currentUsers.forEach((el, index) => {
        if (el.photo) {
          this.getDate(el.photo, index)
            .then(() => {
              this.getImage(el.photo, index)
            })
        }
      })
    },
  },
}
</script>

<style scoped>
.admin-wrapper {
  overflow: auto;
  max-height: 100%;
  padding: 5px;
  background-color: rgba(0,0,0, .6);
}
table {
  width:100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}

.image-holder {
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 200px;
  max-height: 200px;
}
</style>
