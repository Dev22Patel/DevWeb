
interface EducationItem {
  institution: string;
  logo: string;
  degree: string;
  period: string;
}

const EducationSection = () => {
  const educationData: EducationItem[] = [
    {
      institution: "Buildspace",
      logo: "/buildspace-logo.png",
      degree: "s3, s4, sf1, s5",
      period: "2023 - 2024"
    },
    {
      institution: "University of Waterloo",
      logo: "/waterloo-logo.png",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      period: "2016 - 2021"
    },
    {
      institution: "Wilfrid Laurier University",
      logo: "/laurier-logo.png",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      period: "2016 - 2021"
    },
    {
      institution: "International Baccalaureate",
      logo: "/ib-logo.png",
      degree: "IB Diploma",
      period: "2012 - 2016"
    }
  ];

  return (
    <div className="bg-black text-gray-100 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-start">Education</h2>
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="flex text-start items-start space-x-4 p-4 rounded-lg bg-black hover:bg-gray-700 transition-colors duration-300"
          >
            <div className="flex-shrink-0">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="w-12 h-12 rounded-full bg-gray-700"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-blue-400">
                {item.institution}
              </h3>
              <p className="text-gray-300 mt-1">
                {item.degree}
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
