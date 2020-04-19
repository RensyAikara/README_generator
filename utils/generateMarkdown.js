function generateMarkdown(data) {
  return `
# ${data.title}

![GitHub code size](https://img.shields.io/github/languages/code-size/${data.username}/${data.repo})
![GitHub issues](https://img.shields.io/github/issues/${data.username}/${data.repo}.svg)

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.instruction}

![${data.usageImageName}](${data.usageImage})

## Credits
[${data.collaborator}](${data.collaboratorlink})

[${data.tutorial}](${data.tutoriallink})

## License
![License badge](https://img.shields.io/badge/license-MIT-red)

Copyright (c) ${data.year} ${data.name}. All rights reserved.
Licensed under the ![${data.licenseName}](${data.licenseLink})

## Contributing
${data.guidelines}

## Tests
${data.testing}
`
}

module.exports = generateMarkdown;
