export async function getDrivers() {
  const DRIVERS = "https://api.openf1.org/v1/drivers?session_key=9158";
  const raw_data = await fetch(DRIVERS);
  const json = await raw_data.json();

  return json.map((driver) => {
    const {
      driver_number,
      country_code,
      name_acronym,
      first_name,
      last_name,
      full_name,
      team_name,
      team_colour,
      headshot_url,
    } = driver;

    const getTeamName = (team_name) => {
      if (team_name === "Alfa Romeo") return "Kick Sauber";
      if (team_name === "AlphaTauri") return "RB";
      return team_name; // Valor por defecto si no cumple las condiciones anteriores
    };

    const color = "#" + team_colour.toLowerCase();
    const lastName = last_name.toUpperCase();
    const teamColour = team_name === "Alfa Romeo" ? "#52E252" : color;

    return {
      driver_number,
      country_code,
      name_acronym,
      first_name,
      last_name: lastName,
      full_name,
      team_name: getTeamName(team_name),
      team_colour: teamColour,
      headshot_url,
    };
  });
}

export async function getDriverByNumber(number) {
  const DRIVER = `https://api.openf1.org/v1/drivers?driver_number=${number}&session_key=9158`;
  const raw_data = await fetch(DRIVER);
  const json = await raw_data.json();

  const drivers = json.map((driver) => {
    const {
      driver_number,
      country_code,
      name_acronym,
      first_name,
      last_name,
      full_name,
      team_name,
      team_colour,
      headshot_url,
    } = driver;

    const getTeamName = (team_name) => {
      if (team_name === "Alfa Romeo") return "Kick Sauber";
      if (team_name === "AlphaTauri") return "RB";
      else return team_name;
    };

    const color = "#" + team_colour.toLowerCase();
    const teamColour = team_name === "Alfa Romeo" ? "#52E252" : color;

    return {
      driver_number,
      country_code,
      name_acronym,
      first_name,
      last_name,
      full_name,
      team_name: getTeamName(team_name),
      team_colour: teamColour,
      headshot_url,
    };
  });

  return drivers[0];
}
