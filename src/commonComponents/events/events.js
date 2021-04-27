import './events.css';
export default function Events() {
    const eventsData=[
        {
            month:'Apr',
            date:29,
            time:'4:00 pm',
            day:'Thu',
            title:'CI/CD Pipelines with Jenkins and OpenShift Webinar by Red Hat',
            desciption:'Transforming Test-Driven Workflows Into CI/CD Pipelines With Jenkins. By using Jenkins and Red Hat® OpenShift®, you can build CI/CD pipelines to automate your development process and improve time-to-market of your application',
        },
        {
            month:'May',
            day:'Wed',
            date:12,
            time:'12:00 pm',
            title:'Jenkins Templating Engine CDF Online Meetup',
            desciption:'Steven Terrana will talk about using the Jenkins Templating Engine for Pipeline Modeling.',
        },
        {
            month:'Jun',
            date:24,
            day:'Tue',
            time:'9:00 am',
            title:'cdCon Online',
            desciption:'Jenkins will be represented at cdCon organized by the Continuous Delivery Foundation. We will have multiple talks and a Birds of Feather session there.',
        },
        {
            month:'Jun',
            date:25,
            day:'Fri',
            time:'9:00 am',
            title:'Jenkins Contributor Summit Online',
            desciption:'The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project. The summit brings together community members to learn, meet, and help shape the future of Jenkins.',
        },
        {
            month:'Sep',
            day:"Wed",
            date:30,
            time:'9:00 am',
            title:'DevOps World Online',
            desciption:'Jenkins will be represented at the DevOps World conference. There will be community and Continuous Delivery Foundation tracks, and many talks from Jenkins practitioners.',
        }
    ]
    return (
        <div>
            <div className="container events-Container">
                <div className="eventsRow">
                    {
                        eventsData.map((item)=>{
                            return (
                                <div className="event">
                                <div className="date-time-section">
                                    <div className='date'>
                                        <p>{item.month} {item.date}</p>
                                    </div>
                                    <div className="time">
                                        <p id='day'>{item.day}</p>
                                        <p id='time'>{item.time}</p>
                                    </div>
                                </div>
                                <h5 className='title'>
                                    {item.title}
                            </h5>
                                <p className='teaser'>{item.desciption}</p>
                            </div>
                            )
                        })
                   
                    }
                </div>
            </div>
        </div>


    )
}