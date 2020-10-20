import React from "react";

export const mapCountriesToListItems = (countries = []) => {
  return countries.map(({ flag, name, callingCodes }) => ({
    lable: `${name} (+${callingCodes[0]})`,
    value: name,
    leftIcon: (
      <img style={{ width: 25, height: 25, marginRight: 10 }} src={flag} />
    ),
    code: `+${callingCodes[0]}`,
  }));
};
