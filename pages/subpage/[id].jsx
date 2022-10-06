import { useRouter } from "next/router";
import SubPage from "../../components/SubPage";
import taskService from "../api/service/task.service";

const MainSubPage = ({ props }) => {
    const { query } = useRouter();

    return (
        <div>
            <SubPage page={props.subPage} tasks={props.tasks} />
        </div>
    );
};


export async function getServerSideProps({ query }) {
    const dta = await subPageService.newPageById(query.id);
    const subPage = dta.data.data;
    const asociateTask = await taskService.getTaskBySubpageId(query.id);
    const tasks = asociateTask.data.data;
    const props = {
        subPage, tasks
    };

    return { props: { props } };
}

export default MainSubPage;
