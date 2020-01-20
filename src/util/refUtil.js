const globalRefs = [];

const refUtil = {
  push: ref => globalRefs.push(ref),
  get: index => globalRefs[index],
};

export default refUtil;
