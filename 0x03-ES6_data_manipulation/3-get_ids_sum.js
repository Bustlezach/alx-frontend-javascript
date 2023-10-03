function getStudentIdsSum(studentObjects) {
  const studentIds = studentObjects.map(student => student.id);
  const sum = studentIds.reduce((accumulator, current) => accumulator + current, 0);
  return sum;
}

export default getStudentIdsSum;
