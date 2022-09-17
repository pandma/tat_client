import pageService from "../api/service/page.service";
import { useRouter } from "next/router";
import SubPage from "../../components/Page";

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
    const dta = await pageService.newPageById(query.id);
    const page = dta.data.data;

    // Pass data to the page via props
    return { props: { page } };
}

export default MainSubPage;
