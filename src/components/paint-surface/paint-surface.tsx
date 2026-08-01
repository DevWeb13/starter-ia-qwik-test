import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type {
  BufferGeometry,
  Group,
  Material,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from "three";

export const PaintSurface = component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();

  // This task is intentionally visible-only: it lazy-loads and pauses the optional 3D scene.
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const canvas = canvasRef.value;

    if (!canvas) {
      return;
    }

    let renderer: WebGLRenderer | undefined;
    let scene: Scene | undefined;
    let camera: PerspectiveCamera | undefined;
    let panel: Group | undefined;
    let sweep: Group | undefined;
    let sweepLight: PointLight | undefined;
    let animationFrame = 0;
    let disposed = false;
    let isVisible = true;
    let resizeObserver: ResizeObserver | undefined;
    let visibilityObserver: IntersectionObserver | undefined;
    const geometries: BufferGeometry[] = [];
    const materials: Material[] = [];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const compactViewport = window.matchMedia("(max-width: 640px)").matches;

    const stopAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const render = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    const startAnimation = () => {
      if (reducedMotion || compactViewport || !isVisible || animationFrame) {
        return;
      }

      const animate = (time: number) => {
        animationFrame = 0;

        if (disposed || !isVisible || !renderer || !panel || !sweep) {
          return;
        }

        const seconds = time * 0.00035;
        panel.rotation.y = Math.sin(seconds * 1.3) * 0.06;
        panel.rotation.x = -0.13 + Math.cos(seconds) * 0.015;
        panel.position.y = Math.sin(seconds * 1.6) * 0.035;
        sweep.rotation.z = Math.sin(seconds * 0.8) * 0.14;

        if (sweepLight) {
          sweepLight.position.x = Math.sin(seconds * 1.7) * 3.1;
        }

        render();
        animationFrame = window.requestAnimationFrame(animate);
      };

      animationFrame = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      if (!renderer || !camera) {
        return;
      }

      const parent = canvas.parentElement;
      const width = Math.max(parent?.clientWidth ?? 520, 280);
      const height = Math.max(parent?.clientHeight ?? 560, 360);
      const pixelRatio = Math.min(
        window.devicePixelRatio,
        compactViewport ? 1 : 1.5,
      );

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      render();
    };

    const dispose = () => {
      disposed = true;
      stopAnimation();
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer?.dispose();
    };

    if (compactViewport || reducedMotion) {
      canvas.classList.add("is-static");
      cleanup(dispose);
      return;
    }

    void import("three").then((THREE) => {
      if (disposed || !canvas.isConnected) {
        return;
      }

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !compactViewport,
          powerPreference: "low-power",
        });
      } catch {
        canvas.hidden = true;
        canvas.parentElement?.classList.add("is-fallback");
        return;
      }

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0.08, 7.8);
      camera.lookAt(0, 0, 0);

      scene.add(new THREE.HemisphereLight(0xc9d5d7, 0x15191b, 1.7));

      const warmLight = new THREE.DirectionalLight(0xffb18a, 3.8);
      warmLight.position.set(-3.8, 3.4, 4.5);
      scene.add(warmLight);

      const coolLight = new THREE.DirectionalLight(0xa8d8ed, 2.2);
      coolLight.position.set(4.3, -1.2, 2.4);
      scene.add(coolLight);

      sweepLight = new THREE.PointLight(0xff6739, 3.5, 9);
      sweepLight.position.set(-3, 0.5, 2.5);
      scene.add(sweepLight);

      panel = new THREE.Group();
      panel.rotation.x = -0.13;
      panel.position.set(0, 0, 0);
      scene.add(panel);

      const panelShape = new THREE.Shape();
      panelShape.moveTo(-2.35, -1.15);
      panelShape.quadraticCurveTo(-2.48, -0.98, -2.37, -0.66);
      panelShape.lineTo(-1.78, 1.22);
      panelShape.quadraticCurveTo(-1.71, 1.42, -1.46, 1.47);
      panelShape.lineTo(1.9, 1.28);
      panelShape.quadraticCurveTo(2.28, 1.22, 2.38, 0.9);
      panelShape.lineTo(2.2, -1.1);
      panelShape.quadraticCurveTo(2.14, -1.34, 1.78, -1.4);
      panelShape.lineTo(-1.92, -1.42);
      panelShape.quadraticCurveTo(-2.26, -1.4, -2.35, -1.15);

      const panelGeometry = new THREE.ExtrudeGeometry(panelShape, {
        bevelEnabled: true,
        bevelSegments: compactViewport ? 2 : 4,
        bevelSize: 0.08,
        bevelThickness: 0.08,
        depth: 0.26,
        curveSegments: compactViewport ? 6 : 10,
        steps: 1,
      });
      geometries.push(panelGeometry);

      const panelMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x7e2f20,
        metalness: 0.88,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      });
      materials.push(panelMaterial);
      panel.add(new THREE.Mesh(panelGeometry, panelMaterial));

      const edgeGeometry = new THREE.EdgesGeometry(panelGeometry, 18);
      geometries.push(edgeGeometry);
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: 0xffc2a4,
        transparent: true,
        opacity: 0.52,
      });
      materials.push(edgeMaterial);
      const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      edgeLines.position.z = 0.02;
      panel.add(edgeLines);

      const creaseCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.25, -0.42, 0.35),
        new THREE.Vector3(-0.95, -0.72, 0.36),
        new THREE.Vector3(0.55, -0.57, 0.36),
        new THREE.Vector3(2.16, -0.28, 0.35),
      ]);
      const creaseGeometry = new THREE.TubeGeometry(
        creaseCurve,
        compactViewport ? 18 : 32,
        0.018,
        6,
        false,
      );
      geometries.push(creaseGeometry);
      const creaseMaterial = new THREE.MeshBasicMaterial({
        color: 0xffe3d2,
        transparent: true,
        opacity: 0.75,
      });
      materials.push(creaseMaterial);
      panel.add(new THREE.Mesh(creaseGeometry, creaseMaterial));

      const dents = new THREE.Group();
      const dentMaterial = new THREE.MeshBasicMaterial({
        color: 0x17191a,
        transparent: true,
        opacity: 0.46,
        side: THREE.DoubleSide,
      });
      materials.push(dentMaterial);

      [-1.42, -1.08, -0.7].forEach((x, index) => {
        const dentGeometry = new THREE.RingGeometry(
          0.08 + index * 0.025,
          0.15 + index * 0.03,
          compactViewport ? 12 : 20,
        );
        geometries.push(dentGeometry);
        const dent = new THREE.Mesh(dentGeometry, dentMaterial);
        dent.position.set(x, 0.38 - index * 0.19, 0.37);
        dent.scale.y = 0.54;
        dents.add(dent);
      });
      panel.add(dents);

      sweep = new THREE.Group();
      const sweepGeometry = new THREE.PlaneGeometry(0.14, 3.2);
      geometries.push(sweepGeometry);
      const sweepMaterial = new THREE.MeshBasicMaterial({
        color: 0xffddc7,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide,
      });
      materials.push(sweepMaterial);
      const sweepPlane = new THREE.Mesh(sweepGeometry, sweepMaterial);
      sweepPlane.position.set(0, 0.1, 0.42);
      sweepPlane.rotation.z = -0.25;
      sweep.add(sweepPlane);
      panel.add(sweep);

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas.parentElement ?? canvas);
      visibilityObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry?.isIntersecting ?? false;

        if (isVisible) {
          render();
          startAnimation();
        } else {
          stopAnimation();
        }
      });
      visibilityObserver.observe(canvas);
      canvas.classList.add("is-ready");
      resize();
      startAnimation();
    });

    cleanup(dispose);
  });

  return (
    <div class="paint-surface" aria-label="Surface de carrosserie éclairée">
      <div class="paint-surface__fallback" aria-hidden="true">
        <div class="fallback-panel">
          <span class="fallback-panel__glint" />
          <span class="fallback-panel__crease" />
          <span class="fallback-panel__dent fallback-panel__dent--one" />
          <span class="fallback-panel__dent fallback-panel__dent--two" />
          <span class="fallback-panel__edge" />
        </div>
      </div>
      <canvas
        ref={canvasRef}
        class="paint-surface__canvas"
        aria-hidden="true"
      />
      <div class="paint-surface__caption">
        <span>Surface 01</span>
        <span>Reflet / finition</span>
      </div>
      <div class="paint-surface__coordinates" aria-hidden="true">
        <span>43°14′54″ N</span>
        <span>5°24′03″ E</span>
      </div>
    </div>
  );
});
