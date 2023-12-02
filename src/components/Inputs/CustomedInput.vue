<template>
    <div :class="customedDivClass">
        <label :class="customedLabelClass">{{ label }}</label>
        <input v-model="text" :disabled="disabled" @input="hanleInputChange" :class="customedInputClass" :value="inputValue" :placeholder="placeholder" :type="type" />
    </div>
</template>

<script>
export default {
    name: "customed-input",
    props: [
        "customedDivClass",
        "customedInputClass",
        "placeholder",
        "label",
        "inputValue",
        "disabled",
        "type",
        "customedLabelClass"
    ],
    data() {
        return {
            text: this.inputValue
        };
    },
    methods: {
        hanleInputChange() {
            this.$emit('input', this.text)
        }
    },
};
</script>
