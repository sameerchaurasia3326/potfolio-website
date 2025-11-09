import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aanchal Chaurasia Portfolio',
    short_name: 'AC Portfolio',
    description: 'Professional portfolio of Aanchal Chaurasia - Graphic Designer & AI Content Creator',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8b5cf6',
  }
}

