<template>
  <div class="interests-component">
    <div class="main-content-inner">
      <div class="user-item">
        <h1>User ID:</h1>
        <span class="framed-text">{{ userID }}</span>
      </div>
      <div class="interests-item">
        <h1>Interests:</h1>
        <span v-for="(interests, index) in interestsOptions" :key="index" class="framed-text interestes" :class="{'clicked': selectedInterests === interests}" @click="setSelectedInterests(interests)">
          {{ getInterestsString(interests) }}
        </span>
      </div>
    </div>
    <button @click="submitUserSelection">submit</button>
  </div>
</template>

<script lang="ts">
import { interestsOptions } from '../../constants'
import { mapState, mapActions } from "pinia"
import { useBaseStore } from "../../stores/BaseStore"
import { useInterestsStore } from "../../stores/InterestsStore"
export default {
  data () {
    return {
      interestsOptions: interestsOptions,
      selectedInterests: null
    }
  },

  computed: {
    ...mapState(useBaseStore, {
      userID: state => state.userID
    })
  },

  methods: {
    ...mapActions(useInterestsStore, ["getRecommendationByInterests"]),

    getInterestsString (interests) {
      return interests.join(', ')
    },
    setSelectedInterests (interests) {
      this.selectedInterests = interests
    },
    submitUserSelection () {
      this.$emit('setDisplayedComponent')
    }
  }

}
</script>

<style scoped>
 .framed-text {
    display: inline-block; /* Ensure the frame wraps only the text */
    border: 2px solid black; /* Add the black frame */
    padding: 5px; /* Add some spacing inside the frame */
    margin: 2px; /* Add space around the frame */
    border-radius: 5px; /* Optional: Rounded corners */
  }

  .framed-text.interestes:hover {
    background-color: #70b6f8;
  }

  .framed-text.interestes.clicked {
  background-color: #70b6f8;
  border-color: lightblue;
}
</style>