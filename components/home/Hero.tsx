import React from 'react'
import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="grid grid-colos-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Discover Your Perfect Couch
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Transform your living space with our stylish and comfortable couches.
          From modern designs to classic styles, find the perfect fit for your
          home.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
