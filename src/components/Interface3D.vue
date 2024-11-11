<template>
    <div class="Interface3D">
        <div class="scene3D" ref="scene3D"></div>
    </div>
</template>

<script>
import { createCamera, createRenderer, createScene } from '@/three/sceneSetUp';
import { retrieveData } from '@/three/modelsLoarder';
import { animate } from '@/three/animation';

export default {
    name: "Interface3D",
    async mounted() 
    {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Créer la scène 3D
        const scene = createScene();
        const renderer = createRenderer(width, height, this.$refs.scene3D);
        const camera = createCamera(width, height);
        this.sceneContext = {
            scene,
            camera,
            renderer
        };

        // Récupérer les models 
        await retrieveData(this.sceneContext.scene);

        // Lancer la boucle d'animation
        animate(this.sceneContext)
        
        // Ecouter les actions sur la scène 
    }
}
</script>

<style>
.scene3D{
    background: rgb(255, 255, 255);
}

.scene3D canvas {
  width: 100vw !important; /* Largeur CSS */
  height: 90vh !important; /* Hauteur CSS */
}
</style>