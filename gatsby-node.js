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
                    'CSS',
                    'MaterialUI',
                    'PHP',
                    'MySQL',
                    'Azure',
                    '.NET'
                ],
                imageName: 'dealerpolicy.png',
                companyLink: 'https://dealerpolicy.com/'
            }
        ]
      },
    })
  }