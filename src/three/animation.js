/**
 * Démarre la boucle d'animation pour rendre en continu la scène Three.js.
 * 
 * @param {THREE.Camera} camera - Caméra Three.js
 * @param {THREE.Scene} scene - Scène Three.js 
 * @param {THREE.WebGLRenderer} renderer - Renderer Three.js
 * 
 * @example
 * animate(camera, scene, renderer);
 */
export const animate = (camera, scene, renderer) => {
  let previousTime = 0;

  const updateAnimation = (timestamp) => {
    requestAnimationFrame(updateAnimation);

    // Calcul du temps écoulé
    const deltaTime = (timestamp - previousTime) / 1000; 
    previousTime = timestamp;

    // Rendre la scène
    renderer.render(scene, camera);

    // Mettre à jour les rotations des modèles "vapeur"
    scene.children.forEach((pivot) => {
      const model = pivot?.children[0];
      if (model && /vapeur/i.test(model.name)) {
        pivot.rotation.y += Math.PI * deltaTime *0.5; 
      }
    });
  };

  updateAnimation();
};
