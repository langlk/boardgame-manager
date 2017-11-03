export class Event {
  constructor(
    public date: Date,
    public name: string,
    public location: string,
    public gameTypes: string[]
  ) {}
}
