<template>
    <div :class="customedDivClass">
        <label :class="customedLabelClass">{{ label }}</label>
        <textarea v-model="text" @input="hanleInputChange" :rows="rows" :cols="cols" :class="customedTextareaClass" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: "customed-textarea",
    props: [
        "customedDivClass",
        "rows",
        "cols",
        "customedTextareaClass",
        "placeholder",
        "label",
        "textareaValue",
        "customedLabelClass"
    ],
    data() {
        return {
            text: this.textareaValue,
        };
    },
    methods: {
        hanleInputChange() {
            this.$emit("input", this.text);
        },
    },
};
</script>
