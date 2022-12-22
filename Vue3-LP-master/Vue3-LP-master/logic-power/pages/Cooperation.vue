<template>
    <section class="cooperation">
        <div class="cooperation__wrapper">
            <Suggestions 
            :img="invitatCooperate.img"
            :title="invitatCooperate.title"
            :subtitle="invitatCooperate.subtitle"
            :directionLeft="false"
            />
        </div>
    </section>
</template>

<script setup>
import Suggestions from '~~/components/green_vision/cooperation/sections/Suggestions.vue';

const invitatCooperate = {
    img: 'handshake-square',
    title: 'GreenVision приглашает к сотрудничеству',
    subtitle: 'Торговые компании, предпринимателей, монтажников видеонаблюдения, электриков и всех желающих научится видеонаблюдению и монтажу.'
}
</script>

<style lang="scss" scoped>
.cooperation {
    @extend %width-main;

    margin: auto;

    &__wrapper {
        @extend %padding-wrp;
    }
}
</style>