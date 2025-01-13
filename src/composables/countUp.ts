// useCountUp.ts

import { ref, onMounted } from 'vue';

export function useCountUp(target: number, duration: number = 2000) {
  const currentValue = ref(0);

  onMounted(() => {
    let start = 0;
    const step = target / (duration / 100); // Calculate step based on the duration and target

    const interval = setInterval(() => {
      start += step;
      currentValue.value = Math.min(start, target); // Ensure we don't exceed the target

      if (currentValue.value === target) {
        clearInterval(interval); // Stop the interval once the target is reached
      }
    }, 100); // Update every 100ms
  });

  return {
    currentValue,
  };
}
