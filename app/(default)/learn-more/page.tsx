export const metadata = {
    title: '了解更多 - 运输机器人项目',
    description: '深入了解我们的技术细节和应用场景',
}

export default function LearnMore() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* 页面标题 */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4">技术详情</h1>
                        <p className="text-xl text-gray-400">深入了解我们的核心技术和应用场景</p>
                    </div>

                    {/* 内容区域 */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-gray-400">
                            <h3 className="h3 text-gray-200 mb-4">核心技术</h3>
                            <div className="mb-8">
                                <h4 className="h4 text-gray-200 mb-2">视觉感知系统</h4>
                                <p className="mb-4">
                                    采用深度学习算法实现环境识别和障碍物检测，
                                    通过多传感器融合提高感知精度和可靠性。
                                </p>

                                <h4 className="h4 text-gray-200 mb-2">路径规划算法</h4>
                                <p className="mb-4">
                                    采用分层式路径规划算法，在降低计算复杂度的同时，
                                    保证路径的安全性和可行性。
                                </p>

                                <h4 className="h4 text-gray-200 mb-2">控制系统</h4>
                                <p className="mb-4">
                                    采用自适应控制策略，根据地形特征动态调整运动参数，
                                    保证运输过程的稳定性和效率。
                                </p>
                            </div>

                            <h3 className="h3 text-gray-200 mb-4">应用场景</h3>
                            <ul className="list-disc list-inside mb-8">
                                <li className="mb-2">救援抢险工作</li>
                                <li className="mb-2">军事侦查和巡逻任务</li>
                                <li className="mb-2">农业环境作业</li>
                                <li className="mb-2">物流搬运工作</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}