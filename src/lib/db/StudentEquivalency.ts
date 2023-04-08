class StudentEquivalency extends D1Type {
  student_id: number;
  equivalency_id: number;

  constructor(student_id: number, equivalency_id: number) {
    super();
    this.student_id = student_id;
    this.equivalency_id = equivalency_id;
  }
}
