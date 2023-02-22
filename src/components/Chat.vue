<template>
	<div class="flex flex-col overflow-auto">
		<div class="p-4 border-b border-gray-300 flex items-center gap-4">
			<img src="/images/avatar1.jpg" alt="Avatar" class="w-12 rounded-full">
			<div class="mr-auto">
				<h3 class="font-bold">Game</h3>
				<p class="text-sm text-gray-500">Last message</p>
			</div>
			<i class="fas fa-search text-xl text-whatsapp-dark-gray"></i>
			<i class="fas fa-paperclip text-xl text-whatsapp-dark-gray"></i>
			<i class="fas fa-ellipsis-v text-xl text-whatsapp-dark-gray"></i>
		</div>
		<div class="flex-1 bg-whatsapp p-4 flex flex-col gap-4 overflow-auto">
			<message v-for="message in messages" :key="message.id" :message="message"></message>
		</div>
		<div class="flex items-center gap-4 p-4 border-t border-gray-300">
			<i class="far fa-smile text-xl text-whatsapp-dark-gray"></i>
			<form class="flex-1" @submit.prevent="add">
				<input placeholder="Type a message" class="w-full px-4 py-2 rounded-full focus:outline-none" v-model="message.text">
				<button class="hidden">Send</button>
			</form>
			<i class="fas fa-microphone text-xl text-whatsapp-dark-gray"></i>
		</div>
	</div>
</template>

<script>
	import Message from "./Message.vue"
	import { db } from "../firebase"
	import { mapState } from "vuex"

	export default {
		components: { Message },
		computed: mapState(["user"]),
		created() {
			db.collection("messages").onSnapshot(snapshot => {
				this.messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
			})
		},
		data() {
			return {
				message: {},
				messages: []
			}
		},
		methods: {
			add() {
				db.collection("messages").add({
					name: this.user.displayName,
					...this.message
				}).then(() => this.message = {})
			}
		}
	}
</script>