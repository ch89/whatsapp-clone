<template>
	<div class="rounded-lg p-4" :class="message.name == user.displayName ? 'ml-auto bg-whatsapp-green' : 'mr-auto bg-white'">
		<h3 class="font-bold text-red-400" @click="remove">{{ message.name }}</h3>
		<p>{{ message.text }}</p>
	</div>
</template>

<script>
	import { db } from "../firebase"
	import { mapState } from "vuex"
	
	export default {
		props: ["message"],
		computed: mapState(["user"]),
		methods: {
			remove() {
				db.collection("messages").doc(this.message.id).delete()
			}
		}
	}
</script>