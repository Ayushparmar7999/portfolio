const downloadResumeBtn = document.getElementById("download-resume");

downloadResumeBtn.addEventListener("click", () => {
  // Replace this with your actual resume data
  const resumeData = {
    name: "John Doe",
    email: "john.doe@example.com",
    experience: [
      // ... list of experience objects
    ],
    skills: [
      // ... list of skills
    ],
  };

  // Create a JSON file for download
  const jsonData = JSON.stringify(resumeData, null, 2); // Indent for readability
  const blob = new Blob([jsonData], { type: "application/json;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "resume.json";
  link.click();

  window.URL.revokeObjectURL(url); // Revoke to avoid memory leaks
});
