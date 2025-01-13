<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue'
import { ref, onMounted } from 'vue';
import { useTypeText } from '@/composables/typing.ts';
import { useWordByWord } from '../composables/wordFade';

const title = 'We build <span class="text-accent">products</span> that shape a better future';
const text = 'We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.'
const {displayedText, typeText} = useTypeText();
const { displayedWords, showWords } = useWordByWord();

onMounted(() => {
  typeText(title, 100)
  showWords(text, 200, 5000)
});
</script>

<template>
    <div class="w-full px-5 md:px-10 lg:px-[56px] xl:px-[112px]">
        <div class="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
            <div class="max-w-[56rem]">
                <div class="min-h-[180px]">
                    <h1 class="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7" v-html="displayedText"></h1>
                </div>
                <div class="mb-8 max-w-3xl">
                    <div class="">
                        <p class="text-darkGray text-base md:text-lg mb-8 leading-7 fade-in break-words lg:break-normal">
                            <span v-for="(word, index) in displayedWords"
                              :key="word + index" class="fade-in">
                              {{ word }}<span v-if="index < displayedWords.length - 1">&nbsp;</span>
                            </span>
                        </p>
                        <PrimaryButton text="Book a Call" :hasIcon="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
