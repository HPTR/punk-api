import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {

    const { filters } = props;

  return (
    <div>
        <SearchBox />
        <FiltersList filters={filters} />
    </div>
  )
}

export default NavBar