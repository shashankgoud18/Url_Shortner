export default function wrapAsync(asyncFunction) {
  return (req, res, next) => {
    asyncFunction(req, res, next).catch(next);
  };
}