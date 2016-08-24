/*eslint-disable no-var */
var chromedriver = require('chromedriver');
var jar = require('selenium-server-standalone-jar');

module.exports = {
  src_folders: ['test/ui'],
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: jar.path,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.ie.driver': ''
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      screenshots: {
        enabled: false,
        path: 'reports'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
