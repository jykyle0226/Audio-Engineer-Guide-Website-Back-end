fetch('http://localhost:4000/Feedback', {
  'method': 'POST',
  'Content-type': 'Application/json',
  'body': JSON.stringify({
    date: 'test',
    name: 'test',
    role: 'test',
    feedback: 'test',
    solution: 'test'
  })
})
.then(res => res.json())
.then(data => console.log(data))