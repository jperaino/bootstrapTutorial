$(document).ready(function(){
    

    $('.btn').on('click', function() {
    	bootstrap_alert.warning('Added a shape');
    	alertTimeout(1000);
    });

    bootstrap_alert = function () {}
    bootstrap_alert.warning = function(message) {
    	$('#placeholder-alert').append('<div class="alert alert-success fade in"><a class="close" data-dismiss="alert">×</a><span><strong>Message: </strong>'+message+'</span></div>')

    }

    function alertTimeout(wait){
    	setTimeout(function(){
    		$('#placeholder-alert').children('.alert:first-child').alert('close');
    	}, wait);
    }

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
			// var geometry = new THREE.BoxGeometry(1,1,1);
			// var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
			// var cube = new THREE.Mesh(geometry, material);
			// scene.add( cube );

			// Add a sphere
			// var sphereGeo = new THREE.SphereGeometry(.5, 32, 32);
			// var sphereMat = new THREE.MeshBasicMaterial({color: 0xc3fdff});
			// var sphere = new THREE.Mesh( sphereGeo, sphereMat);
			// scene.add( sphere );

			// Create the render loop
			function render() {
				requestAnimationFrame( render );


				renderer.render( scene, camera);
			}

			render();

	window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	var xCount = 0;
	var yCount = 0;
	var zCount = 0;

	function addSphereOnClick() {

		var sphereGeo = new THREE.SphereGeometry(.5, 32, 32);
		var sphereMat = new THREE.MeshBasicMaterial({color: 0xc3fdff});
		var sphere = new THREE.Mesh( sphereGeo, sphereMat);
		

		sphere.position.x = xCount;
		sphere.position.y = yCount;
		shpere.position.z = zCount;

		scene.add( sphere );

	}



});