<template>
  <div class="layout">
    <interests-sidebar @setDisplayedComponent="setDisplayedComponent"></interests-sidebar>
    <div class="main-content">
      <interests v-if="displayedComponent === 'create'" @setDisplayedComponent="setDisplayedComponent"/>
      <recommendations v-else />
    </div>
  </div>
</template>

<script>
import InterestsSidebar from '../components/interests-panel/interests-sidebar.vue'
import Interests from '../components/interests-panel/interests.vue'
import Recommendations from '../components/interests-panel/recommendations.vue'
export default {

  data () {
    return {
      displayedComponent: 'create'
    }
  },

  components: { InterestsSidebar, Interests, Recommendations },

  methods: {
    setDisplayedComponent (payload = null) {
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
    width: calc(100vw - 200px); /* Adjust width for tablets, assuming sidebar width is 200px */
    height: auto; /* Allow height to be flexible */
  }
}

@media (max-width: 768px) {
  .main-content {
    width: 100vw; /* Take full width on mobile screens */
    height: auto; /* Allow height to be flexible */
  }

  .layout {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }
}

@media (max-width: 480px) {
  .main-content {
    width: 100vw; /* Take full width for very small screens */
    padding: 10px; /* Reduce padding for small screens */
  }
}
</style>