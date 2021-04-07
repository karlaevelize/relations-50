const House = require("./models").house
const Student = require("./models").student

async function studentsWithHouses(){
  const students = await Student.findAll({include: {model: House}})
  return students.map(data => data.get({plain: true}))
}

studentsWithHouses().then(data => console.log(data))

