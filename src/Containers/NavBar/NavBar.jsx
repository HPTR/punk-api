import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {

    const { filters, handleSearchChange, handleCheck } = props;

  return (
    <div>
        <SearchBox handleSearchChange={handleSearchChange} />
        <FiltersList handleCheck={handleCheck} filters={filters} />
    </div>
  )
}

export default NavBar