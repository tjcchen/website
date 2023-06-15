/**
 * /api/experience API handler
 * 
 * @author Andy Chen
 */

// GET request
export const GET = async (req, res) => {
  // mock data
  const data = [{
      header: {
        organization: "Baidu Inc.",
        logo: "/assets/images/baidu.jpg",
      },
      body: {
        role: "Senior Software Development Engineer",
        start: "2021-02-24",
        end: "Present",
        responsibilities: [
          "Being responsible for the development and maintenance of the self-build page, the largest traffic mobile site of HCG (Health Center Group) with over 120 million PV and 6 million CPM revenue per day.",
          "Leading the development of the desktop version of the self-build page, which helped millions of patients or people with ailments to obtain professional medical information in China.",
          "Working as the main owner of HCG's drug commercial project, building from 0 to 1, to facilitate the cooperation between my department and large drug corporations. In the years of 2021 and 2022, this project makes over 18 million in revenue for the company, and the number of our partners continues to grow by far.",
          "Building a brand new front-end development service platform for the whole FE team in my department to improve developers' productivity. The major functionalities of this platform include: front-end and back-end joint debugging service, product release information display, image optimizing tool, operation link generation service, etc.",
          "Continuously optimizing the loading speed of the self-build page via different front-end techniques, including caching (CDN), lazy loading, minifying resources, DNS prefetching, etc., to provide the most optimal user experience to our end-users",
          "PS: The HCG self-build page is a medical and health information aggregated website, which integrates authoritative health-related content from reputable providers, such as Youlai Doctors, Minfukang Pharmacy, Bohe Doctors etc., to Chinese end-users. The health-related content format includes articles, audio, video, questions and answers, and so forth. It is the No.1 medical platform for ordinary Chinese people to seek professional information in terms of traffic and authority."
        ],
      },
    },
    {
      header: {
        organization: "Chaince Limited( Hong Kong )",
        logo: "/assets/images/chaince.jpg",
      },
      body: {
        role: "Front-End Leader & Co-Founding Team Member",
        start: "2017-12-22",
        end: "2019-06-30",
        responsibilities: [
          "Being responsible for building the White Paper landing page in four languages, including English, Korean, Traditional Chinese, and Simplified Chinese to introduce what the company will do in the future to attract as much attention of a large number of users from all over the world as possible.",
          "Leading a team to start a project to collect the mailbox registration information of the first batch of users, the number of which reaches to 200, 000+ pieces from users of different countries and regions around the world.",
          "Being responsible for the front-end technology selection, platform building, and the function development of the core pages, including the page for exchange, home page etc.",
          "Designing and developing the switching function among four languages (English, Korean, Traditional Chinese and Simplified Chinese), different time zones, and currencies to expand the customers, and realize the internationalization function of the platform.",
          "Continuously optimizing the loading speed of the website, closely communicating with product managers to know the users' feedback, and then making optimization.",
          "Till April 30, 2019, the number of the platform's users has reached 115, 597.",
          "Chaince Limited is acquired by Hoo Technology Limited (Hong Kong) in June, 2019."
        ],
      },
    },
    {
      header: {
        organization: "TripAdvisor",
        logo: "/assets/images/tripadvisor.jpg",
      },
      body: {
        role: "Software Engineer",
        start: "2014-06-25",
        end: "2017-06-30",
        responsibilities: [
          "Leading the development of TripAdvisor China's home page (2015 version).",
          "Designing and developing the configurable function of the video screen on the website home page, which greatly promoted the tourism destinations of the Malaysian Tourism Bureau, Singapore Tourism Bureau, Australian Tourism Bureau and Indonesian Tourism Bureau, and this project made millions advertising revenue for the company.",
          "Completing the migration work of site maps, from Google Map and Baidu Map to Amap and Bing Map, which significantly improved the user experiences, and at the same time, assisted the website in upgrading from HTTP to HTTPS, and increased the security of the website in China",
          "Applying the Amap-related API to design and develop the POI, such as hotels, restaurants, and attractions, latitude and longitude coordinate optimization tool to optimize the deviation problem to improve the user experience.",
          "Developing the navigation page of the Destination Part for the website.",
          "Applying the Bing Translator-related API to develop the translating function of reviews from English to Chinese to eliminate language barriers for Chinese users.",
          "Participating in the design and development of the shopping mall coupon project for the mobile version of the website to make promotion for the shopping malls of Phuket Island, Bangkok, Chiang Mai, and Pattaya of Thailand in China.",
        ],
      },
    },
    {
      header: {
        organization: "Northeastern University (US)",
        logo: "/assets/images/neu.jpg",
      },
      body: {
        degree: "Master of Science - MS, Computer Software Engineering",
        start: "2020-09-01",
        end: "2020-09-01",
        responsibilities: []
      },
    },
    {
      header: {
        organization: "Tianjing University of Technology and Education",
        logo: "/assets/images/tute.png",
      },
      body: {
        degree: "Bachelor's degree, Electronic Commerce",
        start: "2014-07-01",
        end: "2010-09-01",
        responsibilities: []
      },
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200
  });
};