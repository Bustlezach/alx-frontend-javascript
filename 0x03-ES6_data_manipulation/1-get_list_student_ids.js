function getListStudentIds(studentObjects) {
  if (!Array.isArray(studentObjects)) {
    return [];
  }
  
  const studentIds = studentObjects.map((student) => student.id);
  
  return studentIds;
}

export default getListStudentIds;
