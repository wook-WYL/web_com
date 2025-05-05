'use client';

import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), {
    ssr: false
});

export default function ModelDemo() {
    return (
        <>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="h1 mb-4">可拖拽3D模型演示</h1>
                            <p className="text-xl text-gray-600">
                                这是一个使用Three.js实现的可拖拽3D模型演示，您可以通过拖拽移动模型，
                                使用鼠标滚轮缩放，按住右键旋转视角。
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <ModelViewer />
                        </div>

                        <div className="max-w-3xl mx-auto mt-12">
                            <h2 className="h3 mb-4 text-center">使用说明</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>点击并拖动模型以在水平平面上移动它</li>
                                <li>使用鼠标滚轮可以放大或缩小场景</li>
                                <li>按住鼠标右键并移动鼠标可以旋转视角</li>
                                <li>单击模型开始拖拽，松开鼠标按钮停止拖拽</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 