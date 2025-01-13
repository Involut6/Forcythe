<script setup lang="ts">
import { ref } from 'vue';

const hover = ref<boolean>(false);
const props = defineProps(['hasIcon', 'text'])
</script>
<template>
    <div class="w-fit relative">
        <button @mouseenter="hover = true" @mouseleave="hover = false" class="focus:outline-none relative z-[999] transition-bg ease flex gap-2 items-center duration-300 rounded-full bg-white text-primary px-5 py-3 font-semibold hover:text-white hover:bg-[#064386]">
            <p>{{text}}</p>
            <svg v-if="hasIcon" xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="6 0 16 24"><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/></svg>
        </button>
        <div :class="{'border-[#064386]' : hover, 'z-[1]': hasIcon}" class="absolute z-[1] top-[6px] right-[6px] rounded-full w-full h-12 border border-dashed text-primary px-5 py-3 font-semibold hover:text-white">
        </div>
    </div>
</template>