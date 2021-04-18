import { Component } from "../components/base";
import { AutoBind } from "../decorators/autobind";
import { projectState } from "../state/project-state";
import { DragTarget } from "../models/dragdrop";
import { Project, ProjectStatus } from "../models/project";
import { ProjectListItem } from "./project-item";

// Project List Class
export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];
    this.configure();
    this.renderContent();
  }
  @AutoBind
  dragOverHandler(_event: DragEvent): void {
    _event.preventDefault(); // for js to allow drop event
    if (_event.dataTransfer && _event.dataTransfer.types[0] === "text/plain") {
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }
  @AutoBind
  dropHandler(_event: DragEvent): void {
    const projId = _event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      projId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }
  @AutoBind
  dragLeaveHandler(_event: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projectsList: Project[]) => {
      const filteredProjects: Project[] = projectsList.filter((p) => {
        if (this.type === "active") {
          return p.status === ProjectStatus.Active;
        }
        return p.status === ProjectStatus.Finished;
      });
      this.assignedProjects = filteredProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const pItm of this.assignedProjects) {
      /* // Initial implementation
     const listItem = document.createElement("li");
    listItem.textContent = pItm.title;
    listEl?.appendChild(listItem); */

      /* // My implementation
    const listItem = new ProjectListItem(pItm.title).listElement;
    listEl?.appendChild(listItem); 
    */

      //  New implementation using components
      new ProjectListItem(this.element.querySelector("ul")!.id, pItm);
    }
  }
}
