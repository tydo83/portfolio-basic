import * as React from 'react';
import Grid from '@mui/material/Grid'
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import './projects.css'

const projectCards = [
    {
        img: 'img/instagram.png',
        title: 'Instagram Clone',
        alt:'Instagram Clone Thumbnail',
        address:'http://supreme-zoo.surge.sh/',
    },
    {
        img: 'img/covid-statistics.png',
        title: 'Covid Statistics',
        alt:'Covid Thumbnail',
        address:'http://project1.codemonkeyinny.com/',
    },
    {
        img: 'img/YWE_ver.1.png',
        title: 'Calorie Calculator ver.1',
        alt: 'Calorie Calculator ver.1 Thumbnail',
        address:'http://ci-final-td.surge.sh/'
    },
    {
        img: 'img/YWE_ver2.png',
        title: 'Calorie Calculator ver.2',
        alt: 'Calorie Calculator ver.2 Thumbnail',
        address:'http://project2.codemonkeyinny.com/'
    },
]

export default function Projects() {
    return (
        <div className='main_body'>
        <Grid container 
            alignItems="center"
            justifyContent="center"
            spacing={5}>
                {projectCards.map((projectCards, i) => {
                    return (
                    <Grid key={i} item>
                        <ProjectsCard {...projectCards}/>
                    </Grid>
                    )
                })}
        </Grid>
        </div>
    );
}