export const metadata = {
  title: '面向复杂地形的运输机器人自主感知导航系统',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Testimonials_2 from '@/components/testimonials_2'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Testimonials_2 />

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-4">3D模型演示</h2>
              <p className="text-xl text-gray-600 mb-8">
                查看我们的3D模型交互演示，体验可拖拽的整车模型
              </p>
              <div className="flex justify-center">
                <a href="/3d-model-demo.html" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0">
                  查看3D模型演示
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
