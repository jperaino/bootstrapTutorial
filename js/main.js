$(document).ready(function(){
    

    // MARK: - PROPERTIES ----------------------------------------------------------------------------

    	// Scene, camera, renderer
    	var scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x90caf9 );

		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0,0,1.5);

		var renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight);

	// MARK: - ON LOAD DO ----------------------------------------------------------------------------

		// Add tooltips
		$('.btn').tooltip({title: "Click me!", animation: true, placement: "right"})

		// Add WebGL scene to HTML
		document.body.appendChild( renderer.domElement );

		// Add a cube
		var geometry = new THREE.BoxGeometry(.75,.75,.75);
		var material = new THREE.MeshBasicMaterial({color: 0x5d99c6});
		var cube = new THREE.Mesh(geometry, material);
		scene.add( cube );
	
		render();

	
	// MARK: - EVENT LISTENERS --------------------------------------------------------------------

		// Listen for window resize
		window.addEventListener( 'resize', onWindowResize, false );

	// MARK: - ACTIONS ----------------------------------------------------------------------------

		// Do something when the button is pushed
		$('.btn').on('click', function() {
	    	bootstrap_alert.warning('Added a shape');
	    	alertTimeout(1500);

	    	addSphereOnClick()

    	});

    	// Keep the view boundary updated
    	function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}

	// MARK: - METHODS ----------------------------------------------------------------------------


	// ___RENDER

		// Create the render loop
		function render() {
			requestAnimationFrame( render );

				// Set cube rotation
				cube.rotation.x += 0.01
				cube.rotation.y += 0.01
				cube.rotation.z += 0.01

				// Render scene
				renderer.render( scene, camera);
		}


	// ___ALERTS

		// Initialize success alert
		bootstrap_alert = function () {}
    	bootstrap_alert.warning = function(message) {
    	$('#placeholder-alert').html('<div class="alert alert-success fade in"><a class="close" data-dismiss="alert">×</a><span><strong>Message: </strong>'+message+'</span></div>')
   		}

		// Fade alerts out automatically
		function alertTimeout(wait){
	    	setTimeout(function(){
	    		$('#placeholder-alert').children('.alert:first-child').alert('close');
	    	}, wait);
	    }

    // ___GEOMETRY 

    	// Add a sphere on a click
		function addSphereOnClick() {

			var sphereGeo = new THREE.SphereGeometry(.5, 32, 32);
			var sphereMat = new THREE.MeshBasicMaterial({color: 0xc3fdff});
			var sphere = new THREE.Mesh( sphereGeo, sphereMat);

			scene.add( sphere );

		}



});