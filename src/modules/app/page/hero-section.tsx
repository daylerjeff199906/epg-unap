import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-teal-900 text-white relative">
      <main className="container flex-1 flex flex-col lg:flex-row sm:gap-12">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 w-full max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-appearance-in">
            The CMS of the Education Institution
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 animate-appearance-in">
            The best way to manage your institution, with the best tools and
            technologies.
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/brands/next-js.svg"
                alt="NEXT."
                width={32}
                height={24}
              />
              <h2 className="font-bold">Next.js</h2>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/brands/shadcn.png"
                alt="chakra"
                width={32}
                height={24}
                className='rounded-full'
              />
              <h2 className="font-bold">Shadcn</h2>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Sign Up
            </Button>
            <Button
              variant="ghost"
              className="text-white border-white hover:bg-white/10 hover:text-white border"
              asChild
            >
              <Link
                href="/admin"
                target="_blank"
              >
                View demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[520px] min-w-[520px]"></div>
        <section className="hidden sm:flex w-[42%] rounded-lg  absolute  bottom-0 top-0 right-0 overflow-hidden object-cover items-center justify-center">
          <Image
            src="/images/wallpaper-banner.webp"
            alt="epg-unap"
            objectFit="cover"
            width={1900}
            height={920}
            className="h-full object-cover max-h-[60vh] object-left border rounded-md animate-appearance-in"
          />
        </section>
      </main>
    </div>
  )
}
