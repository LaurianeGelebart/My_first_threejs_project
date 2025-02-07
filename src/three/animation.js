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
  const updateAnimation = () => {
    requestAnimationFrame(updateAnimation);
    renderer.render(scene, camera);
  }
  updateAnimation();
}
