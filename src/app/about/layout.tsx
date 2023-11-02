import Link from 'next/link';

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>
		<h1 className='text-2xl text-center'>About us</h1>
		<ul>
			<li className='my-2 text-orange-500 transition-opacity hover:opacity-60'>
				<Link href='/about/contacts'>Contacts</Link>
			</li>
			<li className='text-orange-500 transition-opacity hover:opacity-70'>
				<Link href='/about/team'>Team</Link>
			</li>
		</ul>
		{children}
	</div>;
}