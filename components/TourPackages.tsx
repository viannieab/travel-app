import { TOUR_PACKAGES } from '@/constants'
import Image from 'next/image'
import Button from './Button'
import WhatsApp from '@/components/WhatsApp'

const TourPackages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-feature-bg bg-center bg-no-repeat">
        <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900">Our Tour Packages</h1>
            <p className="mt-4 text-lg text-gray-700">
             Choose your adventure with our customizable tour packages designed to give you an unforgettable experience in East Africa.
            </p>
        </header>
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TOUR_PACKAGES.map((packageItem, index) => (
            <div
                key={index}
                className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
                <Image
                    src={packageItem.image}
                    alt={packageItem.title}
                    width={300}
                    height={200}
                    className="mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">{packageItem.title}</h3>
                <p className="mt-2 text-green-600 font-bold">{packageItem.price}</p>
                <p className="mt-1 text-gray-600">{packageItem.location}</p>
                <p className="text-gray-600">{packageItem.duration}</p>
                <p className="mt-2 text-gray-700 text-center">{packageItem.description}</p><br/>
                <Button type='button' title='Book Now' variant='btn_green'/>
            </div>
        ))}
      </section>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-4 right-4">
        <WhatsApp/>
      </div>
    </div>
  )
}

export default TourPackages
