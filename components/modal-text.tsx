'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalTextProps {
    children: React.ReactNode
    title: string
    content: React.ReactNode  // 修改为 ReactNode 类型以支持更复杂的内容
}

export default function ModalText({
    children,
    title,
    content
}: ModalTextProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <div>
            {/* 触发按钮 */}
            <button
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                onClick={() => setModalOpen(true)}
            >
                {children}
            </button>

            {/* 模态窗口 */}
            <Transition show={modalOpen} as={Fragment}>
                <Dialog onClose={() => setModalOpen(false)}>
                    {/* 背景遮罩 */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50 transition-opacity" />
                    </Transition.Child>

                    {/* 模态窗口内容 */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-out duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
                            <Dialog.Panel className="max-w-6xl mx-auto my-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-8">
                                    <Dialog.Title className="h3 mb-6 text-2xl font-bold text-white">{title}</Dialog.Title>
                                    <div className="text-gray-300 overflow-y-auto max-h-[70vh]">
                                        {content}
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <button
                                            className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md"
                                            onClick={() => setModalOpen(false)}
                                        >
                                            关闭
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
    )
}