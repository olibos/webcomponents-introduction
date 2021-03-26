<script lang="ts">
import { onMount } from "svelte";
import { get_current_component } from "svelte/internal";


    export let count = 0;

    export function increment()
    {
        count++;
    }

    export function decrement()
    {
        count--;
    }

    const host = get_current_component();
    $:host.dispatchEvent(new CustomEvent("counterChanged", {bubbles:true, detail:count}));
</script>

<style lang="scss">
    :host
    {
        color:blue;
    }

    :host([disabled])
    {
        color: grey;
    }

    button
    {
        color:green;
    }
</style>

<svelte:options tag="wvn-counter" />
    <button part="decrement" on:click={decrement}>-</button>
    <span part="count">{count}</span>
    <button part="increment"  on:click={increment}>+</button>