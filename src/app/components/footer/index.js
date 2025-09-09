import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.copyright}>
					© {new Date().getFullYear()} Pas de smartphone avant le bac
					! — Aurillac
				</p>
				<nav className={styles.nav}>
					<Link href="/">Accueil</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/mentions-legales">Mentions légales</Link>
				</nav>
			</div>
		</footer>
	);
}
