<template>
	<div>
		<card class="w-50 mx-auto">
			<p class="h1 text-center mt-3">{{ productTitle }}</p>

			<customed-input
				customedDivClass="col-8 mb-4 mx-auto"
				customedLabelClass="text-white"
				label="Ticket Title:"
				placeholder="Please enter the title of ticket you want to submit ..."
				v-model="ticketTitle"
			/>

			<textarea
				v-model="ticketDescription"
				class="form-control w-75 mx-auto mb-5"
				placeholder="Please Write a Brief Description of Your Business ..."
			/>

			<div class="row mb-5 w-100 mx-auto">
				<p class="mr-4">Ticket Deadline:</p>
				<DatePicker v-model="ticketDeadline" valueType="format" />
			</div>

			<button class="btn btn-primary w-100 mx-auto" @click="submitTicket">
				Submit Ticket
			</button>
		</card>
	</div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import submitNewTicket from "@/functions/Ticket/createTicket.js";

export default {
	components: { DatePicker },
	data() {
		return {
			ticketTitle: "",
			ticketDescription: "",
			ticketDeadline: "",
		};
	},
	methods: {
		submitTicket() {
			try {
				submitNewTicket(
					this.ticketTitle,
					this.ticketDescription,
					this.ticketDeadline,
					this.$router.params.ticketType,
					this.productTitle
				);
				this.$toast.success("Ticket Submitted");
				setTimeout(() => {
					this.$router.back();
				}, 1000);
			} catch (message) {
				this.$toast.error(message);
			}
		},
	},
	computed: {
		productTitle() {
			return localStorage.getItem("thisProductTitle");
		},
	},
};
</script>
