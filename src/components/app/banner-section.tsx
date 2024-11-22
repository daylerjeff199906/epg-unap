import { ReactNode } from 'react'
import Image from 'next/image'

interface HeaderProps {
  title: string
  description?: string
  backgroundImage?: string
  rightContent?: ReactNode
}

export default function BannerSection({
  title,
  description,
  backgroundImage,
  rightContent,
}: HeaderProps) {
  return (
    <div className="relative bg-[#0A192F] py-16 md:py-20 overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      )}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
            {description && (
              <p className="text-gray-300 max-w-2xl">{description}</p>
            )}
          </div>
          {rightContent && (
            <div className="w-full md:w-auto">{rightContent}</div>
          )}
        </div>
      </div>
    </div>
  )
}
