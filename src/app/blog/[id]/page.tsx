import { Metadata } from "next"
import { Fragment } from "react";

async function getData(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	return res.json();
}

type Props = {
	params: {
		id: string;
	}
}

export async function generateMetadata({ params: { id }}: Props): Promise<Metadata> {
	const post = await getData(id)

	return {
		title: post.title,
	}
}

export default async function Post({ params: { id }}: Props) {
	const post = await getData(id)

	return (
		<div className="container">
			<>
				<h1 className="text-3xl font-bold text-blue-600 p-10">{post.title}</h1>
				<p>{post.body}</p>
			</>
		</div>
	)
}















