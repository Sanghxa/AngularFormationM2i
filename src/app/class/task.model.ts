export class Task {
  constructor(
    public id: number,
    public title: string,
    public status: boolean,
    public description: string,
    public createdDate: Date
  ) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.description = description;
    this.createdDate = createdDate;
  }
}
