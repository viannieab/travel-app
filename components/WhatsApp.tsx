"use client"
import Image from 'next/image'
import { useState } from 'react'

const WhatsAppChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* WhatsApp Icon */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center bg-green-500 w-16 h-16 rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out"
      >
        <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />

        {/* Hover Popup */}
        {isHovered && (
          <div className="absolute bottom-0 bg-green-800 text-white rounded-full flex items-center p-3 shadow-lg">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="user"
                width={50}
                height={50}
                className="rounded-full"
              />
              {/* <div>
                <p className="font-bold">Let's Chat!</p>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default WhatsAppChat
