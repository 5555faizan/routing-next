import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
          <div>
      About page
<figure className="bg-slate-bule rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-24 h-24 square-full mx-auto" src="/power.marketing.png" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg">
      POWER MARKETING IS A LEADING DIGITAL MARKETING AGENCY DEDICATED TO TRANSFORMING BUSINESSES THROUGH INNOVATIVE SOLUTIONS.
      OUR EXPERTISE SPANS ACROSS TO COMPREHENSIVE DIGITAL MARKETING STRATEGIES & SEO. 
      PARTNER WITH US TO EXPERIENCE STARGATES AND TECHNIQUES DESIGNED FOR YOUR BUSINESS NEEDS.TRANSFORM YOUR VISION INTO
      REALITY WITH POWER MARKETING ELEVATE YOUR BRAND'S VISIBILITY WITH OUR CUTTING-EDGE 
      DIGITAL MARKETING SERVICES AND BUILD A LOYAL COMMUNITY AROUND YOUR BRAND.    
      </p>
    </blockquote>
    <figcaption>
      <div>
       Power Marketing
      </div>
      <div>
        Marketing Agncy
      </div>
    </figcaption>
  </div>
</figure>
    </div>
    </div>
  )
}

export default page
