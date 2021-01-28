pipeline {
	agent any
	options {
		timestamps()
		timeout (time: 1, unit: "SECONDS")
	}
	stages {
		stage("Build"){
			steps {
				echo "Building the application..."
			}
		}
		stage("Test"){
			steps {
				echo "Testing the application..."
			}
		}
		stage("Deploy"){
			steps {
				echo "Deploying the application..."
			}
		}
	}
}
