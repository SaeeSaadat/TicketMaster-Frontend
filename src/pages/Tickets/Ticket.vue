<template>
	<div>
		<card class="w-75 mx-auto text-center">
			<h1>Title: {{ ticketDetails.title }}</h1>
			<h4>Created: {{ ticketDetails.created }}</h4>
			<h4>DueDate: {{ ticketDetails.deadline }}</h4>
			<h2>Status: {{ ticketDetails.status }}</h2>

			<div class="row text-center mx-auto">
				<card class="mr-5 ml-4" style="width: 60%">
					{{ ticketDetails.description }}
				</card>
				<div class="dflex flex-column" style="width: 30%">
					<card style="height: 380px; overflow-y: auto">
						<p class="mb-4">ChatBox</p>
						<p v-for="message in chats" class="text-center text-primary">
							{{ message.content }}
						</p>
					</card>
					<div class="dflex row justify-content-center">
						<textarea
							v-model="newContent"
							class="form-control mr-3"
							placeholder="Enter Your Text Here ..."
							>{{ value }}</textarea
						>

						<button @click="sendText" class="btn btn-primary h-50 my-auto">
							<i class="fa fa-send"></i>
						</button>
					</div>
				</div>
			</div>
		</card>
	</div>
</template>

<script>
import axios from "axios";
export default {
	props: {
		tickets: {
			type: Array,
		},
	},
	data() {
		return {
			newContent: "",
			ticketDetails: "",
			chats: "",
		};
	},
	mounted() {
		const productId = this.$route.params.productId;
		const ticketId = this.$route.params.ticketId;
		axios.get(`/product/${productId}/ticket/${ticketId}`).then((res) => {
			this.ticketDetails = res.data;
			this.chats = res.data.messages;
		});
	},
	methods: {
		sendText() {
			axios.post(`/message/${this.$route.params.ticketId}`, {
				content: this.newContent,
			});
			this.newContent = "";
		},
	},
};
</script>
