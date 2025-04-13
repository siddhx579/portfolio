"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const blogDetails = {
    "01": {
        title: "Mastering the Next.js App Router: A New Era of Routing",
        content: `## What's New?

- **Layouts**: You can now define persistent layouts that wrap around your pages using \`layout.js\`.
- **Nested Routes**: Organize your app into deeply nested folders representing routes.
- **Server Components**: Load data directly in your component.

## Why it Matters

This new system brings better structure, less boilerplate, and more power to your app architecture. The App Router introduces a more modular approach to routing, allowing you to organize your app into components that each handle specific routes or sections of your site. This improves maintainability and scalability as your app grows, as you no longer need to manage complex routing logic with traditional Next.js routing.

### Layouts

Layouts now allow you to easily share common UI elements across pages, such as headers, footers, and navigation menus. By defining a layout in \`layout.js\`, you can ensure that these elements persist across different routes, avoiding unnecessary re-renders and enhancing performance.

Here's how to create a layout for your pages:

\`\`\`jsx
// app/layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
\`\`\`

### Nested Routes

The App Router allows you to easily define nested routes in your application. You can create folders within the \`app\` directory to represent sub-routes. Each sub-route will automatically inherit the layout of its parent route, making it simple to structure complex apps with nested views.

For example:

\`\`\`jsx
// app/dashboard/page.js
export default function DashboardPage() {
  return <div>Welcome to the Dashboard!</div>;
}

// app/dashboard/settings/page.js
export default function SettingsPage() {
  return <div>Settings Page</div>;
}
\`\`\`

### Server Components

Server Components enable you to load data on the server directly within your component, before rendering it to the client. This helps reduce the amount of JavaScript that needs to be sent to the client, making your app faster and more efficient.

Here's a simple example of using a Server Component to load data:

\`\`\`jsx
// app/dashboard/page.js
import { fetchData } from '../../lib/data';

export default async function DashboardPage() {
  const data = await fetchData();
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Advantages Over the Traditional Pages Directory

With the new App Router, you get better separation of concerns and can easily scale your app by organizing it into separate components and layouts. Unlike the Pages Router, where all routes and layouts are tightly coupled, the App Router lets you decouple them for better flexibility and control.

### Improved Data Fetching

App Router makes data fetching even easier by allowing you to fetch data directly inside components. You can use React Server Components, which let you run code on the server and send only the data required to the client, reducing the bundle size.

\`\`\`jsx
// app/dashboard/page.js
import { getUserData } from '../../lib/api';

export default async function Dashboard() {
  const userData = await getUserData();
  return (
    <div>
      <h1>Welcome {userData.name}</h1>
    </div>
  );
}
\`\`\`

### Optimizing Performance

The App Router also brings improved performance by utilizing React Suspense. It allows you to load data and code on demand, making the page loading experience smoother for users. For instance, you can lazily load the sidebar or heavy components that don't need to be shown right away.

## Wrap-up

The App Router is a game changer for developers working with Next.js. By adopting layouts, nested routes, and server components, you can create more efficient, scalable, and organized web applications. Whether you're building a small site or a large-scale app, the App Router helps you keep things clean and manageable while also enhancing performance.`,
    },
    "02": {
        title: "How to Supercharge Your Web App with AI APIs",
        content: `Bringing AI to your frontend or full-stack app is easier than ever with APIs from OpenAI, Gemini, Cohere, and others. These powerful APIs provide advanced machine learning capabilities without the need for in-depth ML knowledge, making it easier than ever to enhance your app's features.

## Why Use AI APIs?

- Add smart features like summarization, translation, or chat.
- Offload complex ML tasks to managed models.
- Easy REST/GraphQL endpoints — no ML experience needed.
- Scale your application easily by integrating AI functionality without worrying about server infrastructure or model training.
- Quick iterations and fast testing of new AI models.

AI APIs make it easier to develop intelligent applications and integrate advanced machine learning tasks, enabling features like personalized content, intelligent search, recommendation engines, and much more.

## Example Use Case

Let's say you want to summarize long articles:

\`\`\`js
const response = await fetch("/api/summarize", {
  method: "POST",
  body: JSON.stringify({ text: article }),
});
\`\`\`

This calls OpenAI or Gemini behind the scenes and returns the summary. By offloading the task to an external AI service, you save processing time and improve the efficiency of your application.

## Advanced Use Case

AI APIs can also be used for advanced tasks, such as generating personalized recommendations or handling more complex natural language processing (NLP) tasks like sentiment analysis, text classification, or chatbots.

Here's an example of using an AI API for sentiment analysis:

\`\`\`js
const response = await fetch("/api/sentiment-analysis", {
  method: "POST",
  body: JSON.stringify({ text: userReview }),
});

const sentiment = await response.json();
if (sentiment.score > 0.5) {
  console.log("Positive sentiment detected");
} else {
  console.log("Negative sentiment detected");
}
\`\`\`

In this case, the API analyzes the sentiment of a user review, providing insight into how your customers feel about your product or service.

## Best Practices

- **Use RAG (retrieval augmented generation)**: For accurate, contextually relevant content, you can leverage a technique called Retrieval-Augmented Generation (RAG), which combines external information retrieval with generative models.
- **Cache Results**: Caching API responses can help reduce latency and lower your API costs. It's especially useful for tasks like summarization or translation where the same data might be requested multiple times.
- **Show Fallback/Error UI**: Always handle failures gracefully by providing a fallback UI or error message when the API call fails. Users should know when there’s a problem, and it improves the overall user experience.

For example, you can display a loading spinner while waiting for the response and a fallback error message if the request fails.

## Ethical Considerations

While AI APIs can greatly enhance user experience, it's important to consider the ethical implications of AI usage. Always ensure that the data being processed is handled securely, and be transparent with users about how their data is being used.

- Ensure compliance with privacy laws like GDPR when handling user data.
- Be mindful of biases in AI models and try to select models that have been trained on diverse datasets to minimize bias.

## Wrap-up

AI APIs unlock serious potential for developers. Start small with basic features like text summarization or sentiment analysis, then scale your application by adding more advanced AI tasks as your app grows. As machine learning models become more accessible, the opportunities for creating intelligent, personalized applications are endless. Whether you're building a chatbot, a recommendation engine, or an intelligent search feature, AI APIs offer the flexibility and power you need to enhance your app with cutting-edge technology.`,
    },
    "03": {
        title: "Server Actions in Next.js 14: The Game Changer You Need to Know",
        content: `Next.js 14 introduces **Server Actions**, simplifying how you write server-side logic in React. Server Actions eliminate the need for separate API routes and enable a more seamless developer experience when working with server-side operations.

## What Are Server Actions?

- Server Actions allow you to call server-side functions directly from your UI components, making server-side logic easier to manage.
- No need for a separate API route or special HTTP request handling. With Server Actions, the function you need is directly available in your component.
- They integrate seamlessly into your React components and are automatically bundled by Next.js, which reduces the overhead of creating multiple API routes.

With this feature, you can simplify your codebase, improve maintainability, and focus on building the core functionality of your app without managing unnecessary complexities.

## Example

Here’s a basic example of how Server Actions work:

\`\`\`js
"use server";

export async function saveData(formData) {
  // Logic to save data to your database
  console.log("Data saved:", formData);
}
\`\`\`

In the above example, we create a server-side function \`saveData\`. It is marked with the \`use server\` directive to ensure that Next.js knows it is a server-side action.

You can now use this function directly within your UI components, like this:

\`\`\`jsx
<form action={saveData}>
  <input name="email" />
  <button type="submit">Save</button>
</form>
\`\`\`

In this example, when the form is submitted, the \`saveData\` function is called, which saves the form data without needing a separate API endpoint.

## Benefits

- **Cleaner Code**: Server Actions eliminate the need for separate API routes and HTTP requests. You can directly call server-side functions from your UI, making your code more concise and easier to understand.
- **Automatic Bundling**: Server-side functions are automatically bundled, so you don't have to worry about handling them separately or optimizing them for the client.
- **Built-in Security**: By being integrated into Next.js's server-side logic, Server Actions provide secure access to server-side resources, reducing the risk of accidental data exposure or security vulnerabilities.
- **Seamless Integration with React**: Server Actions are directly integrated into React's lifecycle, allowing developers to write code in a more natural and familiar manner.

## Advanced Example: Handling Authentication

You can also use Server Actions for tasks like authentication. Here's an example of how Server Actions might be used to handle login:

\`\`\`js
"use server";

export async function authenticateUser(credentials) {
  const user = await db.users.findOne({ email: credentials.email });
  if (user && user.password === credentials.password) {
    // Logic for handling successful login
    console.log("User authenticated successfully");
  } else {
    // Logic for handling failed login
    console.log("Invalid credentials");
  }
}
\`\`\`

In this case, we've added a \`authenticateUser\` function to handle user login. The function can be used directly inside a React component just like the \`saveData\` function in the previous example.

## Best Practices for Server Actions

- **Avoid Blocking the UI**: Server Actions can block the UI until the server-side logic is completed. Always ensure that heavy computations or long-running operations are handled asynchronously to prevent UI freezing.
- **Error Handling**: Like any server-side operation, you should always have robust error handling. Use \`try-catch\` blocks within your Server Actions to handle unexpected errors gracefully.
- **Leverage Server-Side Caching**: For operations that require frequent data fetching or processing, consider caching the results on the server to reduce load and improve performance.

## Wrap-up

Server Actions in Next.js 14 provide a powerful and efficient way to handle server-side logic directly in your React components. They eliminate the need for API routes, making the development process faster and simpler. By integrating server-side logic directly with React, Next.js helps reduce boilerplate and improves the scalability of your applications. Whether you are handling form submissions, managing authentication, or processing data on the server, Server Actions streamline server-side communication, enhancing your development experience.

Start using Server Actions today and experience faster, cleaner code with fewer API route headaches.`,
    },
    "04": {
        title: "From Prompt to Product: How I Built an AI Content Generator App",
        content: `This is the story of building an AI content generator using **Next.js**, **Clerk**, **Tailwind CSS**, and **OpenAI**. The goal of this project was to provide an easy-to-use platform that generates high-quality content based on user input, enabling users to automate content creation tasks and enhance their productivity.

## The Stack

- **Next.js App Router**: A flexible routing solution that streamlines app architecture.
- **Tailwind for styling**: A utility-first CSS framework to quickly build responsive, beautiful designs.
- **Clerk for auth**: Easy authentication and user management for secure access.
- **OpenAI API for content**: Powering the AI with OpenAI's GPT-3 to generate meaningful content.

## Features

- **Generate blog outlines from prompts**: With a simple input, users can generate detailed outlines for blog posts or articles.
- **Authenticate users**: Clerk handles user authentication, making it easy to manage users and their sessions.
- **Save content to the database**: Content generated by the AI can be stored and retrieved later for future use or editing.
- **User-friendly interface**: The platform was designed with a clean and intuitive interface using Tailwind CSS.

## The Problem

Creating quality content for blogs or articles can be time-consuming. Writers and content creators often struggle with writer's block or lack the time to create in-depth outlines and drafts. This tool is designed to tackle that issue by generating relevant and engaging content based on user prompts.

## Prompt to Product

Here's how the process works: after the user inputs a prompt, the AI generates relevant content that is returned through the API.

\`\`\`js
const res = await fetch("/api/generate", {
  method: "POST",
  body: JSON.stringify({ prompt: "How to learn React" }),
});
\`\`\`

The \`generate\` endpoint in the API processes the request, sends it to OpenAI, and returns the generated content. This allows users to get content on demand, ready to be used for blog posts, tutorials, or any other type of written material.

## Handling Errors

As with any API, it's crucial to ensure that errors are handled gracefully. If the AI fails to generate content or if there are any issues with the API request, the platform provides clear error messages and suggestions for retrying.

\`\`\`js
if (!res.ok) {
  throw new Error("Failed to generate content. Please try again.");
}
\`\`\`

This ensures a seamless user experience and lets users know if there's an issue without causing frustration.

## Deployment

Deployed on **Vercel**, the app uses **edge functions** to ensure ultra-fast response times and optimal performance. Vercel's integration with Next.js ensures that the app is scalable and can handle large amounts of traffic without compromising on speed or efficiency.

## Performance Optimization

By leveraging edge functions and server-side rendering (SSR), the content generation process is both fast and reliable. This ensures that the AI-generated content is available to users in real-time, even under heavy load conditions.

## Conclusion

It was a fun challenge and now I have a usable tool powered by AI. This AI content generator helps to streamline content creation and can be a valuable asset for bloggers, marketers, or anyone looking to automate content production. Can't wait to ship the next feature, and I look forward to enhancing the tool with new capabilities like integrating more AI models or enabling advanced user customization!

With the current stack, the possibilities are endless. As AI continues to improve, I'm excited to see how this tool can evolve and better serve users in creating meaningful and creative content.`,
    },
};

const BlogPost = () => {
    const { template_id } = useParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        if (template_id) {
            setBlogData(blogDetails[template_id]);
        }
    }, [template_id]);

    if (!blogData) return <div className="text-white p-6">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto text-white p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-accent">{blogData.title}</h1>
            <hr />
            <br />
            <div className="prose prose-invert prose-pre:bg-white/10 prose-pre:text-white prose-code:text-white prose-li:marker:text-white/60 max-w-none text-justify">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {blogData.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogPost;