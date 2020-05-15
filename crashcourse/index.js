// var camera, scene, renderer;
// var geometry, material, mesh;
// var line, mesh2;
// var points = [];
// var geometry3;
// var material3;
// var cube;
// var cloudGeo, cloudMaterial
// let cloud; 


// function init() {

//   // New scene
//   scene = new THREE.Scene();

//   // Scene configs 
//   scene.fog = new THREE.FogExp2(0x03544e, 0.001); 

//   // Camera position;
//   camera = new THREE.PerspectiveCamera(
//     60,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
//   );
//     camera.position.z = 1; 
//     camera.rotation.x = 1.16; 
//     camera.rotation.y = -0.12; 
//     camera.rotation.z = 0.27; 
  


//   // Responsive resizing
//   window.addEventListener("resize", function() {
//     var WIDTH = window.innerWidth;
//     var HEIGHT = window.innerHeight;
//     renderer.setSize(WIDTH, HEIGHT);
//     camera.aspect = WIDTH / HEIGHT;
//     camera.updateProjectionMatrix();
//   });

//   // Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setClearColor(scene.fog.color);
//   var size = 10;
//   var divisions = 10;
//   document.body.appendChild(renderer.domElement);


//   // Controls
//   // controls = new THREE.OrbitControls( camera, renderer.domElement );

//   // Light
//   // var light = new THREE.PointLight(0xffffff, 1, 500);
//   // light.position.set(20, 30, 20);
//   let ambient = new THREE.AmbientLight(0x555555); 
//   scene.add(ambient); 
  
//   let directionalLight = new THREE.DirectionalLight(0xff8c19); 
//   directionalLight.position.set(0, 0, 1); 
//   scene.add(directionalLight); 

//   let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
//   orangeLight.position.set(200,300,100);
//   scene.add(orangeLight);
//   let redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
//   redLight.position.set(100,300,100);
//   scene.add(redLight);
//   let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
//   blueLight.position.set(300,300,200);
//   scene.add(blueLight);


//   // Load texture 
//   // instantiate a loader
// var loader = new THREE.TextureLoader();

// // load a resource
// loader.load(
// 	// resource URL
// 	'img/smoke.png',
// 	// onLoad callback
// 	function ( texture ) {
// 		// in this example we create the material when the texture is loaded
// 		var cloudMaterial = new THREE.MeshLambertMaterial( {
// 			map: texture
//      });
//     });
  
// //   let loader = new THREE.TextureLoader(); 
// //   loader.load('./img/smoke.png', function(texture) { 
// //     cloudGeo = new THREE.PlaneBufferGeometry(500, 500); 
// //     cloudMaterial = new THREE.MeshLambertMaterial({ 
// //       map: texture, 
// //       transparent: true
// //   }); 
// // }); 

// for(let p = 0; p<50; p++) {
//   cloud = new THREE.Mesh(cloudGeo, cloudMaterial); 
//   cloud.position.set(
//     Math.random()*800 - 400, 500, Math.random()*500-500
//   ); 
//   cloud.rotation.x = 1.16; 
//   cloud.rotation.y = -0.12; 
//   cloud.rotation.z = Math.random()*2*Math.PI; 
//   cloud.material.opacity = 0.55; 
//   scene.add(cloud); 
//   console.log(cloud);
// }

//     // Material box
//   var geometry2 = new THREE.BoxGeometry(1, 80, );
//   var material2 = new THREE.MeshLambertMaterial({ color: 0xffffff });
//   mesh2 = new THREE.Mesh(geometry2, material2);
  

//   // create an AudioListener and add it to the camera
//   var listener = new THREE.AudioListener();
//   camera.add(listener);
//   // create a global audio source
//   var sound = new THREE.Audio(listener);

//   // load a sound and set it as the Audio object's buffer
//   var audioLoader = new THREE.AudioLoader();
//   audioLoader.load("./sounds/ambient.mp3", function(buffer) {
//     sound.setBuffer(buffer);
//     sound.setLoop(true);
//     sound.setVolume(0.5);
//     sound.play();
//   });


//   // Add objects to scene
//   // scene.add(mesh2);
//   // scene.add(light);

// }

// // Looping
// function animate() {
//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

// // Add everything to scene
// function sceneAdd() {
//   init();
//   animate();
// }

// sceneAdd();

// // Animations
// // var t1 = gsap.timeline().delay(2);
// // this.t1.to(this.mesh2.position, 1, { y: 2, ease: Expo.easeOut });


let scene, camera, cloudParticles = []

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
  camera.position.z = 1;
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  let ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  let directionalLight = new THREE.DirectionalLight(0xff8c19);
  directionalLight.position.set(0,0,1);
  scene.add(directionalLight);

  let orangeLight = new THREE.PointLight(0x406340,50,450,1.7);
  orangeLight.position.set(200,300,100);
  scene.add(orangeLight);
  let redLight = new THREE.PointLight(0x293029,50,450,1.7);
  redLight.position.set(100,300,100);
  scene.add(redLight);
  let blueLight = new THREE.PointLight(0x182918,50,450,1.7);
  blueLight.position.set(300,300,200);
  scene.add(blueLight);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  scene.fog = new THREE.FogExp2(0x262626, 0.001);
  renderer.setClearColor(scene.fog.color);
  document.body.appendChild(renderer.domElement);

  let loader = new THREE.TextureLoader();
  loader.load("img/smoke.png", function(texture){
    cloudGeo = new THREE.PlaneBufferGeometry(500,500);
    cloudMaterial = new THREE.MeshLambertMaterial({
      map:texture,
      transparent: true
    });

    for(let p=0; p<50; p++) {
      let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
      cloud.position.set(
        Math.random()*800 -400,
        500,
        Math.random()*500-500
      );
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random()*2*Math.PI;
      cloud.material.opacity = 0.55;
      cloudParticles.push(cloud);
      scene.add(cloud);
    }
  });


    render();
}
function render() {
  cloudParticles.forEach(p => {
    p.rotation.z -=0.001;
    // p.position.x += Math.random() * 3
  });
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

init();

let apiData; 
let apiCountry; 

fetch('https://api.airvisual.com/v2/countries?key=2459f634-caa6-4274-9ce4-b1ddc4399580')
.then(response => { 
  return response.json();
}).then(users => { 
  apiData = users.data;
  for(let i = 0; i<apiData.length; i++) { 
    if(apiData[i].country == "USA") { 
      apiCountry = apiData[i].country;
      console.log(apiCountry);
    }
  }
})

