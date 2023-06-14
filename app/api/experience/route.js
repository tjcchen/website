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
        company: "Baidu Inc.",
        logo: "",
      },
      body: {
        role: "Senior Software Development Engineer",
        start: "2021-02-24",
        end: "present",
        responsibilities: [
          "Being Response for ...",
          "Lead the Developerment of ...",
        ],
      },
    },
    {
      header: {
        company: "Chaince Limited( Hong Kong )",
        logo: "",
      },
      body: {
        role: "Front-End Leader & Co-Founding Team Member",
        start: "2017-12-22",
        end: "2019-06-30",
        responsibilities: [
          "Being Response for ...",
          "Lead the Developerment of ...",
        ],
      },
    },
    {
      header: {
        company: "TripAdvisor",
        logo: "",
      },
      body: {
        role: "Software Engineer",
        start: "2014-06-25",
        end: "2017-06-30",
        responsibilities: [
          "Being Response for ...",
          "Lead the Developerment of ...",
        ],
      },
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200
  });
};