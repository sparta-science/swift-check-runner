const core = require('@actions/core');

async function run() {
  try {
    const checkScreen = core.getInput('checkScreenIsUnlocked');
    core.info(`Should check if screen is locked: ${checkScreen} ...`);

    if (checkScreen === 'true') {
      core.info(`Should check if screen is locked!`);
    }

    core.setOutput('reasons', 'testing');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
