import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 18;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0B0F0E, 1);
    container.appendChild(renderer.domElement);

    // Shape Definition: The "Three-Star Y" Logo
    // Tracing the vertices of the Y-Star shape in 3D space
    const pathPoints = [
      new THREE.Vector3(0, -6, 0),    // Bottom Tip
      new THREE.Vector3(3, -2, 0),    // Curve anchor
      new THREE.Vector3(6, 1, 0),     // Right Side Tip
      new THREE.Vector3(5, 3, 0),     // Curve anchor
      new THREE.Vector3(4, 5, 0),     // Right Top Tip
      new THREE.Vector3(2, 3, 0),     // Curve anchor
      new THREE.Vector3(0, 2, 0),     // Center Valley
      new THREE.Vector3(-2, 3, 0),    // Curve anchor
      new THREE.Vector3(-4, 5, 0),    // Left Top Tip
      new THREE.Vector3(-5, 3, 0),    // Curve anchor
      new THREE.Vector3(-6, 1, 0),    // Left Side Tip
      new THREE.Vector3(-3, -2, 0),   // Curve anchor
      new THREE.Vector3(0, -6, 0)     // Back to Bottom
    ];

    const curve = new THREE.CatmullRomCurve3(pathPoints, true, 'catmullrom', 0.4);

    // Shader Material for the interactive glow
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0x7CFF98) },
        uMouse: { value: new THREE.Vector3(999, 999, 0) },
        uTime: { value: 0 },
        uHoverRadius: { value: 6.0 }
      },
      vertexShader: `
        varying vec3 vPos;
        void main() {
          vPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uMouse;
        uniform float uTime;
        uniform float uHoverRadius;
        varying vec3 vPos;

        void main() {
          float dist = distance(vPos.xy, uMouse.xy);
          float intensity = 0.6;
          float hoverGlow = exp(-dist * 0.8) * 4.0;
          float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
          vec3 finalColor = uColor * (intensity + hoverGlow) * pulse;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });

    // 1. The Neon Tube (Outline)
    const tubeGeometry = new THREE.TubeGeometry(curve, 128, 0.15, 8, true);
    const tubeMesh = new THREE.Mesh(tubeGeometry, glowMaterial);
    scene.add(tubeMesh);

    // 2. The Inner Fill (Faint Fog)
    const shape = new THREE.Shape();
    // Replicating the 2D path geometry for the fill
    shape.moveTo(0, -6);
    shape.quadraticCurveTo(3, -2, 6, 1);
    shape.quadraticCurveTo(5, 3, 4, 5);
    shape.quadraticCurveTo(0, 2, -4, 5);
    shape.quadraticCurveTo(-5, 3, -6, 1);
    shape.quadraticCurveTo(-3, -2, 0, -6);

    const shapeGeometry = new THREE.ShapeGeometry(shape);
    const fillMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0x7CFF98) },
        uMouse: { value: new THREE.Vector3(999, 999, 0) }
      },
      vertexShader: `
        varying vec3 vPos;
        void main() {
          vPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uMouse;
        varying vec3 vPos;
        void main() {
          float dist = distance(vPos.xy, uMouse.xy);
          float glow = exp(-dist * 0.5) * 0.5;
          gl_FragColor = vec4(uColor, 0.05 + glow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    const fillMesh = new THREE.Mesh(shapeGeometry, fillMaterial);
    scene.add(fillMesh);

    // Mouse Interaction
    const mouseVector = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const pos = new THREE.Vector3();

    const onMouseMove = (event: MouseEvent) => {
      mouseVector.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
        0.5
      );
      
      mouseVector.unproject(camera);
      dir.copy(mouseVector).sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      pos.copy(camera.position).add(dir.multiplyScalar(distance));
      
      glowMaterial.uniforms.uMouse.value.copy(pos);
      fillMaterial.uniforms.uMouse.value.copy(pos);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      glowMaterial.uniforms.uTime.value = time;
      
      const floatY = Math.sin(time * 0.5) * 0.2;
      tubeMesh.position.y = floatY;
      fillMesh.position.y = floatY;
      
      const targetRotX = (mouseVector.y || 0) * 0.05;
      const targetRotY = (mouseVector.x || 0) * 0.05;
      
      tubeMesh.rotation.x += (targetRotX - tubeMesh.rotation.x) * 0.05;
      tubeMesh.rotation.y += (targetRotY - tubeMesh.rotation.y) * 0.05;
      fillMesh.rotation.x = tubeMesh.rotation.x;
      fillMesh.rotation.y = tubeMesh.rotation.y;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometryDispose(tubeGeometry);
      geometryDispose(shapeGeometry);
      materialDispose(glowMaterial);
      materialDispose(fillMaterial);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="canvas-container"
      className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
    />
  );
};

// Helper utils to clean up Three.js resources
function geometryDispose(geometry: THREE.BufferGeometry) {
    geometry.dispose();
}
function materialDispose(material: THREE.Material) {
    material.dispose();
}

export default ThreeBackground;