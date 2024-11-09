<script lang="ts" module>
	interface VisibilityProviderProps {
		children: Snippet;
	}
	let _visibility = $state(isEnvBrowser() ? true : false);
	export let store = {
		set visibility(value: boolean) {
			_visibility = value;
		},
		get visibility() {
			return _visibility;
		},
	};
</script>

<script lang="ts">
	import { useNuiEvent } from "../utils/useNuiEvent";
	import { fetchNui } from "../utils/fetchNui";
	import { onMount, type Snippet } from "svelte";
	import { isEnvBrowser } from "../utils/misc";

	let { children }: VisibilityProviderProps = $props();
	onMount(() => {
		const keyHandler = (e: KeyboardEvent) => {
			if (store.visibility && ["Escape"].includes(e.code)) {
				fetchNui("hideUI");
				store.visibility = false;
			}
		};

		window.addEventListener("keydown", keyHandler);

		return () => window.removeEventListener("keydown", keyHandler);
	});
	useNuiEvent<boolean>("setVisible", (visible) => {
		store.visibility = visible;
	});
</script>

{#if _visibility}
	{@render children()}
{/if}
