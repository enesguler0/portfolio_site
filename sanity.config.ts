import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas/index";

const config= defineConfig({
    projectId: "8xvz2r5k",
    dataset:"production",
    title: "My Personal Website",
    apiVersion:"2023-03-05",
    basePath:"/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})
export default config;