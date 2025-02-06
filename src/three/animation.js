/**
 * Démarre la boucle d'animation pour rendre en continu la scène Three.js.
 *
 * @param {Object} context - Contexte contenant les éléments nécessaires pour Three.js : renderer, scene, et camera.
 *
 * @example
 * animate({ context });
 */
export const animate = (context) => {
  if (!context.renderer || !context.scene || !context.camera) {
    throw new Error('Context must include renderer, scene, and camera');
  }
  let previousTime = 0;

  const updateAnimation = (timestamp) => {
    requestAnimationFrame(updateAnimation);

    // Calcul du temps écoulé
    const deltaTime = (timestamp - previousTime) / 1000; 
    previousTime = timestamp;

    // Rendre la scène
    context.renderer.render(context.scene, context.camera);

    // Mettre à jour les rotations des modèles "vapeur"
    context.scene.children.forEach((pivot) => {
      const model = pivot?.children[0];
      if (model && /vapeur/i.test(model.name)) {
        pivot.rotation.y += Math.PI * deltaTime *0.5; 
      }
    });
  };

  updateAnimation();
};
