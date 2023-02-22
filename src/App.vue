<template>
	<main class="max-w-screen-xl shadow-md bg-whatsapp-gray h-3/4" v-if="$store.state.user">
		<sidebar></sidebar>
		<chat></chat>
	</main>
	<login v-else></login>
</template>

<script>
	import Sidebar from "./components/Sidebar.vue"
	import Chat from "./components/Chat.vue"
	import Login from "./components/Login.vue"
	import { auth } from "./firebase"
	
	export default {
		components: { Sidebar, Chat, Login },
		created() {
			auth.onAuthStateChanged(user => this.$store.commit("auth", user))
		}
	}
</script>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}
</style>