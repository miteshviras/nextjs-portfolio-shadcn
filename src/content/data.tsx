export const about = () => {
    const firstName = 'Mitesh';
    const lastName = 'Viras';

    return {
        title: `I'm ${firstName} ${lastName}`,
        subTitle: "Hello, I'm Mitesh Viras, a web developer with a specialization in backend development. My expertise lies in programming languages such as PHP and Node.js. I'm passionate about crafting robust and efficient solutions to enhance the functionality and performance of web applications. Let's build something extraordinary together!",
        firstName: firstName,
        lastName: lastName,
        email: 'virashmitesh@gmail.com',
        occupation: 'Backend Developer',
        profileImageUrl: 'https://avatars.githubusercontent.com/u/87187589?s=400&u=49263c787eb53783a81b9ab29c0b00dbcb12de1f&v=4'
    }
}

export const skills = () => {
    return [
        {
            skill: 'Php/Laravel',
            level: 80
        },
        {
            skill: 'Node.js',
            level: 75
        },
        {
            skill: 'Adonis.js',
            level: 75
        },
        {
            skill: 'JavaScript',
            level: 90
        },
        {
            skill: 'TypeScript',
            level: 80
        },
        {
            skill: 'Next.js',
            level: 45
        },
        {
            skill: 'CSS',
            level: 65
        },
        {
            skill: 'Tailwind CSS',
            level: 75
        },
        {
            skill: 'Bootstrap',
            level: 70
        },
        {
            skill: 'PostgreSQL',
            level: 70
        },
        {
            skill: 'MYSQL',
            level: 70
        },
        {
            skill: 'Redis',
            level: 60
        },
         {
            skill: 'Git',
            level: 60
        }
    ]
}
