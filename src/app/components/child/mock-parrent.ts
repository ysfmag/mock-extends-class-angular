import * as _ from "lodash";

const mockParrent = (mockedComponent, mockedMethod) => {
  console.log(mockedMethod);
  for (let key in mockedMethod) {
    console.log(typeof mockedComponent[key]);
    if (typeof mockedComponent[key] === "function") {
      spyOn(mockedComponent, key).and.returnValue(mockedMethod[key]);
    } else if (typeof mockedComponent[key] === "object") {
      mockedComponent[key] = Object.assign({}, mockedMethod[key]);
    } else {
      mockedComponent[key] = mockedMethod[key];
    }
  }
  return mockedComponent;
};

export default mockParrent;
