import { useEffect, useRef } from 'react'
import ExperienceBlock from './experience-block'
import { useInView } from 'framer-motion'

export default function Experience() {
    return (
        <div className="lg:w-1/2" id="experience">
            <h2 className="mb-5 font-heading text-2xl font-bold md:text-3xl xl:text-4xl">
                My Experience
            </h2>
            <ExperienceBlock
                props={{
                    timeRange: 'January 2023 - Present',
                    company: 'J.B. Hunt Transport, Inc.',
                    title: 'Software Engineer I',
                    description:
                        'Working with Genesys Engage On-Prem, I analyze and modify existing routing strategies as well as design, construct and test new software & strategies to meet business needs. I also create reports for business use to allow better insights to call volumes and handling.',
                    color: 'blue',
                }}></ExperienceBlock>
            <ExperienceBlock
                props={{
                    timeRange: 'July 2021 - January 2023',
                    company: 'J.B. Hunt Transport, Inc.',
                    title: 'Contact Center Specialist',
                    description:
                        'Worked with business leaders to design and maintain complex, enterprise-wide Contact Center routing solutions. Worked with leading edge CC technologies to ensure the needs and expectations of both the business and our customers are not only met, but also exceeded.',
                    color: 'orange',
                }}></ExperienceBlock>
            <ExperienceBlock
                props={{
                    timeRange: 'December 2019 - July 2021',
                    company: 'J.B. Hunt Transport, Inc.',
                    title: 'Transportation Manager',
                    description:
                        'Managed a fleet of approx. 30 drivers. Dispatched, managed pay, and discussed safety with the fleet. Ensured drivers were DOT compliant and following FMCSA regulations. Handled other duties as assigned.',
                    color: 'green',
                }}></ExperienceBlock>
            <ExperienceBlock
                props={{
                    timeRange: 'July 2019 - December 2019',
                    company: 'J.B. Hunt Transport, Inc.',
                    title: 'Customer Experience Representative',
                    description:
                        'Managed customer relations and priced freight upon request. Worked with truckload division to book freight as well as managed capacity for market areas, among other duties assigned.',
                    color: 'raisin',
                }}></ExperienceBlock>
        </div>
    )
}
