'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import dynamic from 'next/dynamic';

// 扩展JSX命名空间以支持Three.js组件
declare global {
    namespace JSX {
        interface IntrinsicElements {
            group: any;
            primitive: any;
            ambientLight: any;
            directionalLight: any;
            gridHelper: any;
        }
    }
}

// 加载模型的组件
function Model({ path, ...props }: { path: string;[key: string]: any }) {
    const { scene } = useGLTF(path);

    // 复制场景以避免修改原始场景
    const copiedScene = useRef<THREE.Object3D | null>(null);

    useEffect(() => {
        copiedScene.current = scene.clone();
    }, [scene]);

    return copiedScene.current ? <primitive object={copiedScene.current} {...props} /> : null;
}

// 拖拽控制逻辑
function DraggableModel({ path }: { path: string }) {
    const { camera, gl } = useThree();
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
    const modelRef = useRef<THREE.Group>(null);

    // 处理拖拽逻辑
    const handlePointerDown = (e: any) => {
        e.stopPropagation();
        setIsDragging(true);
        gl.domElement.style.cursor = 'grabbing';
    };

    const handlePointerUp = () => {
        setIsDragging(false);
        gl.domElement.style.cursor = 'grab';
    };

    const handlePointerMove = (e: MouseEvent) => {
        if (isDragging && modelRef.current) {
            // 计算鼠标移动的平面位置
            const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0));
            const raycaster = new THREE.Raycaster();
            const pointer = new THREE.Vector2(
                (e.clientX / window.innerWidth) * 2 - 1,
                -(e.clientY / window.innerHeight) * 2 + 1
            );

            raycaster.setFromCamera(pointer, camera);
            const intersectPoint = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, intersectPoint);

            setPosition([intersectPoint.x, 0, intersectPoint.z]);
        }
    };

    useEffect(() => {
        window.addEventListener('pointerup', handlePointerUp);
        window.addEventListener('pointermove', handlePointerMove as any);

        return () => {
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('pointermove', handlePointerMove as any);
        };
    }, [isDragging]);

    return (
        <group
            ref={modelRef as any}
            position={position}
            onPointerDown={handlePointerDown}
        >
            <Model path={path} scale={0.5} />
        </group>
    );
}

function ModelViewerContent() {
    return (
        <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden relative">
            <Canvas
                camera={{ position: [5, 5, 5], fov: 50 }}
                shadows
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[10, 10, 5]}
                        intensity={1}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <gridHelper args={[10, 10]} />
                    <DraggableModel path="/models/整车模型.glb" />
                    <OrbitControls enablePan={false} />
                </Suspense>
            </Canvas>
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-sm">
                提示: 点击并拖动模型移动它，使用鼠标滚轮缩放，按住右键旋转视角
            </div>
        </div>
    );
}

// 使用动态导入，禁用SSR
const ModelViewer = dynamic(() => Promise.resolve(ModelViewerContent), {
    ssr: false
});

export default ModelViewer; 