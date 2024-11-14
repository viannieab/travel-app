import Image from 'next/image'
import WhatsApp from '@/components/WhatsApp'
import Button from './Button'

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Contact Information */}
            <div className="lg:w-1/2 flex flex-col space-y-6">
                <h3 className="text-2xl font-bold text-green-600">Need Help?</h3>
                <h2 className="text-4xl font-bold text-gray-900">Say hi, and let's start a good conversation.</h2>
                <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Image src="/position.png" alt="Location" width={30} height={30} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Locations</h4>
                        <p className="text-gray-600">Plot 1710, Suub Lane, Nalumunye</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Image src="/message.png" alt="Email" width={30} height={30} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Email us!</h4>
                        <p className="text-gray-600">info@kamunzuku-adventures.com</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Image src="/phone-call.png" alt="Phone" width={30} height={30} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Call us!</h4>
                        <p className="text-gray-600">+256 785 885 880</p>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
                <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-gray-700 font-semibold">Name</label>
                            <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Phone</label>
                            <input
                            type="text"
                            placeholder="Phone"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Message</label>
                        <textarea
                            placeholder="Message"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            rows= {4}
                        ></textarea>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-gray-700">I'm not a robot</span>
                        </div>
                    </div>
                    <div className="flexCenter px-8 bold-20">
                        <Button type='submit' variant='btn_green' title='Submit'/>
                    </div>
                </form>
            </div>
        </div>
        {/* WhatsApp Chat Button */}
        <div className="fixed bottom-4 right-4">
            <WhatsApp/>
        </div>
    </div>
  )
}
export default ContactUs