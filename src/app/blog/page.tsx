import type { Metadata } from "next";
import Link from "next/link";
import { MdLocalPostOffice } from "react-icons/md";

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		// revalidate - це час промежуток запросів на сервер (60 - раз в минуту). Буде закешовано на той час який ми тут вкажемо.
		next: { revalidate: 60 },
	});
  return res.json();
}

export const metadata: Metadata = {
  title: "Blog",
  description: "My Blog",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-blue-600 p-10">Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <div className="flex items-center gap-2">
                <span>
									<MdLocalPostOffice />
								</span>
              	<span>{post.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
