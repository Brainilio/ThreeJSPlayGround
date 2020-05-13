
var camera, scene, renderer;
var geometry, material, mesh;
var line, mesh2
var points = [];
var geometry3;
var material3;
var cube;

function init() {
  camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set(0, 2, 10)
  camera.lookAt(0, 0, 0)
  scene = new THREE.Scene();

  window.addEventListener( 'resize', function( )
		{
			var WIDTH = window.innerWidth;
			var HEIGHT = window.innerHeight;
			renderer.setSize( WIDTH, HEIGHT );
			camera.aspect = WIDTH / HEIGHT;
			camera.updateProjectionMatrix( );
        } );
        
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#4c4e52")
  var size = 10;
  var divisions = 10;

var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );
  document.body.appendChild(renderer.domElement);

// Material -1
geometry3 = new THREE.BoxGeometry(0, 0.02, 0.05); 
material3 = new THREE.MeshLambertMaterial({color: 0xffffff})
cube = new THREE.Mesh(geometry3, material3); 
cube.position.y = 2; 
cube.position.x = 2
cube.position.z = 1.2
scene.add(cube);

//Material 1
  var material = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      linewidth: 2
    });

console.log(material.linewidth);
  points.push(new THREE.Vector3(0, 0, 2));
  points.push(new THREE.Vector3(2, 0, 2));


  var geometry = new THREE.BufferGeometry().setFromPoints(points);

  for(let i = 0; i< points.length; i++) { 
      points[i].x = 80; 
      console.log(points[i].x);
      
  }

  line = new THREE.Line( geometry, material );


  scene.add(line);
  console.log(line);  

//   Material 2

var geometry2 = new THREE.SphereGeometry(0, 10, 10);
var material2 = new THREE.MeshLambertMaterial({color: 0xffffff})
mesh2 = new THREE.Mesh(geometry2, material2); 

scene.add(mesh2);
  //   Controls
  controls = new THREE.OrbitControls( camera, renderer.domElement );

    // light
    var light = new THREE.PointLight(0xFFFFFF, 1, 500)
    light.position.set(20, 50, 30);
    scene.add(light);

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( './sounds/ambient.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	// sound.play();
});

  
}

function animate() {
  setTimeout(function() { mesh2.rotation.y += 0.01 }, 5000)
  // line.position.x += 0.002; 
  var endPoint = line.geometry.attributes.position.array[1];

  if(endPoint != 2) { 
   
      endPoint++
    
  }
  // setTimeout(function() {line.geometry.attributes.position.array[3] = 3}, 5000);  

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function sceneAdd() {
  init();
  animate();
}

sceneAdd();

var t1 = gsap.timeline().delay(2);
console.log(t1);
this.t1.to(this.mesh2.scale, 1.2, {x: 2, ease: Expo.easeOut})
this.t1.to(this.mesh2.scale, 1.2, {x: .5, ease: Expo.easeOut})
this.t1.to(this.mesh2.scale, 1.8, {x: 1, ease: Expo.easeOut})
this.t1.to(this.mesh2.position, 1, {y: 2, ease: Expo.easeOut})

var t2 = gsap.timeline().delay(5000); 
this.t2.to(this.cube.scale, 2, {x: 3})
// gsap.to(this.points[0], 0.8, {x: 0})

console.log(this.cube);

