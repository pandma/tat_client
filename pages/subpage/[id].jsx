import { useRouter } from "next/router";
import SubPage from "../../components/Page";
import subPageService from "../api/service/subPage.service";

const MainSubPage = ({ page }) => {
    const { query } = useRouter();

    return (
        <div>
            <SubPage page={page} />
        </div>
    );
};


export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const dta = await subPageService.newPageById(query.id);
    const page = dta.data.data;

    // Pass data to the page via props
    return { props: { page } };
}

export default MainSubPage;
