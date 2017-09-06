export class Thought {
  id: string;
  approved?: boolean;
  body: string;
  email: string;
  public creationDate: number = Date.now();
  location?: string;
  author?: string;

  constructor(newData: object) {
    this.validateValues(newData);
  }

  validateValues(newValues: object) {
    Object.keys(newValues).forEach(key => {
      const value = newValues[key];
      if (!!value) {
        this[key] = value;
      }
    });
  }

  getId(): string {
    const date = new Date(this.creationDate);
    return date.toLocaleDateString().replace(/\//g, '-');
  }
}
