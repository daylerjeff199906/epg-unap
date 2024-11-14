import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-teal-900 text-white">
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-16">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Build beautiful software faster
        </h1>
        <p className="text-xl lg:text-2xl mb-8 text-gray-300">
          Saas UI is a React component library that
          {`doesn't`}
          get in your way and helps you build intuitive SaaS products with
          speed.
        </p>
        <div className="flex items-center space-x-4 mb-8">
          <Image
            src="/placeholder.svg"
            alt="NEXT."
            width={80}
            height={24}
            className="h-6"
          />
          <Image
            src="/placeholder.svg"
            alt="chakra"
            width={80}
            height={24}
            className="h-6"
          />
        </div>
        <div className="flex space-x-4">
          <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900"
          >
            View demo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <section className="flex-1 p-8 lg:p-16">
        <Image
          src="/images/wallpaper-banner.webp"
          alt="epg-unap"
          objectFit="cover"
          width={1200}
          height={762}
        />
      </section>
    </div>
  )
}
