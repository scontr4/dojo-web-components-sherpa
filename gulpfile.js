//gulp
var gulp = require('gulp');

// plugins

var sonarqubeScanner = require('sonarqube-scanner');

//Task Sonar
gulp.task('sonar', function(callback) {
    sonarqubeScanner({
        serverUrl: process.env.SONAR_CLOUD_ENDPOINT,
        token: process.env.SONAR_CLOUD_TOKEN,
        options: {
            'sonar.projectName': process.env.SONAR_CLOUD_PROJECT_NAME,
            'sonar.login': process.env.SONAR_CLOUD_TOKEN,
            'sonar.organization': process.env.SONAR_CLOUD_ORG,
            'sonar.projectKey': process.env.SONAR_CLOUD_PROJECT_KEY,
            'sonar.branch.name': 'master',
            'sonar.language': 'ts',
            'sonar.sources': 'src',
            'sonar.typescript.lcov.reportPaths': 'coverage/bbog-dig-angular-template-web-ui/lcov.info',
            'sonar.exclusions': '**/*.spec.ts'
        }
    }, callback);
});