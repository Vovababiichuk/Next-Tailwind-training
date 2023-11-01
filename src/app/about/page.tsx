import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About us",
};


export default function About() {
	return (
		<div className="container">
			<h3 className="text-3xl font-bold text-blue-600 p-10">Select subitem</h3>
		</div>
	)
}