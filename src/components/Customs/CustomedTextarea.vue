<template>
    <div :class="customedDivClass">
        <label :class="customedLabelClass">{{ label }}</label>
        <textarea val v-model="text" @input="hanleInputChange" :rows="rows" :cols="cols" :class="customedTextareaClass" :placeholder="placeholder">{{value}}</textarea>
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
        "customedLabelClass",
        "value"
    ],
    data() {
        return {
            text: this.textareaValue,
        };
    },
    methods: {
        hanleInputChange() {
            this.$emit("textarea", this.text);
        },
    },
};
</script>
