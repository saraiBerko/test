<template>
  <div class="interests-component">
    <div class="main-content-inner">
      <div class="user-item">
        <h1>User ID:</h1>
        <span class="framed-text">{{ userID }}</span>
      </div>
      <div class="interests-item">
        <h1>Interests:</h1>
        <span v-for="(interests, index) in interestsOptions" :key="index" class="framed-text">
          {{ getInterestsString(interests) }}
        </span>
      </div>
    </div>
    <button @click="">submit</button>
  </div>
</template>

<script lang="ts">
import { interestsOptions } from '../../constants'
import { mapState } from "pinia"
import { useBaseStore } from "../../stores/BaseStore"
export default {
  data () {
    return {
      interestsOptions: interestsOptions
    }
  },

  computed: {
    ...mapState(useBaseStore, {
      userID: state => state.userID
    })
  },

  methods: {
    getInterestsString (interests) {
      return interests.join(', ')
    }
  }

}
</script>

<style scoped>

</style>