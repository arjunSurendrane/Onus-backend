import axios from "./index";

export const urls = {
  addMember: "/workspace/member/",
  createWorkspace: "/workspace",
  createTask: "/workspace/task",
  createProject: "/workspace/project",
  sendInvitation: "/workspace/invitation/",
  addDepartment: "/workspace/department/",
  changeTaskStatus: "/workspace/task/status/",
  changePriority: "/workspace/task/priority/",
  taskUpdate: "/workspace/task/",
  assignTask: "/workspace/task/assign",
  deleteTask: "/workspace/task/",
  workspace: "/workspace",
  groupAllTasks: "/workspace/task/:id/list",
  getOneTask: "/workspace/task/",
  projects: "/workspace/projects/",
};

export const sendRequest = async (
  link,
  id = null,
  data = null,
  token,
  operation
) => {
  try {
    if (operation == "get") {
      const res = await axios.get(urls[link], {
        headers: { authorization: `Bearer ${token}` },
      });
      return res;
    }
    if (operation == "post") {
      const res = await axios.post(urls[link], data, {
        headers: { authorization: `Bearer ${token}` },
      });
      return res;
    }
    if (operation == "patch") {
      const res = await axios.patch(`${urls[link]}${id}`, data, {
        headers: { authorization: `Bearer ${token}` },
      });
      return res;
    }
    if (operation == "delete") {
      const res = await axios.delete(`${urls[link]}${id}`);
      return res;
    }
  } catch (error) {
    return error;
  }
};
