import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './Heros.css';

const Heros = () => {
  const mountRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const canvas = canvasRef.current;
    const width = mount.offsetWidth; // use offsetWidth for accuracy
    const height = mount.offsetHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#01574C'); // theme color

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = -30;
    camera.position.x = 10;
    camera.lookAt(-50, 0, -60);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x01574C, 0); // transparent background
    renderer.setSize(width, height, false); // do not set style width/height
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.right = '0';
    renderer.domElement.style.bottom = '0';
    renderer.domElement.style.overflow = 'hidden';
    renderer.domElement.style.maxWidth = '100vw';
    renderer.domElement.style.maxHeight = '100svh';
    renderer.domElement.style.pointerEvents = 'none';

    // Starfield: create a stream of stars moving forward
    const starCount = 20;
    const stars = [];
    const starGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xB2FFF7, transparent: true, opacity: 0.85 }); // light teal accent
    const maxRadius = 10; // covers even the corners of a wide viewport
    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial.clone());
      // Distribute stars in a wide tube along z axis, covering the whole screen
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * maxRadius;
      star.position.x = Math.cos(angle) * radius;
      star.position.y = Math.sin(angle) * radius;
      star.position.z = -40 + Math.random() * 35; // z from -40 to -5
      star.userData.speed = 0.002; // slowed down
      // Color tint (theme compatible)
      if (Math.random() < 0.7) {
        star.material.color.set('#B2FFF7'); // light teal
      } else if (Math.random() < 0.85) {
        star.material.color.set('#E0F7FA'); // soft light blue
      } else {
        star.material.color.set('#FFFFFF'); // white
      }
      scene.add(star);
      stars.push(star);
    }

    // Animate
    let frameId;
    const animate = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        // Move star forward along z axis
        star.position.z += star.userData.speed;
        // If star passes the camera, respawn at the back of the tube
        if (star.position.z > 7) {
          const angle = Math.random() * 2 * Math.PI;
          const radius = Math.random() * maxRadius;
          star.position.x = Math.cos(angle) * radius;
          star.position.y = Math.sin(angle) * radius;
          star.position.z = -40;
        }
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="heros-container" ref={mountRef}>
      <canvas ref={canvasRef} className="heros-bg-canvas" />
      <div className="heros-content">
        <h1>Transform Your Business with Fast, Modern POS Solutions Today</h1>
        <p>Our advanced POS systems empower your business with seamless transactions, real-time analytics, inventory management, and secure payments. Experience reliability, speed, and support for every retail and hospitality need today.</p>
        <div className="heros-buttons">
          <button className="heros-btn primary">Get Started</button>
          <button className="heros-btn secondary">Learn More</button>
        </div>
        <img src="/hero.png" alt="POS System" className="heros-image" />
      </div>
    </div>
  );
};

export default Heros;