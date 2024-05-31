<!-- src/components/HomePanel.vue -->
<template>
    <div class="bg-[--background-900] w-screen rounded-lg shadow-2xl m-4">
        <div ref="gridContainer" class="grid gap-4 rounded-lg w-full h-full shadow-xl p-4" :style="gridStyle">
            <div v-for="(item, index) in gridItems" :key="index"
                class="bg-gray-800 rounded-lg flex items-center justify-center text-3xl cursor-pointer text-white"
                :style="itemSize">
                +
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

// Define minimum width/height for grid items and gap size
const minWidth = 170;
const minHeight = 170;
const gapSize = 16;
const paddingSize = 32; // 4 units of padding on each side (p-4)

// Create reactive state for grid items and styles
const gridItems = reactive([]);
const gridStyle = ref({});
const itemSize = ref({});

// Refs
const gridContainer = ref(null);

const updateGrid = () => {
  if (gridContainer.value) {
    const containerWidth = gridContainer.value.clientWidth - paddingSize;
    const containerHeight = gridContainer.value.clientHeight - paddingSize;

    const columns = Math.floor((containerWidth + gapSize) / (minWidth + gapSize));
    const rows = Math.floor((containerHeight + gapSize) / (minHeight + gapSize));

    const itemWidth = (containerWidth - (columns - 1) * gapSize) / columns;
    const itemHeight = (containerHeight - (rows - 1) * gapSize) / rows;

    itemSize.value = {
      width: `${itemWidth}px`,
      height: `${itemHeight}px`,
    };

    gridStyle.value = {
      gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
      gridAutoRows: `minmax(${minHeight}px, ${itemHeight}px)`,
      gap: `${gapSize}px`,
    };

    const totalItems = columns * rows;

    // Add or remove grid items based on the calculated total items
    if (gridItems.length < totalItems) {
      const itemsToAdd = totalItems - gridItems.length;
      for (let i = 0; i < itemsToAdd; i++) {
        gridItems.push(`Item ${gridItems.length + 1}`);
      }
    } else if (gridItems.length > totalItems) {
      gridItems.splice(totalItems);
    }
  }
};

// Event listener for window resize
const onResize = () => {
    updateGrid();
};

// Hook into lifecycle events
onMounted(() => {
    updateGrid();
    window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
});
</script>