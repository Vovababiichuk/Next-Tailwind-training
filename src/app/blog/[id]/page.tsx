import { Metadata } from "next"

type Props = {
	params: {
		id: string;
	}
}

export async function generateMetadata({ params: { id }}: Props): Promise<Metadata> {
	return {
		title: id,
	}
}

export default function Post({ params: { id }}: Props) {
	return (
		<div className="container">
			<h1 className="text-3xl font-bold text-blue-600 p-10">Post item { id }</h1>
		</div>
	)
}















