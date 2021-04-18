/// <reference path="base.ts" />
/// <reference path="../utils/validation.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../state/project-state.ts" />

namespace App {
  // Project Input
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputEl: HTMLInputElement;
    descriptionInputEl: HTMLInputElement;
    peopleInputEl: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");
      this.titleInputEl = this.element.querySelector(
        "#title"
      )! as HTMLInputElement;
      this.descriptionInputEl = this.element.querySelector(
        "#description"
      )! as HTMLInputElement;
      this.peopleInputEl = this.element.querySelector(
        "#people"
      )! as HTMLInputElement;
      this.configure();
    }

    configure() {
      this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
      const title = this.titleInputEl.value;
      const description = this.descriptionInputEl.value;
      const people = this.peopleInputEl.value;

      const titleValidatable: Validatable = {
        value: title,
        required: true,
      };
      const descValidatable: Validatable = {
        value: description,
        required: true,
        minLength: 5,
      };
      const peopleValidatable: Validatable = {
        value: Number(people),
        required: true,
        min: 1,
        max: 10,
      };

      if (
        !validate(titleValidatable) ||
        !validate(descValidatable) ||
        !validate(peopleValidatable)
      ) {
        alert("Invalid input, try again!");
        return;
      } else {
        return [title, description, Number(people)];
      }
    }

    private clearInputs() {
      this.titleInputEl.value = "";
      this.descriptionInputEl.value = "";
      this.peopleInputEl.value = "";
    }

    @AutoBind //or use .bind when calling this method
    private submitHandler(e: Event) {
      e.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        //   console.log({ title, desc, people });
        projectState.addProject(title, desc, people);
        this.clearInputs();
      }
    }
  }
}
