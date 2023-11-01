import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="bg-green-600 p-6">
      <div className={styles.container}>
        <div className="flex items-center gap-4 bg-green-600 text-white">
					<Link href="/">Home</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/about">About</Link>
				</div>
      </div>
    </header>
  );
};

export { Header };
