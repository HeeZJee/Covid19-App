pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'npm install'
                sh 'yarn install'
                sh 'yarn add @material-ui/core'
                sh 'npm run build'
            }
        }
    }
}
