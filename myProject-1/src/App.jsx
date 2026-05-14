import Card from "./components/Card"

  const jobs = 
  [
    {
      "companyLogo": "https://logo.clearbit.com/google.com",
      "companyName": "Google",
      "designation": "Software Engineer",
      "pay": "$140,000/year",
      "location": "Mountain View, CA, USA"
    },
    {
      "companyLogo": "https://logo.clearbit.com/microsoft.com",
      "companyName": "Microsoft",
      "designation": "Frontend Developer",
      "pay": "$125,000/year",
      "location": "Seattle, WA, USA"
    },
    {
      "companyLogo": "https://logo.clearbit.com/amazon.com",
      "companyName": "Amazon",
      "designation": "Cloud Engineer",
      "pay": "$135,000/year",
      "location": "Austin, TX, USA"
    },
    {
      "companyLogo": "https://logo.clearbit.com/meta.com",
      "companyName": "Meta",
      "designation": "Product Designer",
      "pay": "$120,000/year",
      "location": "Menlo Park, CA, USA"
    },
    {
      "companyLogo": "https://logo.clearbit.com/netflix.com",
      "companyName": "Netflix",
      "designation": "Backend Engineer",
      "pay": "$155,000/year",
      "location": "Los Gatos, CA, USA"
    },
    {
      "companyLogo": "https://logo.clearbit.com/apple.com",
      "companyName": "Apple",
      "designation": "iOS Developer",
      "pay": "$145,000/year",
      "location": "Cupertino, CA, USA"
    },
    {
      "companyLogo": "https://logo.clearbit.com/spotify.com",
      "companyName": "Spotify",
      "designation": "Data Analyst",
      "pay": "$110,000/year",
      "location": "Stockholm, Sweden"
    },
    {
      "companyLogo": "https://logo.clearbit.com/airbnb.com",
      "companyName": "Airbnb",
      "designation": "DevOps Engineer",
      "pay": "$138,000/year",
      "location": "San Francisco, CA, USA"
    }
  ]

const App = () => {
  return (
    <>
    {jobs.map(function(elem, idx){
      return(
        <Card key={idx} company={elem.companyName} logo={elem.companyLogo} design = {elem.designation} salary = {elem.pay} location={elem.location} />
      )  
    })}
    </>
  )
}

export default App



