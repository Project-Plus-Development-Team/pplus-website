import { Dispatch } from "react";
import { Dropdown } from "react-bulma-components";

interface Props {
  filter: string
  setFilter: Dispatch<string>
  tournaments: any[]
}

const getRegionFiltersFromTournaments = (tournaments: any[]) => {
  const filters = new Set(["all"]);

  tournaments
    .flatMap(t => t.regionTags)
    .filter(tag => tag)
    .forEach(tag => filters.add(tag));

  return [...filters];
};

export const RegionFilter = ({
  filter, setFilter, tournaments
}: Props) => {
  if (tournaments === null) {
    return null;
  }

  const regionFilters = getRegionFiltersFromTournaments(tournaments);
  
  if (regionFilters.length === 0) {
    return null;
  }

  return (
    <>
      <span className="ml-auto mr-3">Region filter:</span>
      <Dropdown
        label="Region Filter"
        value={filter}
        onChange={setFilter}
        color="dark"
        className="region-filter"
      >
        {regionFilters.map(tag => (
          <Dropdown.Item key={tag} value={tag}>
            {tag}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </>
  );
};