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
		stage("Email Notification"){
			steps {
				mail bcc: '', body: 'Deployment result', cc: '', from: '', replyTo: '', subject: 'Testing sending email', to: 'changdt.eps@gmail.com'
			}
		}
	}

	post {
		always {
			echo "Always echo this line"
			// emailext body: 'testing',subject: 'testing', to: 'changdt.eps@gmail.com'
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
			// echo "Pipeline has been failed."
			mail bcc: '', body: "<b>Failure!</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "changdt.eps@gmail.com";
		}
		success {
			// echo "Successful!"
			mail bcc: '', body: "<b>Successful!</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "changdt.eps@gmail.com";
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
