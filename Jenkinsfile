pipeline {
    agent any
    stages {
        stage('Install') { 
            steps {
                sh 'yarn install' 
            }
        }    
        stage('Build') { 
            steps {
                sh 'yarn build'
                sh 'ls'
            }
        }
    }
}
