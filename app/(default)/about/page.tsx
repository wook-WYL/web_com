export const metadata = {
    title: '关于我们 - 运输机器人项目',
    description: '了解我们的团队和项目愿景',
}

export default function About() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* 页面标题 */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4">关于我们</h1>
                        <p className="text-xl text-gray-400">致力于解决复杂地形下的运输难题</p>
                    </div>

                    {/* 内容区域 */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-gray-400">
                            <h3 className="h3 text-gray-200 mb-4">项目背景</h3>
                            <p className="mb-8">
                                近年来，机器人技术发展迅速，轮式移动平台在复杂环境中的应用潜力巨大。在自主无人车研究领域，复杂非结构化环境（如野外、地下洞穴等）下的运动控制和路径规划成为关键难题。这类环境布局多变、结构不明，给机器人的感知、建图和决策带来极大挑战。目前，多数可通行性估计方法依赖人工标注的有限数据集，存在泛化能力弱、适应性差的问题。并且，随着三维复杂空间探索需求的增加，传统二维路径规划方法在效率和实时性上也难以满足要求。为此，本项目提出融合RGB与深度信息的视觉自监督学习方法，设计双分支分割融合网络提升特征提取能力，优化控制系统和机械结构，增强机器人在复杂三维空间中的运动性能和环境适应能力，为自主无人车在极端环境下的应用提供支持。
                            </p>

                            <h3 className="h3 text-gray-200 mb-4">项目基础</h3>
                            <p className="mb-8">
                                我们前期已完成六轮机器人平台的搭建，包括机械结构设计、运动学建模以及底层控制系统的开发与调试。此次参赛重点聚焦于感知算法的模型训练与优化，构建智能控制系统，并完成相关功能的集成测试与性能验证，为实现机器人在复杂环境下的自主导航打下坚实基础。
                            </p>

                            <h3 className="h3 text-gray-200 mb-4">创新点</h3>
                            <ul className="list-disc list-inside mb-8">
                                <li className="mb-2">先进的视觉感知算法</li>
                                <li className="mb-2">智能路径规划系统</li>
                                <li className="mb-2">自适应运动控制</li>
                                <li className="mb-2">实时环境感知能力</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}