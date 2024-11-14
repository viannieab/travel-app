import Image from 'next/image'
import Button from './Button'
import WhatsApp from '@/components/WhatsApp'

const AboutUs = () => {
  return (
    <section className="bg-feature-bg bg-center bg-no-repeat py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Kamunzuku Adventures</h1>
          <p className="mt-4 text-lg text-gray-700">Nature Awaits!</p>
        </header>
        {/* Vision and Mission */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the premier travel agency in East Africa that inspires and empowers travelers to explore the beauty, culture, and adventure of the region, while promoting sustainable tourism that uplifts local communities and preserves natural heritage.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To provide personalized, unforgettable travel experiences that connect our clients with the diverse landscapes and cultures of East Africa.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <section className="mb-12">
          <header className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Godly Business Principles</h3>
              <p className="mt-2 text-gray-600 text-center">
                All works uphold Godly business principles: Faith and Purpose, Diligency, & Stewardship to conserve the ecosystem.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
              <p className="mt-2 text-gray-600 text-center">
                We are truthful, transparent, and morally upright, adhering to strong ethical principles.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Teamwork</h3>
              <p className="mt-2 text-gray-600 text-center">
                Our staff work together to achieve common goals.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Professionalism</h3>
              <p className="mt-2 text-gray-600 text-center">
                Dedicated and empathetic staff committed to service excellence.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
              <p className="mt-2 text-gray-600 text-center">
                Hospitable staff providing best-in-class services.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Innovative</h3>
              <p className="mt-2 text-gray-600 text-center">
                We are problem-solvers with a forward thinking mindset who value and respect each person's ideas to attain novel solutions and approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Experts */}
        <section className="text-center mt-12 px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to Our Travel Experts</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="flex flex-col items-center">
                    <Image src="/user.png" alt="Viannie" width={100} height={100} className="rounded-full" />
                    <p className="text-gray-800 font-medium mt-2">Viannie</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/iroid.png" alt="Iroid" width={115} height={130} className="rounded-full" />
                    <p className="text-gray-800 font-medium mt-2">Iroid</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/moses.jpeg" alt="Moses" width={115} height={130} className="rounded-full" />
                    <p className="text-gray-800 font-medium mt-2">Moses</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/collin.jpg" alt="Collinz" width={115} height={130} className="rounded-full" />
                    <p className="text-gray-800 font-medium mt-2">Collinz</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/jb.jpg" alt="JB" width={115} height={130} className="rounded-full" />
                    <p className="text-gray-800 font-medium mt-2">JB</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Button type='button' title='Inquire Now' variant='btn_orange'/>
                <Button type='button' title='Request Callback' variant='btn_dark_blue'/>
                <Button type='button' title='Make Video Appointment' variant='btn_green'/>
            </div>
            <div className="mt-6">
                <a href="tel:+256414532162" className="text-green-600 font-medium block sm:inline">Call us: (256)-785-885-880</a>
            </div>
        </section>
      </div>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-4 right-4">
        <WhatsApp/>
      </div>
    </section>
  )
}
export default AboutUs;
