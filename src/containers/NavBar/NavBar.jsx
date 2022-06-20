import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";
import './NavBar.scss'

const NavBar = (props) => {

    const { filterLabels, handleSearchChange, handleCheck } = props;

  return (
    <div className="navbar">
        <SearchBox handleSearchChange={handleSearchChange} />
        <FiltersList handleCheck={handleCheck} filterLabels={filterLabels} />
    </div>
  )
}

export default NavBar
