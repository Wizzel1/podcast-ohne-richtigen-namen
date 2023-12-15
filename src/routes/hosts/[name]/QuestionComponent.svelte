<script lang="ts">
	import { graphql } from '$houdini';

	export let question: {
		_id: string | null;
		question: string | null;
	};

	//@ts-ignore
	export const _QuestionComponentQueryVariables = ({ props }) => {
		return { id: props.question._id };
	};

	const store = graphql(`
		query QuestionComponentQuery($id: ID!) @load {
			allEpisode(where: { _: { references: $id } }) {
				title
				number
			}
		}
	`);

	$: episode = $store.data?.allEpisode[0] ?? null;
</script>

{#if episode}
	<a class="border rounded text-center hover:bg-slate-800 p-5" href="/episodes/{episode.number}">
		<p>
			#{episode.number}
		</p>
		<p>
			{question.question}
		</p>
	</a>
{/if}
