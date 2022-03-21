import { useEffect, useState } from "react";

const rowsToTournamentObjects = (values) => {
  const [headerRow, ...rows] = values;

  return rows.map(row => {
    return row.reduce((prev, cur, index) => {
      const propertyKey = headerRow[index];

      let propertyValue = cur;

      switch (propertyKey) {
        case "online": {
          propertyValue = cur === "TRUE";
          break;
        }
        case "regionTags": {
          propertyValue = cur.split(",").map(v => v.trim());
          break;
        }
        case "brackets": {
          propertyValue = cur.split(",").map(v => v.trim());
          break;
        }
      }

      return {
        ...prev,
        [propertyKey]: propertyValue
      };
    }, {});
  });
};

export const useTournaments = (): any[]|null => {
  const [tournaments, setTournaments] = useState<any[]|null>(null);

  useEffect(() => {
    fetch("http://localhost:9999/.netlify/functions/getTournaments")
    .then(response => response.json())
    .then(result => {
      const { values } = result;
      setTournaments(rowsToTournamentObjects(values));
    });
  }, []);

  return tournaments;
};