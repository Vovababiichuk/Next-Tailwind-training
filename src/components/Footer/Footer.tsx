import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className="p-6 bg-slate-800">
		<div className={styles.container}>
			<div className="text-gray-400">
					<span className="block text-center">Copyright &copy; 2023</span>
			</div>
		</div>
	</footer>
	)
}

export { Footer }