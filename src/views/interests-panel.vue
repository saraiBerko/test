<template>
  <div class="layout">
    <interests-sidebar @setDisplayedComponent="setDisplayedComponent"></interests-sidebar>
    <div class="main-content">
      <interests
        v-if="displayedComponent === 'create'"
        @setDisplayedComponent="setDisplayedComponent"
      />
      <recommendations v-else />
    </div>
  </div>
</template>

<script>
import InterestsSidebar from '../components/interests-panel/interests-panel-sidebar.vue'
import Interests from '../components/interests-panel/interests.vue'
import Recommendations from '../components/interests-panel/recommendations.vue'
import { mapState } from "pinia"
import { useInterestsStore } from "../stores/InterestsStore"

export default {

  components: { InterestsSidebar, Interests, Recommendations },

  computed: {
    ...mapState(useInterestsStore, {
      displayedComponent: state => state.displayedComponent
    })
  },

  methods: {
    setDisplayedComponent (payload) {
      this.displayedComponent = payload
    }
  }

}
</script>

<style scoped>
.layout {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 20px;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 250px); /* Default width minus sidebar */
  height: 100vh; /* Full height */
  padding: 20px; /* Add padding for spacing */
  box-sizing: border-box; /* Include padding in width and height calculation */
}

@media (max-width: 1024px) {
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 250px); /* Default width minus sidebar */
    height: 100vh; /* Full height */
    padding: 20px; /* Add padding for spacing */
    box-sizing: border-box; /* Include padding in width and height calculation */
  }

  .layout {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 20px;
}
}

@media (max-width: 768px) {
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 250px); /* Default width minus sidebar */
    height: 100vh; /* Full height */
    padding: 20px; /* Add padding for spacing */
    box-sizing: border-box; /* Include padding in width and height calculation */
  }

  .layout {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 20px;
}
}

@media (max-width: 480px) {
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 250px); /* Default width minus sidebar */
    height: 100vh; /* Full height */
    padding: 20px; /* Add padding for spacing */
    box-sizing: border-box; /* Include padding in width and height calculation */
  }

  .layout {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 20px;
}
}
</style>