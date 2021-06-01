pipeline {
    agent any
    stages {
        stage('Install') { 
            steps {
                sh 'npm install'
                sh ' yarn add @material-ui/core'
            }
        }    
        stage('Build') { 
            steps {
                sh 'yarn build'
            }
        }
    }
}
