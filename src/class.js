/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer({ name: "Luis Davaria" }, "Ts");
 * newProgrammer.getInfo();
 *
 * @see https://www.youtube.com/watch?v=r0H-acWQS6c
 * @todo Implemx
 */
class Programmer {
  /**
   * @param {User} user User's information
   * @param {string} language a programming language
   */
  constructor(user, language) {
    this.fullname = user.name;
    this.language = language;
  }

  /**
   * Get programmer information
   * @returns {void}
   */
  getInfo() {
    console.log(
      `I'm ${this.fullname} and my favourite programming language is ${this.language} `
    );
  }
}

/**
 * Know more in {@link Programmer}
 */
const programmerOne = new Programmer({ name: "Luis Davaria" }, "Ts");

programmerOne.getInfo();
