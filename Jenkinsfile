pipeline {
    agent any

    stages {
        stage('Pre-build') {
            steps {
                echo 'Pre-build..'
                sh 'cd gateway && ./gradlew npmInstall'
            }
        }
        stage('Build Gateway') {
            steps {
                echo 'Building Gateway..'
                sh 'cd gateway && ./gradlew -Pprod bootJar jibBuildTar'
            }
        }
        stage('Build Orderbook') {
            steps {
                echo 'Building Orderbook..'
                sh 'cd orderbook && ./gradlew -Pprod bootJar jibBuildTar'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
    }
}
