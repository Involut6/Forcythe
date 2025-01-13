<script setup lang="ts">
import { useCountUp } from '../composables/countUp';

const { currentValue: currentClients } = useCountUp(50, 2000);
const { currentValue: currentProjects } = useCountUp(120, 2000);
const { currentValue: currentTeamLeads } = useCountUp(10, 2000);
const { currentValue: currentYears } = useCountUp(10, 2000);

</script>

<template>
    <div class="py-14 md:py-20 xl:py-28 px-5 md:px-10 lg:px-[56px] xl:px-[112px]" style="background: linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%);">
        <div
            class="max-w-[52rem] mx-auto bg-[url('https://forcythe.com/images/arc.svg')] lg:bg-[url('https://forcythe.com/images/arc-l.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
            <div class="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
                <div class="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                    <div class="">
                        <p class="text-xl md:text-2xl lg:text-3xl font-medium">
                            We build solutions that help businesses of all sizes to scale
                        </p>
                    </div>
                </div>
                <div class="flex justify-evenly sm:justify-between items-center gap-3">
                    <div class="flex flex-col gap-3 text-left w-fit">
                        <div class="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                            {{ currentClients.toFixed(0) }}+
                        </div>
                        <span class="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">Clients</span>
                    </div>
                
                    <div class="flex flex-col gap-3 text-left w-fit">
                        <div class="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                            {{ currentProjects.toFixed(0) }}+
                        </div>
                        <span class="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">Projects</span>
                    </div>
                
                    <div class="flex flex-col gap-3 text-left w-fit">
                        <div class="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                            {{ currentTeamLeads.toFixed(0) }}+
                        </div>
                        <span class="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">Team Leads</span>
                    </div>
                
                    <div class="flex flex-col gap-3 text-left w-fit">
                        <div class="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                            {{ currentYears.toFixed(0) }}+
                        </div>
                        <span class="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">Glorious Years</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>