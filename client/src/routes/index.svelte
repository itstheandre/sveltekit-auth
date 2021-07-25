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

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
