import HomeComponet from "../components/Home/home.componet";
import pageService from "./api/service/page.service";


const Home = ({ pages }) => {
  return <HomeComponet pages={pages} />;
};


export async function getServerSideProps() {

  // Fetch data from external API
  const dta = await pageService.getPages();
  const res = dta.data.data;
  const pages = res;

  // Pass data to the page via props
  return { props: { pages } };
}
export default Home;