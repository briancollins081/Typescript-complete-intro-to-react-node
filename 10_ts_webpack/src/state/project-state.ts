import { Project, ProjectStatus } from "../models/project.js";
// Listeners Type
type Listener<T> = (items: T[]) => void;

// Project State Parent
class State<T> {
  protected listeners: Listener<T>[] = [];
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}
// Project State Child
export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ProjectState();
    }
    return this.instance;
  }
  addProject(title: string, description: string, noOfPeople: number) {
    const newProject = new Project(
      Math.random().toString().concat(new Date().getTime().toString()),
      title,
      description,
      noOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(id: string, newStatus: ProjectStatus) {
    const project = this.projects.find((el) => el.id === id);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}
// Instantiate Global App State
export const projectState = ProjectState.getInstance();
