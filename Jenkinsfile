pipeline {
     agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
     }
    environment {
        CI = 'true' 
    }
     
     stages {
          
        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: 'Node 16.2.0') {
                sh "npm install"
                sh "npm start"
                }
            }
        }          
    }
}
