pipeline {
     agent any
     
     stages {
          
        stage("Build") {
            steps {
                  nodejs(nodeJSInstallationName: 'Node 16.2.0') {
                sh "npm install"
                sh "yarn add @material-ui/core"
                sh "npm run build"
                }
            }
        }          
    }
}
