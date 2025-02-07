import * as THREE from 'three';

/**
 * Gère le survole sur le canevas.
 * 
 * @param {MouseEvent} event - L'événement de la souris contenant les coordonnées de la souris.
 * @param {THREE.Camera} camera - La caméra de la scène.
 * @param {HTMLCanvasElement} canvasElement - L'élément canvas dont les dimensions sont utilisées pour normaliser la position.
 * 
 * @example
 * canvas.addEventListener('mousemove', (event) => onCursorMove(event, camera, canvas));
 */
export const onCursorMove = (event, camera, canvasElement) => {
    const { x, y } = getNormalizedMousePosition(event, canvasElement);
    console.log(`Cursor moved to: X=${x}, Y=${y}`);
    camera.lookAt(x * 0.1, y * 0.1, 0);
};

/**
 * Gère le clic sur le canevas.
 *
 * @param {MouseEvent} event - L'événement de la souris contenant les coordonnées de la souris.
 * @param {THREE.Scene} scene - La scène Three.js où les objets sont présents.
 * @param {THREE.Camera} camera - La caméra de la scène.
 * 
 * @example
 * canvas.addEventListener('click', (event) => onCanvasClick(event, camera, scene));
 */
export const onCanvasClick = (event, camera, scene) => {
    const { x, y } = getNormalizedMousePosition(event, event.target);
    console.log(`Cursor click on: X=${x}, Y=${y}`);

    const rayOrigin = new THREE.Vector3();
    camera.getWorldPosition(rayOrigin);

    const rayDirection = new THREE.Vector3(x, y, 0.5)
        .unproject(camera)
        .sub(rayOrigin)
        .normalize();

    const raycaster = new THREE.Raycaster();
    raycaster.set(rayOrigin, rayDirection);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const clickedObject = intersects[0];
        console.log("Objet cliqué :", clickedObject);
    }
};

/**
 * Calcule la position normalisée de la souris par rapport à un élément canvas.
 *
 * @param {MouseEvent} event - L'événement de la souris contenant les coordonnées de la souris.
 * @param {HTMLCanvasElement} canvasElement - L'élément canvas dont les dimensions sont utilisées pour normaliser la position.
 * @returns {{ x: number, y: number }} - Les coordonnées normalisées de la souris, où x et y varient de -1 à 1.
 *
 * @example
 * const mousePos = getNormalizedMousePosition(event, canvas);
 */
const getNormalizedMousePosition = (event, canvasElement) => {
    const canvasBounds = canvasElement.getBoundingClientRect();
    return {
        x: ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1,
        y: -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1,
    };
};

export const onWindowResize = (camera, renderer) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Mettre à jour la caméra avec le nouveau ratio
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Redimensionner le renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
};