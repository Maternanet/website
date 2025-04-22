<script>
    let categories = [
        {
            id: 1,
            name: "First Trimester",
            description: "Share experiences from your first trimester.",
        },
        {
            id: 2,
            name: "Nutrition",
            description: "Healthy eating tips for pregnancy.",
        },
        {
            id: 3,
            name: "Birth Stories",
            description: "Read and share birthing experiences.",
        },
    ];
</script>

<h1>Pregnancy Forum</h1>
{#each categories as cat}
    <a href={`/forum/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}>
        <div class="p-4 border rounded-xl my-2 hover:bg-pink-50">
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
        </div>
    </a>
{/each}