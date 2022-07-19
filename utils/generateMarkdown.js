// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license !== 'no license') {
  return `
![badge](https://img.shields.io/badge/license-${license}-blue)
  `;
} else {
  return ' ';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Table of Contents

1. [Description](#description)
2. [Instructions](#instructions)
3. [Usage Info](#usageinfo)
4. [Testing Info](#testinfo)
5. [License Info](#licenselist)
6. [Any Questions](#questions)

## Description, Installation, Usage, Contributing, and Tests  

<a name="description"></a>
### Description 
${data.description}

<a name="instructions"></a>
### Instructions
${data.instructions}

<a name="usageinfo"></a>
### Usage Info
${data.usageInfo}

<a name="testinfo"></a>
### Testing Info
${data.testInfo}

<a name="licenselist"></a>
### License Info
${renderLicenseBadge(data.licenseList)}

<a name="questions"></a>
## Questions
${data.githubUser}

${data.emailAddress}


`;
}

module.exports = generateMarkdown;
