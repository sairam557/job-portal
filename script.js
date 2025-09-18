// Sample job data
const jobs = [
  { title: "Frontend Developer", company: "ABC Tech", location: "Bangalore" },
  { title: "Backend Engineer", company: "XYZ Ltd", location: "Hyderabad" },
  { title: "Data Analyst", company: "DataCorp", location: "Mumbai" },
  { title: "DevOps Engineer", company: "CloudWorks", location: "Remote" }
];

const jobList = document.getElementById("jobList");

// Show jobs on page
function showJobs(data) {
  jobList.innerHTML = "";
  data.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
    `;
    jobList.appendChild(card);
  });
}
showJobs(jobs);

// Simple search
document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();

  const filtered = jobs.filter(j =>
    (!keyword || j.title.toLowerCase().includes(keyword)) &&
    (!location || j.location.toLowerCase().includes(location))
  );

  showJobs(filtered.length ? filtered : [{title:"No jobs found", company:"", location:""}]);
});
