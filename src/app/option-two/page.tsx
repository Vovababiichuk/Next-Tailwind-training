import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Option",
  description: "Option us",
};


export default function OptionTwo() {
	return (
		<div className="container">
			<h3 className="text-3xl font-bold text-blue-600 p-10">Option-Two Page</h3>
		</div>
	)
}