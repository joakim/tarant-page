import React from 'react';
import styles from './styles.module.css';

export default function HomepageTryIt(): JSX.Element {
  return (
    <section className={styles.features}>
        <iframe className={styles.codepen} title="tarant quick-start example" src="https://codepen.io/kmruiz/embed/xmLOqy?default-tab=js%2Cresult&editable=true" loading="lazy" />
    </section>
  );
}
