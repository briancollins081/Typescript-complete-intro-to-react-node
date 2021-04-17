// Bind decorator
function AutoBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const orginalMethod = descriptor.value;
  const adjustedMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      return orginalMethod.bind(this);
    },
  };
  return adjustedMethod
}

// Project Input
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;

  formElement: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.formElement = importedNode.firstElementChild as HTMLFormElement;
    this.formElement.id = "user-input";

    this.titleInputEl = this.formElement.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputEl = this.formElement.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputEl = this.formElement.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @AutoBind //or use .bind when calling this method
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputEl.value);
  }

  private configure() {
    this.formElement.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const projectInput = new ProjectInput();
