pipeline {
	agent any
	options {
		timestamps()
		timeout (time: 1, unit: "MINUTES")
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

	post {
		always {
			echo "Alway show this message."
		}
		changed {
			echo "There are some changes from previous run."
		}
		fixed {
			echo "Pipeline has been fixed."
		}
		regression {
			echo "Pipeline's status is failure, unstable, aborted and the previous run was successful."
		}
		aborted {
			echo "Pipeline has been aborted. Usually due to the pipeline being manually aborted"
		}
		failure {
			echo "Pipeline has been failed."
		}
		success {
			echo "Successful!",
			mail to: 'changthi.dinh2@dxc.com',
			subject: "Deployment Result: ${currentBuild.fullDisplayName}",
			body: "Deploy successful with ${env.BUILD_URL}"
		}
		unstable {
			echo "Unstable."
		}
		unsuccessful {
			echo "unsuccessful."
		}
		cleanup {
			echo "clean up."
		}
	}
}
