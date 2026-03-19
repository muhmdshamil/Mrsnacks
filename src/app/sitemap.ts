import { MetadataRoute } from 'next'
import { staticProducts } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mrsnackz.com'
  
  const productUrls = staticProducts.map((product) => ({
    url: `${baseUrl}/products/${product._uid}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...productUrls,
  ]
}
