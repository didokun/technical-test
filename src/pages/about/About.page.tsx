import React, {FunctionComponent} from 'react';
import AboutData from './data';
import './About.css'

type Experience = {
    company: string;
    city: string;
    country: string;
    date: string;
    jobName: string;
    details?: string[];
    projects?: Experience[];
}
const About: FunctionComponent = () => {
    const companyInformation = (experience: Experience) => (
        <>
            <ul className="work-information">
                <li>Depuis {experience.date}</li>
                <li className="work-job-title">{experience.jobName}</li>
                <li className="work-experience-name">{experience.company}</li>
                <li>{experience.city}</li>
                <li>{experience.country}</li>
            </ul>
            {experience.details ? (
                <ul>
                    {experience.details.map((details, index) => (
                        <li key={index}>{details}</li>
                    ))}
                </ul>) : null}
            {experience.projects ? (<ul className="work-missions">
                {experience.projects.map((experience, index) => (
                    <li key={index}>
                        {companyInformation(experience)}
                        {experience.details ? (
                            <ul>
                                {experience.details.map((details, index) => (
                                    <li key={index}>{details}</li>
                                ))}
                            </ul>) : null}
                    </li>
                ))}
            </ul>) : null}
        </>
    );
    return <>
        <section id="about">
            <div className="about-container">
                <div className="about-image">
                    <img className="profile-pic"
                         src={AboutData.about.image}
                         alt={`${AboutData.about.firstName} ${AboutData.about.lastName} Profile Pic`}/>
                </div>
                <div className="about-description">
                    <h2>{AboutData.about.firstName} {AboutData.about.lastName}</h2>
                    <h3>{AboutData.about.jobTitle}</h3>
                    <div className="contact">
                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <ul>
                                {AboutData.about.information.map((info) => (
                                    <li key={info.key}>
                                        <span className="about-label">{info.key}:</span> <span
                                        className="about-value">{info.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="resume-download">
                            <a href={'/CV.pdf'} className="resume-download-button" download={true}>
                                <i className="fa fa-download"/>Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="education">
            <div className="education-title"><h1>Education</h1></div>
            <ul className="education-list">
                {AboutData.educations.map((education, index) => (
                    <li key={index} className="education-item">
                        <span className="education-school">{education.school}</span>
                        <ul className="education-information">
                            <li>{education.degree}</li>
                            <li>{education.date}</li>
                            <li>{education.city}</li>
                            <li>{education.country}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
        <section id="work">
            <div className="work-title"><h1>Education</h1></div>
            <ul className="work-list">
                {AboutData.experiences.map((experience, index) => (
                    <li key={index} className="work-item">
                        {companyInformation(experience)}

                    </li>
                ))}
            </ul>
        </section>
        <div id="skill">
            <div className="skill-title"><h1>Skills</h1></div>
            <ul className="skill-list">
                {AboutData.skills.map(skill => (
                    <li key={skill.title}>
                        <span className="bar-expand" style={{width: skill.percent, backgroundColor: skill.color}}/>
                        <em>{skill.title}</em>
                    </li>
                ))}
            </ul>
        </div>
    </>;
}

export default About;