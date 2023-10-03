function updateStudentGradeByCity(studentObjects, city, newGrades) {
  const studentByLocation = studentObjects
    .filter(area => area.location === city)
    .map(student => {
      const gradeClass = newGrades
        .filter(gradeLevel => gradeLevel.studentId === student.id)
        .map(row => row.grade)[0];
      const grade = gradeClass || 'N/A';
      return { ...student, grade };
    });
  return studentByLocation;
}

export default updateStudentGradeByCity;
