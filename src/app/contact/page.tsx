import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
          <div>
      Home page
<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-24 h-24 rounded-full mx-auto" src="/power.marketing.png" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg">
        Contact Now
      </p>
    </blockquote>
    <figcaption>
      <div>
        +923006700322
      </div>
      <div>
      services.powermarketing@gmail.com
      </div>
    </figcaption>
  </div>
</figure>
    </div>
    </div>
  )
}

export default page;
