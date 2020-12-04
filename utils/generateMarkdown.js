// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `# **${data.title}**

  ![Badges](https://img.shields.io/github/languages/top/${data.username}/${data.repository}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repository}?style=flat&logo=appveyor)

  ## Description 

  ${data.description}

  ## Table of Contents 

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Test)
  - [Repository](#Repository)
  - [GitHub Info](#GitHub)

  ## Installation
  
  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License 
  
  ${data.license}

  ## Contribution

  ${data.contribution}

  ## Test 

  ${data.test}

  ## Repository 

  [Project Repo](${data.repository})

  ## GitHub
  
  ![Image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;