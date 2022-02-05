import * as React from 'react';
import Grid from '@mui/material/Grid'
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import './projects.css'

const projectCards = [
    {
        img: 'img/YWE.png',
        title: 'test',
        description: 'test',
        alt: 'test',
    },
    {
        img: 'img/YWE.png',
        title: 'test',
        description: 'test',
        alt: 'test',
    },
    {
        img: 'img/YWE.png',
        title: 'test',
        description: 'test',
        alt: 'test',
    },
    {
        img: 'img/YWE.png',
        title: 'test',
        description: 'test',
        alt: 'test',
    },
    {
        img: 'img/YWE.png',
        title: 'test',
        description: 'test',
        alt: 'test',
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