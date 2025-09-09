import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<h1 className={styles.title}>Pas de smartphone avant le bac !</h1>
			<p className={styles.description}>
				Protégeons nos enfants d’une exposition précoce aux smartphones.
				Ensemble, redonnons aux jeunes le goût du réel et des liens
				authentiques.
			</p>
			<Link className={styles.rejoindre} href="/contact">
				Rejoindre l’association
			</Link>
			<div className={styles.chiffre}>
				<h2> Les chiffres clés</h2>
				<ul>
					<li>
						<span className={styles.warning}>1 jeune sur 5</span>{' '}
						(18,7 % des 16–18 ans) déclare un usage problématique du
						smartphone. (King’s College London, 2024)
					</li>
					<li>
						<span className={styles.warning}>1 jeune sur 4</span>{' '}
						présente des signes d’addiction au smartphone.
						(ScienceDirect, 2023 – méta-analyse)
					</li>
					<li>
						<span className={styles.warning}>
							2 étudiants sur 3
						</span>{' '}
						rapportent une dépendance au smartphone, avec des
						troubles du sommeil dans la majorité des cas. (BMC
						Psychiatry, 2023)
					</li>
					<li>
						<span className={styles.warning}>77 %</span> des
						adolescents ressentent de l’anxiété lorsqu’ils sont
						séparés de leur téléphone (nomophobie). (Nomophobia
						research)
					</li>
					<li>
						<span className={styles.warning}>28 %</span> des
						adolescents subissent au moins deux formes de
						cyberharcèlement en ligne (insultes, rumeurs, menaces,
						partage non consenti d’images). Les filles de 15–17 ans
						sont les plus touchées : <span>54 %</span> en ont déjà
						été victimes. (Pew Research Center, 2022)
					</li>
					<li>
						<span className={styles.warning}>
							Jusqu’à 1 jeune sur 2
						</span>{' '}
						(10–52 % selon les pays) est concerné par le
						cyberharcèlement via smartphone. (EU Kids Online, 2009)
					</li>
				</ul>
			</div>
			<div className={styles.manifeste}>
				<h2>Notre manifeste</h2>
				<p>
					Retarder l’accès au smartphone, c’est offrir à nos enfants
					une enfance plus libre, plus réelle. Nous unissons les
					parents pour :
				</p>
				<ul>
					<li>
						Se soutenir mutuellement face à la pression sociale,
					</li>
					<li>
						Donner de la force au collectif pour refuser l’usage
						précoce du smartphone,
					</li>
					<li>
						Protéger nos enfants en préservant leurs liens, leur
						attention et leur bien-être.
					</li>
				</ul>
			</div>

			<div className={styles.objectif}>
				<h2>Notre objectif</h2>
				<p>
					Nous sommes une initiative locale, née à Aurillac. Notre
					démarche est simple : montrer aux familles qu’elles ne sont
					pas seules, et bâtir un réseau de parents solidaires.
				</p>
				<p>
					Nous ne demandons aucune cotisation. Notre force repose
					avant tout sur le
					<strong> bouche-à-oreille </strong> et le soutien entre
					parents.
				</p>
				<p className={styles.motivant}>
					✨ Ici à Aurillac, chaque parent compte. C’est simple, c’est
					gratuit, c’est local… alors, on y va ?
				</p>

				<Link className={styles.rejoindre} href="/contact">
					Rejoindre l’association
				</Link>
			</div>

			<div className={styles.ressources}>
				<h2>Ressources utiles</h2>
				<ul>
					<li>
						<a
							href="https://www.vie-publique.fr/rapport/293978-exposition-des-enfants-aux-ecrans-rapport-au-president-de-la-republique"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>
									Rapport « Enfants et écrans – À la recherche
									du temps perdu »
								</strong>
								<em> (France, 2024)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://www.kcl.ac.uk/news/teens-with-problematic-smartphone-use-are-twice-as-likely-to-have-anxiety-and-many-are-eager-to-cut-down"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>
									Usage problématique du smartphone
								</strong>
								<em> (King’s College London, 2024)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://pubmed.ncbi.nlm.nih.gov/39084660/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>
									Anxiété, dépression et insomnie chez 657
									adolescents
								</strong>
								<em> (Acta Paediatrica, 2024)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://www.pewresearch.org/internet/2022/12/15/teens-and-cyberbullying-2022/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>Teens and Cyberbullying</strong>
								<em> (Pew Research Center, 2022)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://en.wikipedia.org/wiki/Cyberbullying"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>
									Cyberharcèlement des jeunes en Europe
								</strong>
								<em> (EU Kids Online, 2009)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://www.researchgate.net/publication/276135230_Mobile_Technologies_and_the_Incidence_of_Cyberbullying_in_Seven_European_Countries_Findings_from_Net_Children_Go_Mobile"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>Cyberharcèlement via smartphone</strong>
								<em> (Net Children Go Mobile, 2014)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://www.e-enfance.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>Accompagnement et prévention</strong>
								<em> (Association e-Enfance)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://www.unicef.org/fr/rapports/enfants-dans-un-monde-numerique"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<strong>
									Les enfants dans un monde numérique
								</strong>
								<em> (UNICEF)</em>
							</span>
							<span className={styles.pastille}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									width="18"
									height="18"
								>
									<path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7z" />
									<path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14-4v4h-4v2h6v-6h-2z" />
								</svg>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
