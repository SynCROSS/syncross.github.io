import Head from 'next/head';
import Script from 'next/script';
import type { FC } from 'react';

type SeoProps = {
  title?: string;
  siteTitle?: string;
  description?: string;

  /**
   * Must Start With '/'
   */
  canonicalHref?: string;
};

const SEO: FC<SeoProps> = function SEO({
  title = 'SynCROSS',
  siteTitle = '',
  description = "I'm MERN Stack Developer. Let's Work Together To Make Your Website Perfect.",
  canonicalHref = '/',
}) {
  return (
    <>
      <Head>
        <title>
          {title}
          {siteTitle !== '' && ' | '}
          {siteTitle}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="title" content={title} />
        <meta name="description" content={description} key="desc" />
        <meta name="author" content="SynCROSS" />
        <meta name="application-name" content={title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/icon.jpg" />
        <meta property="og:image:secure_url" content="/icon.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="721" />
        <meta property="og:image:height" content="721" />
        <meta property="og:image:alt" content="SynCROSS" />
        <meta property="og:url" content="https://syncross.vercel.app" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://syncross.vercel.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/icon.jpg" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          name="google-site-verification"
          content="yPjEuhxg0wZLY4uNjzQnetrY9IDRmyer0VTV3aDVJZo"
        />
        <meta name="theme-color" content="#333333" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="157x157"
          href="apple-touch-icon-157x157.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="apple-touch-icon-167x167.png"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="canonical"
          href={`https://syncross.vercel.app${canonicalHref}`}
          key="canonical"
        />
      </Head>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"http://schema.org/","type":"Person","jobTitle":"Frontend Developer","name":"SynCROSS","telephone":"+82-10-9874-2668","url":"https://syncross.vercel.app"}',
        }}
      />
    </>
  );
};

SEO.defaultProps = {
  title: 'SynCROSS',
  siteTitle: '',
  description:
    "I'm MERN Stack Developer. Let's Work Together To Make Your Website Perfect.",
  canonicalHref: '/',
};

export default SEO;
