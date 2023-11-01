import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className='flex items-center gap-4 text-base bg-green-600 text-white p-7'>
			<Link href='/'>Home</Link>
			<Link href='/blog'>Blog</Link>
			<Link href='/about'>About</Link>
		</header>
	)
}

export { Header }