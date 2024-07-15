import LoadingCountainer from '@/components/global/LoadingCountainer'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import { Suspense } from 'react'
export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingCountainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  )
}
