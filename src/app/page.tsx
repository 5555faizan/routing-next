import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      Home page
<figure className="bg-slate-bule square-xl p-8 dark:bg-slate-800">
  <Image className="w-24 h-24 rounded-full mx-auto" src="/power.png" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg">
      We will help you to grow your business through social media marketing. Enjoy a digital media presence like never before!
      </p>
    </blockquote>
    <figcaption>
      <div>
        Power Marketing
      </div>
      <div>
       Marketing Agency
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default page
