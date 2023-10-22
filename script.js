let students = []
document.getElementById('add-std-btn').addEventListener('click', function () {
  let stdName = document.getElementById('std-input').value
  students.push(stdName)
  document.getElementById('students').innerHTML = students
  document.getElementById('std-input').value = ''
})

document
  .getElementById('remove-std-btn')
  .addEventListener('click', function () {
    students.pop()
    document.getElementById('students').innerHTML = students
  })
