pipeline {
    agent any

    stages {
        stage('Pre-build') {
            steps {
                echo 'Pre-build..'
            }
        }
        stage('Build Gateway') {
            steps {
                echo 'Building Gateway..'
                sh 'cd gateway && ./gradlew -Pprod bootJar'
            }
        }
        stage('Build Orderbook') {
            steps {
                echo 'Building Orderbook..'
                sh 'cd orderbook && ./gradlew -Pprod bootJar'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
    }
}
