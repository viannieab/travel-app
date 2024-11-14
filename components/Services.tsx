import Image from 'next/image'
import { SERVICES } from '@/constants'
import WhatsApp from '@/components/WhatsApp'

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-feature-bg bg-center bg-no-repeat">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the unique services Kamunzuku Adventures offers to enhance your adventure experience. From offline maps to augmented reality guides, we bring you closer to nature with innovative technology.
        </p>
      </header>

      {/* Services Section */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className={`mb-4 ${service.variant === 'orange' ? 'bg-orange-100' : 'bg-green-100'} p-2 rounded-full`}
            />
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600 text-center">{service.description}</p>
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
export default Services;
