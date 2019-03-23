exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    deletePage(page)
    createPage({
      ...page,
      context: {
        socialMediaLinks: {
            linkedIn: 'https://www.linkedin.com/in/alec-caputo-80929199/',
            github: 'https://github.com/aleccaputo'
        },
        email: 'aleccaputo7@gmail.com',
        jobs: [
            {
                description: 'Full Stack Software Engineer',
                company: 'DealerPolicy',
                technologies: [
                    'Javascript',
                    'ReactJS',
                    'Webpack',
                    'Grunt',
                    'CSS/LESS',
                    'jQuery',
                    'MaterialUI',
                    'PHP',
                    'MySQL',
                    'Azure',
                    '.NET C#'
                ],
                experience: [
                    'Advocated for, researched, and moved the entire frontend from ES5/Require.Js to ES6 native import/export using webpack',
                    'Write cutting edge ES2017+ Javascript',
                    'React.js using the latest Context API and React hooks',
                    'Maintain a PHP/MySQL app using Doctrine ORM',
                    'Develop .NET API\'s',
                    'Familiar with the Azure ecosystem, including Azure Functions.'
                ],
                imageName: 'dealerpolicy.png',
                companyLink: 'https://dealerpolicy.com/'
            }
        ],
        internships: [
            {
                company: 'Unidesk',
                title: 'IT Intern',
                technologies: [
                    'Deployed and maintained a network monitoring tool using cacti',
                    'Netowrk administration',
                    'On-site VM deployments and server maintancince',
                    'IT Helpdesk',
                ],
                companyLink: 'https://docs.citrix.com/en-us/unidesk.html'
            },
            {
                company: 'SimpliVity',
                title: 'IT Intern',
                technologies: [
                    'Managing and monitoring VM farms and vCenters using VMware vSphere',
                    'ESXi',
                    'Apex',
                    'Helpdesk'
                ],
                companyLink: 'https://www.hpe.com/us/en/integrated-systems/simplivity.html'
            }
        ]
      },
    })
  }