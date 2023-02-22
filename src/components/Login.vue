<template>
	<div class="shadow-md rounded-lg bg-white w-96 h-96 grid place-items-center">
		<img src="/images/logo.png" alt="Logo" class="inline-block w-24">
		<button @click="login" class="bg-green-500 px-4 py-2 text-white font-bold rounded-lg focus:outline-none">Login</button>
	</div>
</template>

<script>
	import { auth, provider } from "../firebase"

	export default {
		methods: {
			login() {
				auth.signInWithPopup(provider).catch(error => alert(error.message))
			}
		}
	}
</script>