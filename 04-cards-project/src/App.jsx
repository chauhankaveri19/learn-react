
import Card from './components/Card'

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "/logos/google.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "/logos/meta.svg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Bengaluru, India",
  },

 
 
 
  {
    brandLogo: "/logos/nvidia.svg",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "/logos/openai.svg",
    companyName: "OpenAI",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "/logos/adobe.svg",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$36/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "/logos/tesla.svg",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Austin, USA",
  },
];

  return (
    <div className='card'>
      {jobOpenings.map((elem, index) => (
        <Card key={index} {...elem} />
      ))}
    </div>
  )
}

export default App
