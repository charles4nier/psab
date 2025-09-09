import styles from './mentions.module.css';

export default function MentionsLegales() {
	return (
		<>
			<h2 className={styles.title}>Mentions légales</h2>

			<section className={styles.section}>
				<h3>Éditeur du site</h3>
				<p>
					Association{' '}
					<strong>Pas de Smartphone Avant le Bac !</strong> (PSAB)
					<br />
					Siège social : Aurillac, France
					<br />
					Email :{' '}
					<a href="mailto:contact@psab-asso.org">
						contact@psab-asso.org
					</a>
				</p>
			</section>

			<section className={styles.section}>
				<h3>Responsable de publication</h3>
				<p>
					Président de l’association :{' '}
					<strong>Charles Fournier</strong>
				</p>
			</section>

			<section className={styles.section}>
				<h3>Hébergement</h3>
				<p>
					Ce site est hébergé par <strong>Vercel Inc.</strong>
					<br />
					340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
					<br />
					<a
						href="https://vercel.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						vercel.com
					</a>
				</p>
			</section>

			<section className={styles.section}>
				<h3>Données personnelles</h3>
				<p>
					Les informations collectées via le formulaire de contact
					sont utilisées uniquement pour répondre à vos demandes.
					Aucune donnée n’est cédée à des tiers. Conformément au RGPD,
					vous pouvez exercer vos droits d’accès, de rectification ou
					de suppression en nous contactant à l’adresse suivante :{' '}
					<a href="mailto:contact@psab-asso.org">
						contact@psab-asso.org
					</a>
					.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Propriété intellectuelle</h3>
				<p>
					Le contenu de ce site (textes, images, illustrations) est la
					propriété exclusive de l’association PSAB. Toute
					reproduction, même partielle, doit faire l’objet d’une
					autorisation préalable.
				</p>
			</section>
		</>
	);
}
