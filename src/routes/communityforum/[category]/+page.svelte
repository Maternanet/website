<script>
    export let params;
    let category = params.category;

    let threads = [
        {
            id: 1,
            title: "When did you feel your first kick?",
            author: "Tola",
            createdAt: "2 days ago",
        },
        {
            id: 2,
            title: "How do you handle fatigue?",
            author: "Ada",
            createdAt: "3 days ago",
        },
    ];
</script>

<h1>{category.replace("-", " ")} Discussions</h1>

{#each threads as thread}
    <a href={`/forum/thread/${thread.id}`}>
        <div class="border p-3 rounded-xl my-2 hover:bg-gray-50">
            <h3>{thread.title}</h3>
            <p>By {thread.author} · {thread.createdAt}</p>
        </div>
    </a>
{/each}

<a href="/forum" class="text-pink-600 mt-4 block">← Back to categories</a>