import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

export default class About extends Component {
    render() {
        return (
            <Container fluid className={"content-container"}>
                <h4>About</h4>
                <p>
                    I love solving problems with programming, and I've always thought of data as being extremely
                    powerful. I'm curious by nature and I'm constantly learning new things. I've worked in many
                    industries over the years: aerospace, medical records, and philanthropy. Each of these
                    experiences has shaped me and it's taught me how to adapt quickly to new tools and
                    environments. It's enabled me to approach problems with a different lens than others. More
                    than anything, these experiences have equipped me with exceptional problem solving skills.
                </p>
                <p>
                    I was interested in programming and computers from a pretty young age. I remember getting
                    one of the original LEGO Mindstorms and building LEGO robots with my dad. I jailbroke a
                    number of iPhones in high school. I thought it was fun to customize some of the themes, and
                    I would try to code my own. I even created a media server for our home network. Whatever it
                    was, if it was related to computers in any way I was into it.
                </p>
                <p>
                    After reading Isaac Asimov's Foundation Trilogy in high school, I developed a profound
                    respect for statistical forecasting and the power of statistics. I went on to study these
                    subjects in college. I graduated with a Bachelor or Arts in Economics. I studied econometrics
                    heavily, and I took as many statistics classes as I could. Along the way, I learned various
                    programming languages to help out with the statistics. I picked up bits of Java, gretl, and R. I
                    started to really get the hang of programming then but it would be a few more years before
                    I got seriously invested in it.
                </p>
                <p>
                    After college I moved to Texas and started working for a medical records company. They helped
                    personal injury law firms to obtain medical records for their clients. I had an analyst type role
                    there. I would be responsible for hundreds of medical records requests at a time. In most cases
                    these requests are required by law to be completed within 30 days. However, they would often take
                    much longer than that. I was responsible for tracking these requests and making sure they were
                    fulfilled on time.
                </p>
                <p>
                    I was part of a small team and as such I had to wear a lot of different hats. I
                    learned to write basic queries for information about health care providers and the requests
                    that I was responsible for. I had to process records into the system and use OCR (Optical
                    Character Recognition). This position really taught me the basics of navigating a database.
                    On top of that, I was on the phone constantly, and I managed several support inboxes as well.
                </p>
                <p>
                    Eventually I developed a reputation for being able to close especially difficult requests.
                    The VA Hospital was often one of the worst culprits. They had no real sense of urgency and
                    requests to them could take anywhere from six months to a year. I worked with VA Hospitals
                    across several different regions to establish practices and procedures for completing these
                    requests. I learned to communicate really effectively in this role, and I was able to reduce
                    the average request time for the VA by half. Our team may have been small, but we would often
                    bring in the most records in the company per month.
                </p>
                <p>
                    After I moved back from Texas I ended up working in a warehouse for a bit. I felt really
                    underutilized and I really wanted a position that had more to do with programming. It was a
                    tough decision for me, but I chose to quit that job and look for a real software position.
                    I decided to attend the Data Science Immersive program at General Assembly. I had some time
                    to prepare before the course, so I learned as much Python as I could beforehand. I worked my
                    way through Zed Shaw's Learn Python the Hard Way, and I gained some exposure to PowerShell as
                    well. Once I got to the course I learned an incredible amount about Python and data science.
                    We covered a ton of topics including data cleaning, data visualization, and machine learning.
                    I quickly became proficient with the pandas library, and I got exposure to bunch of other
                    technologies like MongoDB, PostgreSQL, Docker, and AWS. I can't say enough good things about
                    this program. I learned so much here, and I made so many great memories.
                </p>
                <p>
                    Shortly afterwards, I found an intern position with a small aerospace contractor. I finally
                    got to spend most of my workday writing code. I was tasked with migrating the database that
                    handled their inventory system. They wanted to move to a new ERP system and they needed to
                    move the data from the old software and into the new system. The old software was pretty locked
                    down, and there wasn't a good way to programmatically access the data there. We were ultimately
                    forced to export the data to text files. This was less than ideal, but it forced me to learn a
                    lot about data cleaning and doing ETL type operations. More broadly, this position helped me
                    begin to understand how systems and databases communicate with each other and exchange data.
                    I learned a lot from this experience and it reinforced many of my newfound Python skills.
                </p>
            </Container>

        );
    }
}
