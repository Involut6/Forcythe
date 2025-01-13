<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useWordByWord } from '../composables/wordFade';

const { displayedWords: displayedWords1, showWords: showWords1 } = useWordByWord();
const currentIndex = ref<number>(0);
const title = 'Discover the transformative stories of startups that scaled new heights with us'
const stories = ref<any>([
    {
        name: 'Starks',
        logo: 'https://forcythe.com/images/starks.svg',
        text: 'Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.',
        writer: 'John, Management',
        dp: 'https://forcythe.com/images/john.svg'
    },
    {
        name: 'ExecutivePros',
        logo: 'https://forcythe.com/images/ExecutivePros%20Logo.svg',
        text: 'The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!',
        writer: 'Testimony, Co-founder',
        dp: 'https://forcythe.com/images/executive-pro-ceo.svg'
    },
    {
        name: 'Stac AI',
        logo: 'https://forcythe.com/images/stacai.svg',
        text: 'Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.',
        writer: 'Edwin, Former CTO',
        dp: 'https://forcythe.com/images/edwin.svg'
    },
    {
        name: 'Iwaria',
        logo: 'https://forcythe.com/images/iwaria.svg',
        text: 'The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.',
        writer: 'Iwaria, Founder',
        dp: 'https://forcythe.com/images/iwaria-founder.svg'
    },
    {
        name: 'Beaupreneur',
        logo: 'https://forcythe.com/images/Beaupreneur.svg',
        text: 'I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.',
        writer: 'Christiana, Founder',
        dp: 'https://forcythe.com/images/christina.svg'
    },
])
const currentStory = ref<any>({
        name: 'Starks',
        logo: 'https://forcythe.com/images/starks.svg',
        text: 'Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.',
        writer: 'John, Management',
        dp: 'https://forcythe.com/images/john.svg'
    },)

function change(story: any) {
    currentStory.value = story
    currentIndex.value = stories.value.indexOf(currentStory.value)
    triggerFade();
}

const { displayedWords: displayedWordsName, showWords: showWordsName } = useWordByWord();
const { displayedWords: displayedWordsText, showWords: showWordsText } = useWordByWord();
const { displayedWords: displayedWordsWriter, showWords: showWordsWriter } = useWordByWord();

onMounted(() => {
    setInterval(() => {
        currentIndex.value = currentIndex.value + 1
        if (currentIndex.value > 4) {
            currentIndex.value = 0
        }
        currentStory.value = stories.value[currentIndex.value];
        triggerFade()
    }, 20000);

    showWords1(title, 500, 5000);
    triggerFade()
})

function triggerFade() {
    showWordsName(currentStory.value.name, 300);
    showWordsText(currentStory.value.text, 300);
    showWordsWriter(currentStory.value.writer, 300);
}
</script>

<template>
    <div class="w-full mt-24 px-5 md:px-10 lg:px-[56px] xl:px-[112px] min-h-screen relative">
        <p class="text-[2rem] max-w-[886px] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center break-words">
            <span v-for="(word, index) in displayedWords1"
              :key="word + index" class="fade-in" :class="{'text-accent' : word === 'transformative' || word === 'stories'}">
              {{ word }}<span v-if="index < displayedWords1.length - 1">&nbsp;</span>
            </span>
        </p>
        <div class="w-full overflow-x-scroll no-scrollbar">
            <div class="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
                <div @click="change(item)" v-for="(item, index) in stories" :key="index" class="w-full">
                    <div :class="{'bg-accent2' : currentStory.name === item.name, 'rounded-s-full' : index === 0, 'rounded-e-full' : index === 4}" class="w-full p-[1.1rem] cursor-pointer false transition-all duration-300">
                        <div class="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                            <img :alt="item.name" loading="lazy" :class="{'w-20' : index === 3, 'w-36' : index === 4}" :src="item.logo">
                            <span v-if="index === 0">Starks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:grid grid-cols-10 lg:min-w-[750px] w-full mt-5">
    <!-- Conditional Column Span -->
    <div
      v-if="currentStory.name !== 'Starks'"
      :class="{
        'col-span-2': currentStory.name === 'ExecutivePros',
        'col-span-4': currentStory.name === 'Stac AI',
        'col-span-3': currentStory.name === 'Iwaria',
        'col-span-5': currentStory.name !== 'ExecutivePros' && currentStory.name !== 'Stac AI' && currentStory.name !== 'Iwaria'
      }"
    ></div>

    <!-- Story Content -->
    <div class="col-span-5 text-white rounded-[1.8rem] lg:flex flex-col sm:flex-row p-5 sm:p-7 bg-accent2">
      <div class="sm:basis-[58%] pr-3 flex flex-col justify-between">
        <!-- Faded Name -->
        <p class="font-semibold">
          <span
            v-for="(word, index) in displayedWordsName"
            :key="'name' + index"
            class="fade-in inline-block"
          >
            {{ word }}<span v-if="index < displayedWordsName.length - 1">&nbsp;</span>
          </span>
        </p>

        <!-- Faded Text -->
        <p>
          <span
            v-for="(word, index) in displayedWordsText"
            :key="'text' + index"
            class="fade-in inline-block"
          >
            {{ word }}<span v-if="index < displayedWordsText.length - 1">&nbsp;</span>
          </span>
        </p>

        <!-- Faded Writer -->
        <p class="font-semibold mb-4 mt-4 lg:mt-0">
          <span
            v-for="(word, index) in displayedWordsWriter"
            :key="'writer' + index"
            class="fade-in inline-block"
          >
            {{ word }}<span v-if="index < displayedWordsWriter.length - 1">&nbsp;</span>
          </span>
        </p>
      </div>
      
      <!-- Image -->
      <img alt="ceo" loading="lazy" class="rounded-xl sm:basis-[42%] relative object-top w-full h-full inset-0 object-cover" :src="currentStory.dp" />
    </div>
    </div>
    </div>
</template>

