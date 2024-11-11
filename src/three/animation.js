/**
 * Démarre la boucle d'animation pour rendre en continu la scène Three.js.
 * Appelle la fonction de rendu de la scène à chaque frame pour créer une animation fluide.
 *
 * @param {Object} context - Contexte contenant les éléments de rendu nécessaires pour Three.js.
 * @param {THREE.Renderer} context.renderer - Le renderer Three.js pour dessiner la scène.
 * @param {THREE.Scene} context.scene - La scène Three.js à afficher.
 * @param {THREE.Camera} context.camera - La caméra utilisée pour afficher la scène.
 *
 * @example
 * animate({ renderer: renderer, scene: scene, camera: camera });
 */
export function animate(context) 
{
    const updateAnimation = () => {
      requestAnimationFrame(updateAnimation);
      context.renderer.render(context.scene, context.camera);
    }
    updateAnimation();
}
