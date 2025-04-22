<script>
    export let params;
    let threadId = params.id;

    //mock thread data
    let thread = {
        id: threadId,
        title: "How do you handle fatigue?",
        author: "Ada",
        content:
            "I’ve been feeling super tired lately, even after sleeping well. Any tips?",
        createdAt: "3 days ago",
    };

    //mock comments
    let comments = [
        {
            id: 1,
            author: "Tola",
            content: "Try light walks in the morning!",
            createdAt: "2 days ago",
        },
        {
            id: 2,
            author: "Zainab",
            content: "Fruit smoothies helped me feel more energetic.",
            createdAt: "1 day ago",
        },
    ];

    let newComment = "";

    function addComment() {
        if (newComment.trim()) {
            comments = [
                ...comments,
                {
                    id: comments.length + 1,
                    author: "You", // Placeholder
                    content: newComment,
                    createdAt: "Just now",
                },
            ];
            newComment = "";
        }
    }
</script>

<h2 class="text-xl font-bold mb-1">{thread.title}</h2>
<p class="text-sm text-gray-600 mb-4">
    Posted by <strong>{thread.author}</strong> · {thread.createdAt}
</p>
<p class="mb-6">{thread.content}</p>

<hr class="mb-6" />

<h3 class="text-lg font-semibold mb-2">Replies</h3>

{#if comments.length > 0}
    <ul class="mb-4">
        {#each comments as c}
            <li class="mb-3 border-b pb-2">
                <p><strong>{c.author}</strong>: {c.content}</p>
                <small class="text-gray-500">{c.createdAt}</small>
            </li>
        {/each}
    </ul>
{:else}
    <p>No replies yet. Be the first!</p>
{/if}

<!-- Add comment form -->
<div class="mt-6">
    <textarea
        bind:value={newComment}
        class="w-full border rounded-lg p-2"
        rows="3"
        placeholder="Write a reply..."
    ></textarea>
    <button
        on:click={addComment}
        class="mt-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
    >
        Reply
    </button>
</div>

<a href="/forum" class="block mt-8 text-pink-600 hover:underline"
    >← Back to Forum</a
>