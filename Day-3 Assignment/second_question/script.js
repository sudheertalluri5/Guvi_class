// Question: Create your own resume data in JSON format

sudheer_resume_data = {
    name : 'Sudheer Talluri',
    mobile_number : '7658979337',
    city : 'Hyderabad, Indian',
    linkedin_url : 'https://www.linkedin.com/in/sudheertalluri31/',
    short_description : 'A Full Stack Python Developer at J.P.Morgan Chase & Co looking for a job in the field of data science or AI/ML. With keen passion towards technology, redefined software development practices at Chase and became an integral part of the Analytics & Reporting team within no time while chasing fields of passion like Data science, AI/ML, NLP for more than 3 years. As a department representative in NIT Surat, portrayed good leadership skills being responsible for many academic, organisational and administrative changes in the ECE Department. Belief in continuous learning as fuel, always aim development to serve the organisation and society eventually.',
    work_experience : [
        {
            company_name : 'JP Morgan Chase & Co',
            duration: '20th August 2020 to Till Date',
            role : 'Python Developer (Robotic Process Automation',
            responsibilities : ['Leading development of automated solutions across BI platforms', 'Designing modern solutions by breaking down complex architectures', 'Plan, research and implement POCs for various new requirements', 'Train people globally in python to bring more expertise for automation'],
            projects : ['Cognos Data center migration', 'Cognos Automation portal', 'Cognos-ETL Scheduling automation', 'Password reset automation', 'Automated action tracker', 'Empowering technology talent'],
        },
        {
            company_name: 'Credit Suisse',
            duration: 'May 2019 to July 2019',
            role: 'NLP Research Intern',
            responsibilities : ['Build a “Relevance Model” as a part of “News Analysis” project using “Natural language processing” techniques', 'Appreciated and rewarded for my timeliness, attitude and work'],
            projects: ['Relevance Model']
        },
        {
            company_name: 'Conscript HR Advisory Pvt Ltd',
            duration: 'March 2020 to April 2020',
            role: 'Webscraping Intern',
            responsibilities : ['Build scrapers to scrape jobs from multiple job portals namely Naukri, Shine, LinkedIn, Indeed, Monster and BNI using different python web scraping libraries', 'Automate mails in BNI portal using python selenium'],
            projects: ['Webscraping Naukri, Shine, Indeed, Monster and BNI', 'BNI Mail automation']
        }
    ],
    education : [
        {
            college_name: 'Sardar Vallabhbhai National Institute of Technology',
            cgpa: '8.97',
            duration: 'July 2016 to July 2020',
            electives: ['Information Security', 'Data Science']
        }
    ],
    skills: ['Python', 'Django', 'Data Science', 'AI/ML', 'NLP', 'Web Scraping', 'Ansible', 'Hadoop']
}

console.log(sudheer_resume_data);
//END
