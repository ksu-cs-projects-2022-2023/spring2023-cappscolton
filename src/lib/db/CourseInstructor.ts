class CourseInstructor extends D1Type {
  instructor_id: number;
  course_id: number;

  constructor(instructor_id: number, course_id: number) {
    super();
    this.instructor_id = instructor_id;
    this.course_id = course_id;
  }
}
