import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.png'
import TestimonialImage02 from '@/public/images/testimonial-02.png'
import TestimonialImage03 from '@/public/images/testimonial-03.png'
import TestimonialImage04 from '@/public/images/testimonial_2-04.png'
import TestimonialImage05 from '@/public/images/testimonial_2-05.png'
import TestimonialImage06 from '@/public/images/testimonial_2-06.png'
import TestimonialImage07 from '@/public/images/testimonial_2-07.png'
import ModalText from './modal-text'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">还有我们的智能路径规划算法</h2>
            <p className="text-xl text-gray-400">基于六轮无人机器人的复杂3D场景，以及能够在信号薄弱地区实现高效自主路径规划的需求，本项目提出一种复杂三维环境自主探索的分层框架方法。
              本项目将传统路径规划分为局部规划层以及全局规划层。在局部规划层维护高分辨率环境表示并生成动力学可行路径，全局规划层维护低分辨率表示并计算粗路径。通过随机采样选视点、构建路径并平滑、全局规划连接子空间等步骤，优化整体探索路径。相关实验表明使用该分层框架，其探索效率提升80%，计算量减少50%以上。
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">在机器人探索环境时，即使机器人处于同一位置，不同的传感器朝向也会形成不同的视点，获取不同的环境信息。
                表面点用于界定自由空间和非自由空间（包括被占据空间和未知空间）的广义边界。表面点是传感器感知的关键对象。机器人通过传感器采集数据，确定表面点是否被覆盖，以此判断自身对环境的感知程度。
                视点决定了表面点能否被感知。机器人通过传感器获取环境信息，而视点定义了传感器的位姿。
                ......</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">视点采样</cite> -
                <ModalText
                  title="视点采样"
                  content={
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage05} width={540} height={405} alt="Features 02" />
                      </div>

                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                          <div className="font-architects-daughter text-xl text-purple-600 mb-2">智能决策</div>
                          <h3 className="h3 mb-3">视点采样</h3>
                          <p className="text-xl text-gray-400 mb-4 text-center">视点是由代表机器人传感器在可遍历子空间中位置的pv和决定传感器的观测方向的qv构成。

                            在机器人探索环境时，即使机器人处于同一位置，不同的传感器朝向也会形成不同的视点，获取不同的环境信息。
                            表面点用于界定自由空间和非自由空间（包括被占据空间和未知空间）的广义边界。表面点是传感器感知的关键对象。机器人通过传感器采集数据，确定表面点是否被覆盖，以此判断自身对环境的感知程度。
                            视点决定了表面点能否被感知。机器人通过传感器获取环境信息，而视点定义了传感器的位姿。
                            在视点采样时，算法以覆盖未被覆盖的表面点为目标，选择最小集合的视点，通过计算视点对表面点的覆盖情况确定奖励，引导机器人向未探索区域移动。



                          </p>
                          <ul className="text-lg text-gray-400 -mb-2">
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>视点-表面点感知模型</span>
                            </li>
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>最小覆盖视点采样</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>探索奖励驱动机制</span>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                >
                  了解更多
                </ModalText>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">根据采样视点生成路径，考虑曲率约束，将路径计算问题转化为NP难问题，采用近似算法分两步求解，先确定视点顺序，再分离视点成段并平滑，使用贪心策略降低计算复杂度。
                局部路径规划目标是在给定一组采样视点的情况下，生成一条能遍历这些视点且满足机器人运动学和动力学约束的连续路径，使机器人可以高速运动
                ......</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">局部路径规划</cite> -
                <ModalText
                  title="网络架构"
                  content={
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage05} width={540} height={405} alt="Features 02" />
                      </div>
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage07} width={540} height={405} alt="Features 02" />
                      </div>
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                          <div className="font-architects-daughter text-xl text-purple-600 mb-2">智能感知</div>
                          <h3 className="h3 mb-3">局部路径规划</h3>
                          <p className="text-xl text-gray-400 mb-4">在路径生成与平滑过程中，确定路径的最优结构是一个NP难问题，精确求解计算复杂度极高。在考虑众多采样视点的连接顺序以及如何平滑路径以满足曲率约束和降低成本时，如果采用穷举法或其他精确算法，计算量会随着视点数量的增加呈指数级增长，在实际应用中难以实现实时规划[19]。
                            因此使用贪心策略，在处理路径分段和确定内点的时，对每个视点仅检查一次。算法按顺序依次尝试将每个视点设为内点，计算重新平滑路径段后的成本变化。如果设为内点后路径成本降低且满足曲率约束，就确定该视点为内点；否则，保持其为断点。这种局部最优的选择方式，避免了对所有可能的视点组合进行全面搜索，大大减少了计算量。
                            使用标准旅行商问题（TSP）算法确定视点的遍历顺序。通过计算视点之间的最短路径，构建距离矩阵，然后求解TSP得到一个大致合理的视点顺序。
                          </p>
                          <p className="text-xl text-gray-400 mb-4"> <p className="text-xl text-gray-400 mb-4">在路径生成与平滑过程中，确定路径的最优结构是一个NP难问题，精确求解计算复杂度极高。在考虑众多采样视点的连接顺序以及如何平滑路径以满足曲率约束和降低成本时，如果采用穷举法或其他精确算法，计算量会随着视点数量的增加呈指数级增长，在实际应用中难以实现实时规划[19]。
                            因此使用贪心策略，在处理路径分段和确定内点的时，对每个视点仅检查一次。算法按顺序依次尝试将每个视点设为内点，计算重新平滑路径段后的成本变化。如果设为内点后路径成本降低且满足曲率约束，就确定该视点为内点；否则，保持其为断点。这种局部最优的选择方式，避免了对所有可能的视点组合进行全面搜索，大大减少了计算量。
                            使用标准旅行商问题（TSP）算法确定视点的遍历顺序。通过计算视点之间的最短路径，构建距离矩阵，然后求解TSP得到一个大致合理的视点顺序。
                          </p>
                          </p>
                          <ul className="text-lg text-gray-400 -mb-2">
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>分段平滑路径优化</span>
                            </li>
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>贪心-TSP混合策略</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span> 动态曲率约束处理</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                >
                  了解更多
                </ModalText>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">将局部规划视野H之外的空间划分为均匀的长方体子空间。这些子空间用于存储在探索过程中发现的覆盖和未覆盖表面信息。
                每个子空间都有三种状态：“未探索”（不包含任何覆盖或未覆盖表面）、“探索中”（包含未覆盖表面）和“已探索”（仅包含覆盖表面）。在全局规划时，只关注处于“探索中”状态的子空间
                ......</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">全局规划</cite> -
                <ModalText
                  title="可通行区域融合分割"
                  content={
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage06} width={540} height={405} alt="Features 03" />
                      </div>
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                          <div className="font-architects-daughter text-xl text-purple-600 mb-2">智能感知</div>
                          <h3 className="h3 mb-3">全局规划</h3>
                          <p className="text-xl text-gray-400 mb-4">将局部规划视野H之外的空间划分为均匀的长方体子空间。这些子空间用于存储在探索过程中发现的覆盖和未覆盖表面信息。
                            每个子空间都有三种状态：“未探索”（不包含任何覆盖或未覆盖表面）、“探索中”（包含未覆盖表面）和“已探索”（仅包含覆盖表面）。在全局规划时，只关注处于“探索中”状态的子空间。
                            探索过程中，基于机器人过去的轨迹在可遍历空间中构建稀疏随机路线图。这个路线图为全局路径规划提供了基础框架，它包含了一系列的节点和连接这些节点的边，节点通常对应着子空间的关键位置或者机器人经过的重要位置，边则表示这些位置之间的可通行连接关系。
                          </p> <p className="text-xl text-gray-400 mb-4">利用A星搜索算法在路线图上寻找从当前视点Vcurrⅇnt到各“探索中”子空间质心的最短路径。A星搜索是常用的启发式搜索算法[20]，A星算法能够在保证路径可行性的同时，优先探索那些可能更接近最优路径的节点，从而快速有效地找到一条从起始位置到目标位置的最短或近似最短路径。
                            TSP算法是组合优化领域中的一个经典问题，其目标是在给定一组城市（在本问题中为子空间质心）及其之间的距离（或代价）的情况下，找到一条经过所有城市且每个城市只经过一次的最短路径。通过求解TSP问题，我们可以确定机器人在不同子空间之间的最优遍历顺序，从而最小化整体路径长度，提高导航效率。
                            之后使用TSP算法对这些子空间质心的遍历顺序进行优化。TSP算法的目标是找到一条经过所有给定（这里的城市即子空间质心）且每个城市只经过一次的最短路径，从而确定机器人在不同子空间之间的最优遍历顺序。
                          </p>
                          <ul className="text-lg text-gray-400 -mb-2">
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>子空间状态建模</span>
                            </li>
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>分层路径规划架构</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>动态视野衔接策略</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                >
                  了解更多
                </ModalText>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
