# 3D模型交互功能说明

本项目使用Three.js和相关库实现了3D模型的加载和交互功能。以下是关于此功能的主要说明。

## 功能概述

- 3D模型的加载和渲染
- 模型拖拽功能（在水平平面上移动）
- 相机控制（缩放、旋转视角）
- 网格地面和光照效果

## 技术栈

- Three.js: 3D渲染引擎
- React Three Fiber: React的Three.js包装器
- React Three Drei: 常用Three.js助手组件

## 使用方法

1. 访问网站的"/model-demo"页面
2. 直接与3D模型交互:
   - 点击并拖拽模型可在水平平面上移动它
   - 使用鼠标滚轮缩放场景
   - 按住鼠标右键并移动可旋转视角

## 添加新模型

若要添加新的3D模型，请按照以下步骤操作:

1. 将模型文件(支持.glb或.gltf格式)放在`public/models/`目录中
2. 在`components/ModelViewer.tsx`文件中修改模型路径:

```tsx
<DraggableModel path="/models/你的模型文件名.glb" />
```

## 自定义配置

可在`components/ModelViewer.tsx`文件中调整以下参数:

- 相机位置和视场角:
```tsx
<Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
```

- 光照强度和位置:
```tsx
<ambientLight intensity={0.5} />
<directionalLight position={[10, 10, 5]} intensity={1} />
```

- 模型缩放比例:
```tsx
<Model path={path} scale={0.5} />
```

## 注意事项

- 模型文件应尽量优化以减少加载时间和提高性能
- 大型或复杂模型可能需要添加加载指示器或进行性能优化
- 确保模型的版权合规 