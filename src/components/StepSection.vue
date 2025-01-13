<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue'
import { ref } from 'vue';

const currentStep = ref<any>({
        name: 'Idea',
        title: 'Your vision is unique',
        text: 'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.',
        image: 'https://forcythe.com/images/camera-man.svg',
    })

const steps = ref<any>(
    [{
        name: 'Idea',
        title: 'Your vision is unique',
        text: 'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.',
        image: 'https://forcythe.com/images/camera-man.svg',
    },
    {
        name: 'Design',
        title: 'Crafting the blueprint for success',
        text: 'Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.',
        image: 'https://forcythe.com/images/plan-design.svg',
    },
    {
        name: 'Develop',
        title: 'Turning blueprints into reality.',
        text: 'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
        image: 'https://forcythe.com/images/plan-develop.svg',
    },
    {
        name: 'Launch',
        title: 'Your launchpad to the market.',
        text: 'Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.',
        iamge: 'https://forcythe.com/images/plan-launch.svg'
    }]
)
</script>

<template>
    <div class="section-padding py-20 px-5 md:px-10 lg:px-[56px] xl:px-[112px]">
        <div class="mb-12 xl:mb-0 max-w-[45rem]">
            <div class="">
                <p
                    class="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
                    From <span class="text-accent">Spark</span> to <span class="text-accent">Spotlight:</span> we take you every step of the way to success</p>
            </div>
        </div>
        <div class="flex lg:items-end flex-col md:flex-row">
            <div class="basis-1/2 flex mb-8 md:mb-0">
                <div class="md:pr-10">
                    <div class="border-2 border-accent3 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                        <div @click="currentStep = step" v-for="(step, index) in steps" :key="index" :class="currentStep.name === step.name ? 'bg-accent3 text-primary' : 'bg-transparent text-white'" class="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300">
                           {{ step.name }}
                        </div>
                    </div>
                    <div class="">
                            <p class="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                            {{ currentStep.title }}
                            </p>
                            <p class="text-darkGrey text-base md:text-lg mb-8 leading-7">
                            {{ currentStep.text }}
                            </p>
                    </div>
                    <PrimaryButton text="Book a Call" :hasIcon="true" />
                </div>
            </div>
            <div class="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
                <img alt="plan-img"
                    loading="lazy" class="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]" :src="currentStep.image">
                </div>
        </div>
    </div>
</template>