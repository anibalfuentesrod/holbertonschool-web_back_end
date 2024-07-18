export default class Building {
  // initialize the sqft attribute
  constructor(sqft) {
    // (abstract class check)
    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
    // Set the sqft attribute
    this._sqft = sqft;
  }

  // Gett.. for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    if (this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
