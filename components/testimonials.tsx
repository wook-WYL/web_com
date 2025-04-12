import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.png'
import TestimonialImage02 from '@/public/images/testimonial-02.png'
import TestimonialImage03 from '@/public/images/testimonial-03.png'
import TestimonialImage04 from '@/public/images/testimonial-04.png'
import TestimonialImage05 from '@/public/images/testimonial-05.png'
import TestimonialImage06 from '@/public/images/testimonial-06.png'
import ModalText from './modal-text'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">看看我们的视觉感知算法设计</h2>
            <p className="text-xl text-gray-400">本方案提出一种结合双分支融合网络（SFNet）与自监督学习的RGB-D视觉感知算法。SFNet利用RGB和深度图提取语义与几何特征，并通过特征互补模块实现多尺度融合。自监督模块以超像素为参考引导网络学习，同时基于深度图构建斜率、台阶高度和粗糙度的可通行性图，与分割图融合生成最终通行区域，提升复杂环境下的语义理解与路径规划能力。</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">自监督视觉预训练方法无需标签数据，而是依赖前置任务而非基于人类标注标签的预测。然而，由于标签有限，从自监督可通行性数据中提取高度判别性特征颇具挑战性。如果在自监督可通行性数据提供的最小监督之外，结合视觉特征的自监督学习......</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">自监督可通行性区域</cite> -
                <ModalText
                  title="自监督可通行性区域"
                  content={
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage06} width={540} height={405} alt="Features 02" />
                      </div>
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                          <div className="font-architects-daughter text-xl text-purple-600 mb-2">智能感知</div>
                          <h3 className="h3 mb-3">自监督可通行性区域</h3>
                          <p className="text-xl text-gray-400 mb-4">自监督视觉预训练方法无需标签数据，而是依赖前置任务而非基于人类标注标签的预测。然而，由于标签有限，从自监督可通行性数据中提取高度判别性特征颇具挑战性。如果在自监督可通行性数据提供的最小监督之外，结合视觉特征的自监督学习，用于学习可通行性的视觉表示可能会变得更具判别性。
                            本项目提出了一种自监督模块来解决上述问题。给定RGB输入Irgb和传感器深度输入Id，我们的目标是通过减小其与参考表面法线In_r之间的距离来估计表面法线图。在越野导航任务中，由于标注数据的可用性有限，导致缺乏真实的表面法线。受基于聚类的自监督视觉表示学习的启发[13]，本项目使用SLIC方法[14]从RGB图像中提取超像素。这些超像素作为参考表面法线，有效地指导SFNet的训练过程。超像素是由局部一致的像素集群组成的，它们是基于图像固有的特征（如颜色、纹理和空间邻近性）形成的。在深度估计和图像分割任务中，超像素被广泛用于降低计算复杂度和提高处理效率。通过将具有相似特征的像素分组，超像素能够实现更紧凑的图像表示，从而简化后续的图像处理操作。它们的使用可以显著减少对手动标注数据的依赖，因为超像素提供了一种结构化的中间表示，有助于更高效的标注，并提高了越野导航任务中机器学习模型的鲁棒性。
                          </p>
                          <ul className="text-lg text-gray-400 -mb-2">
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>自监督表面法线估计</span>
                            </li>
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>超像素引导训练</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>几何可通行性建模</span>
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
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">本方案包含一个用于分割的双分支融合网络（SFNet）和一个自监督学习模块。RGB-D图像作为分割融合网络（SFNet）的输入。在架构的编码器部分，我们创建了两个独立的分支：RGB分支作为主分支，深度分支作为从分支，以独立提取RGB和深度特征的信息......</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">网络架构</cite> -
                <ModalText
                  title="网络架构"
                  content={
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage04} width={540} height={405} alt="Features 02" />
                      </div>
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                          <div className="font-architects-daughter text-xl text-purple-600 mb-2">智能感知</div>
                          <h3 className="h3 mb-3">网络架构</h3>
                          <p className="text-xl text-gray-400 mb-4">该方法包含一个用于分割的双分支融合网络（SFNet）和一个自监督学习模块。RGB-D图像作为分割融合网络（SFNet）的输入。在架构的编码器部分，我们创建了两个独立的分支：RGB分支作为主分支，深度分支作为从分支，以独立提取RGB和深度特征的信息。深度图提供了额外的轮廓和空间信息，从而增强了RGB语义分割。ResNet是两个分支中用于从输入中提取特征的主干网络。其相对较浅的深度、残差结构和适度的运算量使其能够实现实时操作。在ResNet的每一层之后，特征互补（FC）块将深度分支的输出特征融合到RGB分支中。它同时考虑了从视觉信息中获得的语义信息和位于几何信息中的表面斜率。受SwiftNet[11]的启发，我们提出了有效的上采样模块，该模块使用RGB分支的跳跃连接来恢复这些特征图的分辨率。在自监督模块中，使用超像素参考对SFNet生成的融合分割图进行细化。从深度图像获得的几何估计进一步增强了可通行性置信图。最终，在测试期间，通过将语义信息图与作为自监督指导的可通行性置信图相结合，所提模型生成最终的可通行性图，再进行slam建图。</p>
                          <ul className="text-lg text-gray-400 -mb-2">
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>双分支融合网络（SFNet）</span>
                            </li>
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>特征互补（FC）块</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span> 自监督细化</span>
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
              <blockquote className="text-lg text-gray-400 grow">该方法在四个阶段聚合了多尺度特征。首先，将彩色图像输入到RGB分支中，我们采用基于全卷积网络[12]的网络架构。解码器利用共享的池化掩码和跳跃连接来学习局部图像特征，而解码器遵循对称结构来重构图像信息......</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">可通行区域融合分割</cite> -
                <ModalText
                  title="可通行区域融合分割"
                  content={
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={TestimonialImage05} width={540} height={405} alt="Features 03" />
                      </div>
                      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                          <div className="font-architects-daughter text-xl text-purple-600 mb-2">智能感知</div>
                          <h3 className="h3 mb-3">可通行区域融合分割</h3>
                          <p className="text-xl text-gray-400 mb-4">该方法在四个阶段聚合了多尺度特征。首先，将彩色图像输入到RGB分支中，我们采用基于全卷积网络的网络架构。解码器利用共享的池化掩码和跳跃连接来学习局部图像特征，而解码器遵循对称结构来重构图像信息。同时，具有与RGB分支相同网络拓扑的深度分支使用深度图像来提取几何特征。它在RGB解码器的最终卷积块中替换了一个动态核层。
                            融合发生在下采样侧，其中特征互补（FC）模块整合了多尺度的深度特征。深度和RGB特征首先进行拼接，并通过GateBlock进行处理，该GateBlock由一个标准卷积层和一个softmax层组成。同时，额外的特征流被输入到由负责动态生成卷积核的卷积层组成的解码器中。随后，解码后的特征通过多尺度融合层传递，其中应用了动态卷积操作。在此过程中，卷积核是根据输入特征自适应生成的，从而增强了特征表示。然后，将最终融合的特征进行重复和下采样，以匹配深度特征的分辨率。为了确保分辨率一致性，将多尺度的深度特征与颜色特征进行拼接，产生最终的融合输出。这种方法使网络能够执行根据输入特征进行条件卷积，从而实现更灵活且上下文感知的特征提取。</p>
                          <ul className="text-lg text-gray-400 -mb-2">
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>多尺度特征融合</span>
                            </li>
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>动态核生成</span>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>条件卷积</span>
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
