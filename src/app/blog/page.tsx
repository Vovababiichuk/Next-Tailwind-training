import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "My Blog",
};

export default function Blog() {
	return (
		<div className="container">
			<h1 className="text-3xl font-bold text-blue-600 p-10">Blog Page</h1>
		</div>
	)
}