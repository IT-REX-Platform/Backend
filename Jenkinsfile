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
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying....'
                sh 'rm -r /srv/Backend/*'
                sh 'cd gateway/build && mv jib-image.tar /srv/Backend/gateway.tar'
                sh 'cd orderbook/build && mv jib-image.tar /srv/Backend/orderbook.tar'
                sh 'touch /srv/Backend/deploy"
            }
        }
    }
}
