import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.logo}>
					Pas de smartphone avant le bac !
				</h1>
				<nav className={styles.nav}>
					<Link href="/">Accueil</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/mentions-legales">Mentions légales</Link>
				</nav>
			</div>
		</header>
	);
}
