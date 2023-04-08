class CourseStudent extends D1Type {
  course_id: number;
  student_id: number;

  constructor(course_id: number, student_id: number) {
    super();
    this.course_id = course_id;
    this.student_id = student_id;
  }
}
