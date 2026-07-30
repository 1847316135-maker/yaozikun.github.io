import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <title>Ziqun Yao — Biomedical Engineering Student & Researcher</title>
      <meta
        name="description"
        content="Ziqun Yao is an undergraduate student in Biomedical Engineering at Shenzhen University, researching AI-driven approaches for biological and medical problems."
      />
      <meta
        name="keywords"
        content="Ziqun Yao, Biomedical Engineering, Bioinformatics, AI, Machine Learning, Computational Biology, Shenzhen University"
      />
      <meta name="author" content="Ziqun Yao" />

      {/* Open Graph */}
      <meta property="og:title" content="Ziqun Yao — Biomedical Engineering Student & Researcher" />
      <meta
        property="og:description"
        content="Undergraduate researcher in Biomedical Engineering at Shenzhen University. AI for biology, bioinformatics, and computational biology."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yaozikun.top" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ziqun Yao',
          givenName: 'Ziqun',
          familyName: 'Yao',
          url: 'https://yaozikun.top',
          email: 'ziqun.yao@yaozikun.top',
          affiliation: {
            '@type': 'EducationalOrganization',
            name: 'Shenzhen University',
          },
          knowsAbout: [
            'Biomedical Engineering',
            'Bioinformatics',
            'Artificial Intelligence',
            'Computational Biology',
            'Machine Learning',
          ],
        })}
      </script>
    </Helmet>
  );
}
