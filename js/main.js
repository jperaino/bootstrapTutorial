$(document).ready(function(){
    
	$('.alert').hide();

    $('.btn').on('click', function() {
    	$('.alert-success').fadeTo(1000, 500);
    });


    // Set up scene, camera, renderer
			var scene = new THREE.Scene();
			scene.background = new THREE.Color( 0x90caf9 );
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			camera.position.set(0,0,10);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			//renderer.setClearColorHex(0x00ff00, .5);
			document.body.appendChild( renderer.domElement );

			// Add a cube
			var geometry = new THREE.BoxGeometry(1,1,1);
			var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
			var cube = new THREE.Mesh(geometry, material);
			scene.add( cube );

			

			// Create the render loop
			function render() {
				requestAnimationFrame( render );

				cube.rotation.x += 0.01
				cube.rotation.y += 0.01

				renderer.render( scene, camera);
			}

			render();



});