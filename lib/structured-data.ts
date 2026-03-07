import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/Zelesen',
    },
    publisher: {
      '@type': 'Person',
      name: 'MафияCODE',
      url: 'https://Mафияdev.ir',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MафияCODE',
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Ehsan Ghaffar.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'MафияCODE',
      url: 'https://github.com/Zelesen',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'MафияCODE',
    url: 'https://Mафияdev.ir',
    image: 'https://Mафияdev.ir/developer-portrait.png',
    sameAs: [
      'https://github.com/',
      'https://twitter.com/',
      'https://linkedin.com/in/',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'MафияCODE',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
