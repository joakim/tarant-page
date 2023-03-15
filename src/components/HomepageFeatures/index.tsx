import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/undraw_simple.svg').default,
    description: (
      <>
        Use the tools that you already know to implement your application. It's only based on standard features of ES6 like classes and Promises.
      </>
    ),
  },
  {
    title: 'Performant',
    Svg: require('@site/static/img/undraw_fast.svg').default,
    description: (
      <>
        Actors are async and non-blocking by default. Write fast code that can handle thousands of messages in parallel without harming other actors.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/img/undraw_extensible.svg').default,
    description: (
      <>
        Designed to be easy to extend and adapt, implement your own materializers to add persistence or rendering to your actors.
      </>
    ),
  },
  {
    title: 'Type-safe',
    Svg: require('@site/static/img/undraw_typesafe.svg').default,
    description: (
      <>
        Implemented in TypeScript, gives you the ability to write safe and easy to understand code. Your editor will give you realistic and useful suggestions easily thanks to TypeScript typings.
      </>
    ),
  },
  {
    title: 'Runs everywhere',
    Svg: require('@site/static/img/undraw_everywhere.svg').default,
    description: (
      <>
        Because it uses only standard ES6 features, you can run it in the frontend and backend easily.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/undraw_light.svg').default,
    description: (
      <>
        A ready-to-run library that is 10KB minified
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
