export const about = () => {
    const firstName = 'Mitesh';
    const lastName = 'Viras';

    return {
        title: `I'm ${firstName} ${lastName}`,
        subTitle: "I do code and make content about it!",
        firstName: firstName,
        lastName: lastName,
        email: 'virashmitesh@gmail.com',
        occupation: 'Backend Developer',
        profileImageUrl: 'https://avatars.githubusercontent.com/u/87187589?s=400&u=49263c787eb53783a81b9ab29c0b00dbcb12de1f&v=4'
    }
}

export const skils = () => { 
    return [
        {
            skill: 'Php/Laravel',
            level: '80%'
        },
        {
            skill: 'Node.js',
            level: '75%'
        },
        {
            skill: 'Adonis.js',
            level: '75%'
        },
        {
            skill: 'JavaScript',
            level: '90%'
        },
        {
            skill: 'TypeScript',
            level: '80%'
        },
        {
            skill: 'Next.js',
            level: '45%'
        },
        {
            skill: 'css',
            level: '65%'
        },
        {
            skill: 'PostgreSQL',
            level: '70%'
        },
        {
            skill: 'MYSQL',
            level: '70%'
        },
        {
            skill: 'Redis',
            level: '60%'
        }
    ]
}
