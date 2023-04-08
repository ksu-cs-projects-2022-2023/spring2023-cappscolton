class CourseActivity extends D1Type {
  course_id: number;
  activity_id: number;

  constructor(course_id: number, activity_id: number) {
    super();
    this.activity_id = activity_id;
    this.course_id = course_id;
  }
}
