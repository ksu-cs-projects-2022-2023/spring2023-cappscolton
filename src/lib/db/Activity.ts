class Activity extends D1Type {
  activity_id: number;
  lti_url: string;
  course_id: number;

  constructor(activity_id: number, lti_url: string, course_id: number) {
    super();
    this.activity_id = activity_id;
    this.lti_url = lti_url;
    this.course_id = course_id;
  }
}
