<script setup lang="ts">
import { useWordByWord } from '../composables/wordFade';
import { onMounted } from 'vue';

const { displayedWords, showWords } = useWordByWord();
const text = 'Success in Motion – Our clients’ journey'

onMounted(() => {
  showWords(text, 400, 5000)
});

</script>

<template>
    <div class="w-full">
        <p class="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center break-words">
            <span v-for="(word, index) in displayedWords"
              :key="word + index" class="fade-in" :class="word === 'Motion' && 'text-accent'">
              {{ word }}<span v-if="index < displayedWords.length - 1">&nbsp;</span>
            </span>
        </p>
        <div v-for="(animation, animationIndex) in 2" :key="animationIndex"  class="w-full inline-flex flex-nowrap overflow-x-hidden">
            <ul v-for="(item, index) in 2" :key="index" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none" :class="animationIndex === 0 ? 'animate-infinite-scroll-left' : 'animate-infinite-scroll-right mt-4'" :aria-hidden="animationIndex === 0 && index === 1 ? 'true' : 'false'">
                <li>
                    <img src="https://forcythe.com/images/Project%20Images/stac.svg"  />
                </li>
                <li>
                    <img src="https://forcythe.com/images/Project%20Images/phone.svg" />
                </li>
                <li>
                    <img src="https://forcythe.com/images/Project%20Images/starks.svg" />
                </li>
                <li>
                    <img src="https://forcythe.com/images/Project%20Images/activity.svg" /> 
                </li>
                <li>
                    <img src="https://forcythe.com/images/Project%20Images/africaFund.svg" />
                </li>
                <li>
                    <img src="https://forcythe.com/images/Project%20Images/exec-pro.svg" />
                </li>
            </ul>
        </div>
    </div>
</template>