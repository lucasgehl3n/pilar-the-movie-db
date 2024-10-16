<template>
    <div class="w-full flex text-white overflow-x-auto pt-2 custom-scroll">
        <div v-for="actor in props.resumedActors" class="p-2 flex-shrink-0">
            <img class="rounded w-32 h-32" :src="getActorsPath(actor)" :alt="actor.name" loading="lazy">
            {{ actor.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import URLConstants from '../../../_constants/URLConstants';
class Actor {
    name: string;
    profile_path: string;

    constructor() {
        this.name = '';
        this.profile_path = '';
    }
}

const getActorsPath = (actor: Actor) => {
    return `${URLConstants.URL_IMAGE_PATH}/w300${actor.profile_path}`;
};

const props = defineProps({
    resumedActors: Array as () => Actor[]
});
</script>

<style scoped>
.custom-scroll {
    scrollbar-width: thin;
    scrollbar-color: #1f2937 #111827;
}

.custom-scroll::-webkit-scrollbar {
    height: 8px;
}

.custom-scroll::-webkit-scrollbar-track {
    background: #111827;
}

.custom-scroll::-webkit-scrollbar-thumb {
    background-color: #1f2937;
    border-radius: 9999px;
    border: 2px solid #111827;
}
</style>