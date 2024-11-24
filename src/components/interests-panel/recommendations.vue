<template>
  <div class="recommendations-component">
    <div v-if="!recommendationError" class="main-content">
      <div class="user-item">
        <h1>User ID:</h1>
        <span class="framed-text">{{ userID }}</span>
      </div>
      <div class="interests-item">
        <span
          v-for="(recommendation, index) in recommendations[recommendationsKey][0]"
          :key="index"
          class="framed-text interestes"
          >{{ recommendation }}</span
        >
      </div>
    </div>
    <div v-else>
      <h1>{{ recommendationError }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia"
import { useInterestsStore } from "../../stores/InterestsStore"
import { useBaseStore } from "../../stores/BaseStore"

export default {
  computed: {
    ...mapState(useInterestsStore, {
      recommendations: state => state.recommendations,
      recommendationError: state => state.recommendationError,
    }),
    ...mapState(useBaseStore, {
      userID: state => state.userID
    }),
    recommendationsKey () {
       const key = Object.keys(this.recommendations)[0]
       return key
    }
  }
}
</script>

<style scoped>
.user-item {
  display: flex;
  align-items: center; /* Aligns items (h1 and span) vertically */
  gap: 8px; /* Adds space between the h1 and span */
}

.user-item h1 {
  font-size: 16px; /* Adjusts the size of the h1 for inline styling */
  margin: 0; /* Removes default margin */
}
.framed-text {
    display: block; /* Ensure the frame wraps only the text */
    border: 2px solid black; /* Add the black frame */
    padding: 5px; /* Add some spacing inside the frame */
    margin: 2px; /* Add space around the frame */
    border-radius: 5px; /* Optional: Rounded corners */
  }

  .framed-text.interestes:hover {
    background-color: #70b6f8;
  }
</style>