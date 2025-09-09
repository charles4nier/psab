import styles from "../page.module.css";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <>
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Mentions légales</h1>

      <h2>Association</h2>
      <p>
        Association <strong>Pas de smartphone avant le bac !</strong><br/>
        Association loi 1901 déclarée à Aurillac<br/>
        Siège social : 2 chemin de Patay, 15000 Aurillac<br/>
        RNA : [numéro RNA]<br/>
        Directeur de la publication : Charles Fournier<br/>
        Contact : <a href="mailto:contact@psab.org">contact@psab.org</a>
      </p>

      <h2>Hébergement</h2>
      <p>
        Site hébergé par Vercel Inc.<br/>
        440 N Barranca Ave #4133, Covina, CA 91723, United States<br/>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          https://vercel.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les contenus de ce site (textes, images, illustrations) sont la propriété de 
        l’association <strong>Loin des Notifs</strong>, sauf mention contraire. Toute reproduction 
        est interdite sans autorisation.
      </p>

      <h2>Responsabilité</h2>
      <p>
        L’association ne saurait être tenue responsable des informations publiées 
        sur des sites externes accessibles par liens hypertextes.
      </p>

      <h2>Données personnelles (RGPD)</h2>
      <p>
        Les données éventuellement collectées via ce site sont utilisées uniquement 
        dans le cadre des activités de l’association. Conformément au RGPD, vous pouvez 
        demander la rectification ou la suppression de vos données en écrivant à : 
        <a href="mailto:contact@psab-asso.org">contact</a>.
      </p>
    </main>
    <footer className={styles.footer}>
  <div className={styles.footerContent}>
    <p><strong>Pas de smartphone avant le bac !</strong> — Ensemble, protégeons nos enfants</p>

    <p className={styles.mentions}>
      © 2025 Pas de smartphone avant le bac ! — Aurillac | <Link href="/">Accueil</Link>
    </p>
  </div>

    <p>
      <a href="mailto:contact@psab-asso.org">Contact</a>
    </p>
</footer>
</>
  );
}
