export async function GET() {
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query {
                    user(login: "siddhx579") {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                            }
                        }
                    }
                }
            `,
        }),
    });

    const json = await res.json();

    const total = json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    return new Response(JSON.stringify({ total }), { status: 200 });
}