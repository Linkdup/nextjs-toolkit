import { ProjectState } from "../../types";
interface Props {
    data: {
        [key: string]: unknown;
    };
    type: string;
    templates: Array<string>;
}
declare const createPage: (project: ProjectState) => ({ data, type, templates }: Props) => JSX.Element;
export default createPage;
