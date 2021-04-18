import { Draggable } from "../models/dragdrop.js";
import { Project } from "../models/project.js";
import { Component } from "../components/base.js";
import { AutoBind } from "../decorators/autobind.js"

export // Project List Item
/* my implementation
  class ProjectListItem {
    listElement: HTMLLIElement;
    constructor(title: string) {
      this.listElement = document.createElement("li");
      this.listElement.textContent = title;
    }
  }*/
class ProjectListItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }
  constructor(hostId: string, private project: Project) {
    super("single-project", hostId, false, project.id);

    this.configure();
    this.renderContent();
  }
  @AutoBind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move"; //cursor type
  }
  dragEndHandler(event: DragEvent): void {
    console.log("DragEnd", event.timeStamp);
  }
  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}
