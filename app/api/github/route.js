export async function GET() {
    const username = "siddhx579";
    const token = process.env.GITHUB_TOKEN;

    const currentYear = new Date().getFullYear();
    const startYear = 2019; // change to your GitHub join year

    let total = 0;

    for (let year = startYear; year <= currentYear; year++) {
        const from = `${year}-01-01T00:00:00Z`;
        const to = `${year}-12-31T23:59:59Z`;

        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                    query ($from: DateTime!, $to: DateTime!) {
                        user(login: "${username}") {
                        contributionsCollection(from: $from, to: $to) {
                            contributionCalendar {
                            totalContributions
                            }
                        }
                        }
                    }
                `,
                variables: { from, to },
            }),
        });

        const json = await res.json();

        const yearly =
            json?.data?.user?.contributionsCollection?.contributionCalendar
                ?.totalContributions || 0;

        total += yearly;
    }

    // 🔁 SAME RESPONSE SHAPE AS YOUR ORIGINAL CODE
    return new Response(JSON.stringify({ total }), { status: 200 });
}
