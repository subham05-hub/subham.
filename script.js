// Active nav highlight on scroll
const links=document.querySelectorAll('.top nav a');
const secs=[...links].map(a=>document.querySelector(a.getAttribute('href')));
addEventListener('scroll',()=>{
  let i=0;secs.forEach((s,n)=>{if(s&&s.getBoundingClientRect().top<140)i=n});
  links.forEach((a,n)=>a.classList.toggle('active',n===i));
});
// Message box opens the visitor's mail app
document.getElementById('contact').addEventListener('submit',e=>{
  e.preventDefault();
  const m=encodeURIComponent(document.getElementById('m').value);
  location.href='mailto:subhambishoyi@gmail.com?subject=Portfolio%20Message&body='+m;
});
