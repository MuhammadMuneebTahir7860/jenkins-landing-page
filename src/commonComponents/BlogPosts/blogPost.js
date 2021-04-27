import './blogPost.css';
export default function BlogPosts() {
    const blogSpotData = [
        {
            month: 'Apr',
            date: 21,
            title: 'Easily reuse Tekton and Jenkins X from Jenkins',
            teaser: 'What is Tekton? Tekton is a powerful and flexible open-source framework for creating CI/CD systems, allowing developers to build, test, and deploy across cloud providers and on-premise systems. Why use Tekton? Tekton pipelines have a number of benefits: they are cloud native and designed from the ground up for kubernetes each Tekton Pipeline is fully declarative and completely self described; it does not depend on any separate out of...',
            author1: 'James Strachan',
            node1: 'jenkins-x',
            node2: 'kubernetes',
            node3: 'pipeline',
            node4: 'tekton',
            node5: 'gitops',
            node6: 'nteroperability',
        },
        {
            month: 'Apr',
            date: 15,
            title: 'Jenkins Operator becomes an official sub-project!',
            teaser: 'We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project.What does it mean for the project?Becoming an official part of the Jenkins project was a major step towards better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins Operator project.Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage with...',
            author1: 'StrachanBartek Antoniak,',
            author2: ' Sylwia Brant',
            node1: 'kubernetes',
            node2: 'operator',
            node3: 'contributing',
            node4: 'announcement',
        },
        {
            month: 'Apr',
            date: '07',
            title: 'Welcome the SheCodeAfrica Contributhon participants!',
            teaser: 'The SheCodeAfrica Contributhon started April 1, 2021.The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors.This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations.The 5 mentees joining the...',
            author1: 'Mark Waite',
            node1: 'events',
            node2: 'community',
            node3: 'documentation',
            node4: 'outreach-programs',
            node5: 'contributing',
        },
        {
            month: 'Mar',
            date: 22,
            title: 'Welcome Ewelina Wilkosz - new Jenkins Governance Board member',
            teaser: 'We would like to announce changes in the Jenkins Governance Board.As it was announced earlier this month, Marky Jackson has decided to step down from his elected roles.On behalf of the Jenkins community, we would like to thank Marky for all contributions and for the continued participation in the Jenkins community.As an active Jenkins contributor and community leader, Marky helped a lot of initiatives...',
            author1: 'Oleg Nenashev',
            node1: 'community',
            node2: 'governance',
            node3: 'governance-board',
        },
        {
            month: 'Mar',
            date: 19,
            title: 'Jenkins accepted in SheCodeAfrica Contributhon',
            teaser: 'SheCodeAfrica is a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa.They provide resources and events that help women grow and achieve their personal and career goals.Their mentoring programs provide help and guidance as participants learn and grow in their careers.This year, SheCodeAfrica is organizing the SheCodeAfrica Contributhon.Contributhon is a boot camp where African women are paid to...',
            author1: 'Mark Waite',
            node1: 'events',
            node2: 'community',
        },
        {
            month: 'Mar',
            date: 17,
            title: 'Jenkins accepted in Google Summer Of Code 2021!',
            teaser: 'On behalf of the Jenkins GSoC org team,I am happy to announce that this year, for the first time, the Jenkins projects will be participating in Google Summer of Code 2021 as part of the Continuous Delivery Foundation (CDF) GSoC organization.We&#8217;re very excited to have the Jenkins project participate in GSoC as part the CDF mentoring organisation along with fellow CDF projects such as Ortelius, Screwdriver, Spinnaker, and...',
            author1: 'Kara de la Marck',
            node1: 'gsoc',
            node2: 'gsoc2021',
            node3: 'events',
            node4: 'community',
        },
        {
            month: 'Mar',
            date: 15,
            title: 'Update-Center certificate rotation',
            teaser: 'On the 29th of March 2021, we’ll rotate the Jenkins update center certificate.The existing certificate expires in April 2021.When the new certificate is installed on March 29, 2021, Jenkins versions older than 2.178 (April 2018), won’t be able to communicate with the default and experimental update centers.Instances using alternative update centers (self-hosted or vendor-provided) will not be affected by this change.Regarding plugins update, the...',
            author1: 'Olivier Vernin',
            node1: 'announcement',
            node2: 'update-center',
        },
        {
            month: 'Feb',
            date: 17,
            title: 'cdCon 2021 - Call for Jenkins Proposals',
            teaser: 'Hear ye! Hear ye! Jenkins Community,cdCon 2021 (the Continuous Delivery Foundation&#8217;s annual flagship event) is happening June 23-24 and its call for papers is open!This is your chance to share what you&#8217;ve been doing with Jenkins.Are you building something cool?Using it to solve real-world problems?Are you making things fast?Secure? Or maybe you&#8217;re a contributor and want to share what&#8217;s new.In all cases, we want to...',
            author1: 'Continuous Delivery Foundation',
            node1: 'cdcon',
            node2: 'cfp',
            node3: 'cicd',
            node4: 'continuous delivery',
        },
        {
            month: 'Feb',
            date: 16,
            title: 'Jenkins Contributor Summit Online Feb 23-25',
            teaser: 'The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project.We&#8217;re hosting an online summit this year to encourage contributors from around the world to meet, discuss, and plan for the future.The Contributor Summit will be Tuesday, February 23rd 2021 through Thursday, February 25, 2021.The summit brings together community members to learn, meet, and help shape the future of Jenkins.In the...',
            author1: 'Mark Waite',
            node1: 'community',
            node2: 'events',
        },
        {
            month: 'Feb',
            date: '08',
            title: 'Docker image updates',
            teaser: 'Beginning with Jenkins 2.279 and Jenkins 2.263.4, the Jenkins project is upgrading the base operating system and Java version used in the jenkins/jenkins:latest and jenkins/jenkins:lts images.The update replaces OpenJDK 8u242 with AdoptOpenJDK 8u282 and replaces Debian 9 ("Stretch") with Debian 10 ("Buster").Why?We&#8217;re changing the base image so that we have a better supported operating system and a more current Java release for Jenkins controllers.Better...',
            author1: 'Mark Waite',
            node1: 'announcement',
            node2: 'docker',
            node3: 'platform-sig',
        }

    ]

    return (
        <div className='container blogPostContainer'>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <h3 id='BlogPost-Title'>Recent Blog Posts</h3>
                </div>
                <div className="col-lg-1"></div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
            {
                blogSpotData.map((obj)=>{
                    return(
                        <div className='blogPostSection'>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <div className='date-Section'>
                                    <div className='month-section'>
                                        <p>{obj.month}</p>
                                    </div>
                                    <div className='day-Section'>
                                        <p>{obj.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3" id='title'>
                                <h5>
                                    {obj.title}
                                </h5>
                            </div>
                        </div>
                        <div id='teaser'>
                            {obj.teaser}
                        </div>
                        <div className='attrs'>
                            <a href="#">{obj.author1}</a>
                            <a href="#">{obj.author2}</a>
                            <ul class='list-inline tags'>
                                <li>
                                    <a class='tag-link' href='/node/tags/jenkins-x/'>
                                        {obj.node1}</a>
                                </li>
                                <li>
                                    <a class='tag-link' href='/node/tags/kubernetes/'>
                                    {obj.node2} </a>
                                </li>
                                <li>
                                    <a class='tag-link' href='/node/tags/pipeline/'>
                                    {obj.node3} </a>
                                </li>
                                <li>
                                    <a class='tag-link' href='/node/tags/tekton/'>
                                    {obj.node4} </a>
                                </li>
                                <li>
                                    <a class='tag-link' href='/node/tags/gitops/'>
                                    {obj.node5} </a>
                                </li>
                                <li>
                                    <a class='tag-link' href='/node/tags/interoperability/'>
                                    {obj.node6}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    )
                })
                   
                    }
                </div>
                <div className="col-lg-1"></div>
            </div>







        </div>
    )
}