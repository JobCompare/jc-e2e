const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: `${__dirname}/reports/cucumber.json`,
  output: `${__dirname}/reports/cucumber.html`,
  reportSuiteAsScenarios: true,
};

reporter.generate(options);
