import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Enhanced Workforce Productivity`,
    description: `Our system streamlines and automates various HR and administrative tasks, such as attendance tracking, leave management, and payroll processing. By automating these processes, 
    the system reduces manual effort and eliminates errors, enabling employees and HR personnel to focus on more value-added activities. Improved workforce productivity leads to increased efficiency, faster turnaround times, and better utilization of resources, ultimately contributing to revenue growth.`,
  },
  {
    title: `Accurate Decision-Making`,
    description: `Our system provides real-time access to comprehensive data related to employee performance, attendance, and other HR metrics. This data can be analyzed and presented in intuitive dashboards and reports, enabling managers and executives to make informed decisions. By having accurate and up-to-date information, organizations can identify areas for improvement, optimize resource allocation, and make strategic decisions that directly impact revenue generation.`,
  },
  {
    title: `Effective Workforce Planning`,
    description: `Our  system helps in effective workforce planning by providing insights into employee availability, skills, and performance. With this information, organizations can align their workforce with business needs, ensuring the right people are assigned to the right projects or tasks. This optimization of workforce allocation leads to improved efficiency, reduced downtime, and better customer service. By effectively utilizing their human resources, enterprises can enhance productivity, deliver projects on time, and generate more revenue.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your business
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
