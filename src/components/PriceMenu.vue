<template>
    <select v-model="selected" class="form-control my-3" style="width: 35%;">
        <option v-for="option in options"
                v-bind:key="option"
                v-bind:value="option">
            {{option}}
        </option>
    </select>
</template>

<script>
    export default {
        name: "SelectMenu",
        data: function () {
            return {
                selected: 0
            }
        },
        props: {
            options: Array,
        }
    }
</script>

<style scoped>

</style>