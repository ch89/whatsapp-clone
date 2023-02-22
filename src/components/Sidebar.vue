<template>
	<div class="border-r border-gray-300 divide-y divide-gray-300">
		<div class="flex items-center justify-between p-4">
			<img :src="$store.state.user.photoURL" alt="Avatar" class="w-12 rounded-full" @click="logout">
			<div class="text-whatsapp-dark-gray text-xl flex gap-4">
				<i class="fas fa-play-circle"></i>
				<i class="fas fa-comment"></i>
				<i class="fas fa-ellipsis-v"></i>
			</div>
		</div>
		<div class="p-4">
			<div class="bg-white px-4 py-2 rounded-full flex items-center">
				<i class="fas fa-search text-whatsapp-dark-gray mr-2"></i>
				<input placeholder="Search or start new chat" class="flex-1 focus:outline-none">
			</div>
		</div>
		<div class="flex items-center p-4 bg-white hover:bg-whatsapp-gray">
			<img src="/images/avatar1.jpg" alt="Avatar" class="w-12 rounded-full mr-4">
			<div>
				<h3 class="font-bold">Game</h3>
				<p class="text-sm text-gray-500">Last message</p>
			</div>
		</div>
		<div class="flex items-center p-4 bg-white hover:bg-whatsapp-gray">
			<img src="/images/avatar2.jpg" alt="Avatar" class="w-12 rounded-full mr-4">
			<div>
				<h3 class="font-bold">Music</h3>
				<p class="text-sm text-gray-500">Last message</p>
			</div>
		</div>
		<div class="flex items-center p-4 bg-white hover:bg-whatsapp-gray">
			<img src="/images/avatar3.jpg" alt="Avatar" class="w-12 rounded-full mr-4">
			<div>
				<h3 class="font-bold">Food</h3>
				<p class="text-sm text-gray-500">Last message</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { auth } from "../firebase"
	
	export default {
		methods: {
			logout() {
				auth.signOut()
			}
		}
	}
</script>