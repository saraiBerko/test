<template>
  <div class="sidebar">
    <div class="button-container">
      <button
        class="create-button"
        :class="{ 'selected': selectedButton === 'create' }"
        @click="setSelectedButton('create')"
      >
        Create Interests
      </button>
      <button
        class="get-button"
        :class="{ 'selected': selectedButton === 'get' }"
        @click="setSelectedButton('get')"
      >
        Get Interests
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      selectedButton: 'create' as string
    }
  },

  methods: {
    // comment
    setSelectedButton (type: string) {
      this.selectedButton = type
      this.$emit('setDisplayedComponent', type)
    }
  }

}
</script>

<style scoped>
/* Sidebar Styling */
.sidebar {
  position: fixed;
  top: 0;
  left: 0; /* Pinned to the left */
  width: 250px; /* Fixed width */
  height: 100%; /* Full height */
  background-color: #f4f4f4; /* Light gray background */
  border: 3px solid black; /* Black border on all sides */
  padding: 20px;
  margin-right: 10px; /* Gap between the sidebar and the content */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  overflow-y: auto; /* Scrollable if content overflows */
}

/* Responsive Design for Smaller Screens */
@media (max-width: 768px) {
  .sidebar {
    width: 200px; /* Reduce width on medium-sized screens (e.g., tablets) */
    padding: 15px; /* Adjust padding for smaller screens */
  }
}

/* Responsive Design for Mobile Screens */
@media (max-width: 480px) {
  .sidebar {
    width: 150px; /* Further reduce width on smaller screens (e.g., mobile) */
    padding: 10px; /* Less padding on mobile */
    margin-right: 5px; /* Reduce gap on mobile */
  }
}

/* Container for buttons */
.button-container {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  gap: 15px; /* Add space between the buttons */
  align-items: center; /* Center align buttons horizontally */
  margin-top: 50px; /* Add top margin for spacing */
  padding: 0 10px; /* Add padding on left and right to prevent overflow on mobile */
}

/* Button Styling */
.create-button,
.get-button {
  padding: 14px 30px; /* Comfortable padding */
  font-size: 18px; /* Font size for larger screens */
  font-weight: bold; /* Bold text */
  text-align: center;
  width: 100%; /* Make button width 100% of container */
  max-width: 250px; /* Limit max width */
  border-radius: 8px; /* Rounded corners */
  border: 2px solid black; /* Add a blue border around the button */
  background-color: transparent; /* Transparent background */
  color: black; /* Text color same as the border */
  cursor: pointer; /* Pointer cursor on hover */
  transition: all 0.3s ease; /* Smooth transition for hover and active states */
}

/* Selected Class - Light blue background when selected */
.create-button.selected,
.get-button.selected {
  background-color: #70b6f8; /* Light blue background when selected */
  color: black; /* Keep the text color same */
}

/* Hover Effect - Light blue background on hover (no selected class) */
.create-button:hover:not(.selected),
.get-button:hover:not(.selected) {
  background-color: #70b6f8; /* Light blue background on hover */
  color: black; /* Keep the text color same */
}

/* Active/Clicked Effect - Light blue background on click (no selected class) */
.create-button:active:not(.selected),
.get-button:active:not(.selected) {
  background-color: #b2ccf2; /* Slightly darker blue when clicked */
  color: black; /* Keep the text color same */
}

/* Responsive Design for Tablets and Smaller Screens */
@media (max-width: 1024px) {
  .button-container {
    margin-top: 40px; /* Adjust margin for tablets */
  }

  .create-button,
  .get-button {
    font-size: 16px; /* Smaller font size for tablets */
    padding: 12px 25px; /* Adjust padding for tablets */
    max-width: 200px; /* Slightly smaller max width for tablets */
  }
}

/* Responsive Design for Smaller Screens (Mobile) */
@media (max-width: 768px) {
  .button-container {
    margin-top: 30px; /* Adjust margin for smaller screens */
  }

  .create-button,
  .get-button {
    font-size: 14px; /* Smaller font size for mobile */
    padding: 10px 20px; /* Adjust padding for mobile */
    max-width: 180px; /* Further reduce max width for mobile */
  }
}

/* Extra Small Screens (Very Small Mobile) */
@media (max-width: 480px) {
  .create-button,
  .get-button {
    font-size: 12px; /* Further reduce font size */
    padding: 8px 15px; /* Smaller padding for very small screens */
    max-width: 150px; /* Further reduce width for very small screens */
  }
}
</style>