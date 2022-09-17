const submitFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-submit').value.trim();
    const projectName = document.querySelector('#projectName-submit').value.trim();
    const userStory = document.querySelector('#userStory-submit').value.trim();
    const repoLink = document.querySelector('#repoLink-submit').value.trim();
    const appLink = document.querySelector('#appLink-submit').value.trim();
  
    if (username && projectName && userStory && repoLink && appLink) {
        //What route to send data to
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ email, password, userStory, repoLink, appLink }),
        headers: { 'Content-Type': 'application/json' },
      });
        //If I get a response, where to redirect? homepage or project page?
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  
  
  document
    .querySelector('.submit-form')
    .addEventListener('submit', submitFormHandler);