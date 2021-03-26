import Counter from './Counter.svelte';

const app = new Counter({
	target: document.body,
	props: {
		count: 5
	}
});

export default app;