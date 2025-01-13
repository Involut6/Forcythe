<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<template>
    <div class="w-full sticky top-0 z-[9999] left-0 flex items-center justify-between py-[29px] bg-[#FFFFF40] backdrop-blur-md px-5 md:px-10 lg:px-[56px] xl:px-[112px]">
        <div class="flex items-center gap-20">
            <img src="https://forcythe.com/images/forcythe%20logo.svg" class="w-auto md:w-20 lg:w-auto" alt="Forcythe logo" />
            <nav class="hidden md:flex gap-4 items-center text-white">
                <span>About</span>
                <span>Services</span>
                <span>Portfolio</span>
                <span>Studio</span>
                <span>Foundation</span>
            </nav>
        </div>
        <PrimaryButton :hasIcon="false" text="Book a Call" class="hidden md:block" />
        <!-- Mobile Menu -->
        <Menu as="div" class="relative md:hidden">
            <MenuButton as="button" class="bg-white bg-opacity-10 rounded-md p-3 md:hidden">
                <img alt="menu" loading="lazy" class="w-[18px] h-[18px]" src="https://forcythe.com/images/menu.svg" />
            </MenuButton>
            <MenuItems>
                <div class="absolute top-24 w-[238px] right-0 p-5 py-8 rounded-[2rem]" style="background: linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%);">
                    <ul class="flex flex-col">
                        <MenuItem class="w-full py-2.5">
                            <a class="w-full text-base py-3"><span>About</span></a>
                        </MenuItem>
                        <MenuItem class="w-full py-2.5">
                            <a class="w-full text-base py-3"><span>Services</span></a>
                        </MenuItem>
                        <MenuItem class="w-full py-2.5">
                            <a class="w-full text-base py-3"><span>Portfolio</span></a>
                        </MenuItem>
                        <MenuItem class="w-full py-2.5">
                            <a class="w-full text-base py-3"><span>Studio</span></a>
                        </MenuItem>
                            <MenuItem class="w-full py-2.5">
                                <a class="w-full text-base py-3"><span>Foundation</span></a>
                            </MenuItem>
                            <MenuItem class="w-full py-2.5">
                                <a class="w-full text-base py-3"><span>Careers</span></a>
                            </MenuItem>
                            <MenuItem class="w-full py-2.5">
                                <a class="w-full text-base py-3"><span>Blog</span></a>
                            </MenuItem>
                        </ul>
                    </div>
            </MenuItems>
        </Menu>
    </div>
</template>

<style scoped>

.card::before {
  content: "";
  width: 101%;
  height: 101%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #fff, #212534 20%);
    position: absolute;
    z-index: -5;
    top: -0.5%;
    left: -0.5%;
    animation: spin 3.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}
</style>