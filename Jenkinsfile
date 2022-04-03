pipeline {
//    agent { docker { image 'node:16.13.1-alpine' } }
    agent any

    stages {
        stage('build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 16 LTS') {
                    sh 'npm --version'
                }
            }
        }
    }
}
