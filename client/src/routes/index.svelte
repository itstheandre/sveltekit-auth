<script context="module" lang="ts">
	import axios from 'axios';
	import type { Load } from '@sveltejs/kit';
	import { browser } from '$app/env';

	export const load: Load = async () => {
		console.log('browser:', browser);
		const { data } = await axios.get('http://localhost:5000', { withCredentials: true });
		console.log('data:', data);
		return {
			props: {
				data
			}
		};
	};
	export const prerender = true;
</script>

<script lang="ts">
	let username = '';
	async function handleSubmit(
		e: Event & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		const { data: users } = await axios.post(
			'http://localhost:5000/api',
			{
				username
			},
			{
				withCredentials: true
			}
		);
		console.log('users:', users);
	}
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={username} />
	<button>SUBMIT</button>
</form>
