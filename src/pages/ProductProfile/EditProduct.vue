<template>
    <card type="user" class="mx-auto mt-4 w-50">
        <div class="row mb-4">
            <customed-input customedDivClass="col-6 w-50" label="Product Id" placeholder="" :disabled="true" />
            <customed-input customedDivClass="col-6" label="New Name" placeholder="" />
        </div>
        <customed-textarea customedTextareaClass="form-control col-12" placeholder="Please Write a Brief Description of Your Business ..." />
        <p>A place to Upload Picture</p>
        <button class="btn btn-primary">Save</button>
    </card>
</template>

<script>
export default {
    
}
</script>