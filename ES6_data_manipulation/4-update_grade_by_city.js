export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const found = newGrades.filter((g) => g.studentId === student.id);
      return { ...student, grade: found.length ? found[0].grade : 'N/A' };
    });
}
