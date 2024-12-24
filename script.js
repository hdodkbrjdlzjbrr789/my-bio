document.addEventListener('DOMContentLoaded', () => {
      // 3D Background
                              const THREE.Perew THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innentById('background-3d')ght);
    document.getElementById('background-3d').appendChild(renderer.domElement);

    // DNA-like particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
              posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAt = nete(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
              size: 0.005,
              color: 'cyan'
    });

 sGeconst particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.posqtion.z mationFrame(animate);
        particlesMcene, camera);
}
    animateisten    // Responsive design
    window.addEventListener('resize', () =ndow.innerHeight;
      t = window.innerridth / window.innerHeight;
        camera.updatePridth / window.innerHeight;
        camera.updateProjectionMatrix();er    ht;
enderer camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
});
});
