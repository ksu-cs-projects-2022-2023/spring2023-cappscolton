class Equivalency extends D1Type {
  equivalency_id: number;
  activity_id: number;

  constructor(equivalency_id: number, activity_id: number) {
    super();
    this.equivalency_id = equivalency_id;
    this.activity_id = activity_id;
  }
}
