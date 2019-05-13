<template>
    <select v-model="selected" class="form-control my-3" style="width: 35%;" v-on:change="updateValue()">
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
        data: {
            return: {
                selected: ''
            }
        },
        props: {
            options: Array,
            selected3: Object
        },
        methods: {
          updateValue() {
              this.$emit('input', this.selected)
          }
        }
    }
</script>

<style scoped>

</style>