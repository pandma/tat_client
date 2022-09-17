import pageService from "../api/service/page.service";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import subPageService from "../api/service/subPage.service";

const MainPage = ({ props }) => {
  const { query } = useRouter();
  return (
    <div>
      <Page page={props.page} subPage={props.subPages} />
    </div>
  );
};


export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const dta = await pageService.newPageById(query.id);
  const page = dta.data.data;

  const asociateSubPages = await subPageService.getSubpagesByPageId(query.id);
  const subPages = asociateSubPages.data.data;
  const props = {
    page, subPages
  };

  // Pass data to the page via props
  return { props: { props } };
}

export default MainPage;




