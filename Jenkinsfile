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
		// Option 1: sending email
		stage("Email Notification"){
			steps {
				// mail bcc: '', body: 'Deployment result', cc: '', from: '', replyTo: '', subject: 'Testing sending email', to: 'changdt.eps@gmail.com'

				mail bcc: '', body: "<b>The build successful!</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Notify on Stage: Project name -> ${env.JOB_NAME}", to: "changdt.eps@gmail.com";
			}
		}
	}

	post {
		always {
			// echo "Always echo this line"
			// emailext body: 'testing',subject: 'testing', to: 'changdt.eps@gmail.com'
			script {
				if (currentBuild.currentResult == 'FAILURE') {
					echo "FAILURE!"
				}
				else if (currentBuild.currentResult == 'UNSTABLE') {
					echo "UNSTABLE!"
				}
				else {
					echo "SUCCESSFUL!"
				}
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

		// Option 2: sending email when the build faied
		failure {
			// echo "Pipeline has been failed."
			mail bcc: '', body: "<b>Failure!</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Notify on Post section: Project name -> ${env.JOB_NAME}", to: "changdt.eps@gmail.com";
		}
		// Option 2: sending email when the build passed
		success {
			// echo "Successful!"
			mail bcc: '', body: "<b>Successful!</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Notify on Post section: Project name -> ${env.JOB_NAME}", to: "changdt.eps@gmail.com";
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
