function getStudentsByLocation(studentObjects, city) {
  const result = studentObjects.filter(student => student.location === city);
  return result;
}
export default getStudentsByLocation;
