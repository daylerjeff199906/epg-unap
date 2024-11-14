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
          Saas UI is a React component library that doesn't get in your way and
          helps you build intuitive SaaS products with speed.
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
      <Image
        src="/images/wallpaper-banner.webp"
        alt="epg-unap"
        layout="fill"
        objectFit="cover"
        width={1920}
        height={720}
      />

      {/* <div className="flex-1 p-8 lg:p-16">
        <Card className="bg-gray-900/50 text-white h-full overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full" />
              <span>Saas UI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Contacts</h2>
              <Button
                variant="outline"
                size="sm"
              >
                <Users className="mr-2 h-4 w-4" />
                Invite people
              </Button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Email</th>
                  <th className="pb-2">Created at</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Margaret Abe',
                    email: 'margaret_abe40@gmail.com',
                    date: 'Nov 10, 2021',
                  },
                  {
                    name: 'Isa Ozturk',
                    email: 'isa_ozturk@site-internet.info',
                    date: 'Jan 28, 2021',
                  },
                  {
                    name: 'Yu Amerson',
                    email: 'yu-amerson@global.info',
                    date: 'Feb 3, 2022',
                  },
                ].map((contact, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-800"
                  >
                    <td className="py-2">{contact.name}</td>
                    <td className="py-2 text-gray-400">{contact.email}</td>
                    <td className="py-2 text-gray-400">{contact.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div> */}
    </div>
  )
}
