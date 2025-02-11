// import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Canvas3d()  {
    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh rotation={[90, 0, 20]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

